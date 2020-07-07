import { Model } from '../../resources/Sequelize';

export interface UserModel extends Model<UserModel, any> {
    id: number,
    fullname: string,
    rekening_number: BigInt,
    pin: string,
    id_bank: number,
    createdAt?: Date
    updatedAt?: Date
}