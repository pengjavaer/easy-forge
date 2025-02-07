export interface ILoginDto {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
} 