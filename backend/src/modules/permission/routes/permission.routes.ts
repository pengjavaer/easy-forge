import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json([
    { id: '1', name: 'read', description: '读取权限' },
    { id: '2', name: 'write', description: '写入权限' },
    { id: '3', name: 'delete', description: '删除权限' }
  ]);
});

export default router; 