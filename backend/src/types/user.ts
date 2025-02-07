export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  roleIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDto {
  username: string;
  email: string;
  password: string;
  roleIds?: string[];
} 