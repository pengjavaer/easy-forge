import express from 'express'
import cors from 'cors'
import { config } from './config'
import routes from './routes'
import { errorHandler } from './middleware/error.middleware'

const app = express()

// 中间件
app.use(cors())
app.use(express.json())

// 路由
app.use('/api', routes)

// 错误处理
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port} in ${config.nodeEnv} mode`)
}) 