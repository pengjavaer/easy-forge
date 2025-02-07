import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  constructor(private authService: AuthService) {}

  async login(req: Request, res: Response) {
    try {
      const authResponse = await this.authService.login(req.body);
      res.json(authResponse);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
} 