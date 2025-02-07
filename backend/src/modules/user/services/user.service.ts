import { IUser, ICreateUserDto } from '../types/user.types';

export class UserService {
  private users: IUser[] = [];

  async createUser(userData: ICreateUserDto): Promise<IUser> {
    const newUser: IUser = {
      id: Date.now().toString(),
      ...userData,
      roleIds: userData.roleIds || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.push(newUser);
    return newUser;
  }

  async getUsers(): Promise<IUser[]> {
    return this.users;
  }
} 