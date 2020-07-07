
import { Request, Response, NextFunction } from 'express'
import { sign } from 'jsonwebtoken'
import Cache from '../../foundation/Cache'
import Password from '../../foundation/Password'
export default class User {
    public profile = (req: Request, res: Response, next: NextFunction): NextFunction|Response|void => {
        if(typeof req.headers['authorization'] != 'undefined') {
            const bearerHeader = req.headers['authorization'];
            const bearerToken  = bearerHeader.split(' ');
            const token        = bearerToken[1];
            if(token) {
                return next(token);
            }else{
                return res.status(401).json({
                    status: false,
                    message: 'Unathorized'
                })
            }
        }
    }
    
    public getCacheAllUser = (req: Request, res: Response, next: NextFunction): NextFunction|Response|void => {
        Cache.get('user:all', (err, data) => {
            if(data != null) {
                return res.status(200).json({
                    type: 'success',
                    message: 'All of user',
                    data: JSON.parse(data)
                })
            }else{
                return next();
            }
        })
    }
}