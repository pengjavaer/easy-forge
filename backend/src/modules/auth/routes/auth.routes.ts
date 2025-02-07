import { Router } from 'express';

const router = Router();

router.post('/login', async (req, res) => {
  // 这是一个测试用的简单登录实现
  const { username, password } = req.body;
  
  // 模拟验证
  if (username === 'admin' && password === 'admin') {
    res.json({
      token: 'test-token-123',
      user: {
        id: '1',
        username: 'admin',
        name: '管理员'
      }
    });
  } else {
    res.status(401).json({
      message: '用户名或密码错误'
    });
  }
});

export default router; 