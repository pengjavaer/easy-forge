import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([
    { id: '1', name: 'admin', description: '管理员' },
    { id: '2', name: 'user', description: '普通用户' }
  ]);
});

export default router; 