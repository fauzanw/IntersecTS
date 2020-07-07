import { Application } from 'express';
import { UserController } from '../app/Controllers';
import { User as UserMiddleware } from '../app/Middlewares';

export default class ApiRoute {
    private apiVersion = 'v1';
    private prefix     = `/api/${this.apiVersion}`;
    private User: UserController = new UserController();
    private UserMiddleware: UserMiddleware = new UserMiddleware();
    public routes = (Route: Application): void => {
        Route.get(`${this.prefix}/user/profile`, this.UserMiddleware.getCacheAllUser, this.User.profile);
    }
}