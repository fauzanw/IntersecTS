import express, {Application, Request, Response} from 'express';


import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import WebRoute from './routes/web';
import ApiRoute from './routes/api';

class App {
    protected app: Application;
    protected WebRoute: WebRoute = new WebRoute();
    protected ApiRoute: ApiRoute = new ApiRoute();
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.listen();
    }

    private config(): void {
        const { app } = this;
        dotenv.config();
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(morgan("dev"));
        app.use(compression());
        app.use(helmet());
        app.use(cors());
    }

    private routes(): void {
        const { app } = this;
        this.ApiRoute.routes(app);
        this.WebRoute.routes(app);
    }

    private listen(): void {
        const { APP_HOST, APP_PORT } = process.env;
        this.app.listen(APP_PORT, () => console.log(`Intersec development server started: <http://${APP_HOST}:${APP_PORT}>`))
    }
}

new App();