export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  roleIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUserDto {
  username: string;
  email: string;
  password: string;
  roleIds?: string[];
} 