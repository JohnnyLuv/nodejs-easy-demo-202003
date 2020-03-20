const Koa = require('koa'),
  app = new Koa()

const Router = require('koa-router'),
  router = new Router()

// 模板引擎
const views = require('koa-views')
app.use(views('views'))

// request中间件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 设置静态文件目录
const static = require('koa-static')
app.use(static(__dirname))



// 页面路由注册
const viewRouter = require('./router')
app.use(viewRouter.routes()).use(router.allowedMethods())

// 接口路由注册
const userApi = require('./controller/userController')
app.use(userApi.routes()).use(router.allowedMethods())


app.listen(3000, () => {
  console.log('service running at http://localhost:3000/')
})
