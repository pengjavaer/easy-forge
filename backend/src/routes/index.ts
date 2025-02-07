import { Router } from 'express'
import userRoutes from '../modules/user/routes/user.routes'
import authRoutes from '../modules/auth/routes/auth.routes'
// 暂时注释掉未实现的路由
// import roleRoutes from '../modules/role/routes/role.routes'
// import permissionRoutes from '../modules/permission/routes/permission.routes'

const router = Router()

router.use('/users', userRoutes)
router.use('/auth', authRoutes)
// 暂时注释掉未实现的路由
// router.use('/roles', roleRoutes)
// router.use('/permissions', permissionRoutes)

export default router 