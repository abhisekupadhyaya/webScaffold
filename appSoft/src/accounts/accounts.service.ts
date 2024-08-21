import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './account.schema';

@Injectable()
export class AccountsService {
  constructor(@InjectModel(Account.name) private accountModel: Model<AccountDocument>) {}

  async findOne(username: string): Promise<Account | null> {
    const account = await this.accountModel.findOne({ username }).exec();

    if (!account) {
      return null;
    }
    
    const { userId, password } = account;
    return { userId, username, password };
  }

  async create(account: Partial<Account>): Promise<Account> {
    const newAccount = new this.accountModel(account);
    return newAccount.save();
  }

  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async update(userId: string, account: Partial<Account>): Promise<Account | null> {
    return this.accountModel.findByIdAndUpdate(userId, account, { new: true }).exec();
  }

  async delete(userId: string): Promise<Account | null> {
    return this.accountModel.findByIdAndDelete(userId).exec();
  }
}