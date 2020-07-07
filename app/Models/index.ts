import { UserModel } from './UserModel';
import { BankModel } from './BankModel'
const models = require('../../database/models');

export const User: UserModel = models.user;
export const Bank: BankModel = models.bank;