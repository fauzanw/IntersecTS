import { Request, Response } from "express";
import { User } from "../Models";
import Cache from "../../foundation/Cache";


export default class Coba {
    public index = async (req: Request, res: Response) => {
        // find all user in database
        const AllUser = await User.findAll();

        // set all user to redis cache
        Cache.set('user:all', JSON.stringify(AllUser));

        // response with status 200 and format json
        return res.status(200).json({
            type: 'success',
            message: 'All of user',
            data: AllUser
        });
    }
}