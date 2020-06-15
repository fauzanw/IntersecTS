
import { Request, Response, NextFunction } from 'express'
import Cache from '../../foundation/Cache'
import Password from '../../foundation/Password'
export default class User {
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