import { Model } from '../../resources/Sequelize';

export interface UserModel extends Model<UserModel, any> {
    id: number,
    username: string,
    password: string,
    createdAt?: Date
    updatedAt?: Date
}