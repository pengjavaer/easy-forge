import { User, CreateUserDto } from '../types/user';
import { hashPassword } from '../utils/password';

export class UserService {
  private users: User[] = [];

  public async getUsers(): Promise<User[]> {
    return this.users;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    const hashedPassword = await hashPassword(userData.password);
    
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
      password: hashedPassword,
      roleIds: userData.roleIds || [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.users.push(newUser);
    return newUser;
  }
} 