import { Application } from 'express';
import { Coba } from '../app/Controllers';
import { User as UserMiddleware } from '../app/Middlewares';

export default class ApiRoute {
    private Coba: Coba = new Coba();
    private UserMiddleware: UserMiddleware = new UserMiddleware();
    public routes = (Route: Application): void => {
        Route.get('/', this.UserMiddleware.getCacheAllUser, this.Coba.index);
    }
}