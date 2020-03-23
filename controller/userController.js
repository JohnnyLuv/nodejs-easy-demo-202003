const Router = require('koa-router'),
  router = new Router()

router.prefix('/api')

const userModule = require('../module/userModule')

// 用户登录
router.post('/login', async ctx => {
  const response = await userModule.login(ctx)
  ctx.body = response
})

// 用户列表
router.get('/userList', async ctx => {
  const response = await userModule.userList(ctx)
  ctx.body = response
})

// 查询用户详情
router.get('/userInfo/:_id', async ctx => {
  const response = await userModule.userInfo(ctx)
  ctx.body = response
})

// 添加用户
router.post('/addUser', async ctx => {
  const response = await userModule.addUser(ctx)
  ctx.body = response
})

// 修改用户
router.post('/editUser', async ctx => {
  const response = await userModule.editUser(ctx)
  ctx.body = response
})

// 删除用户
router.del('/removeUser/:_id', async ctx => {
  const response = await userModule.removeUser(ctx)
  ctx.body = response
})

module.exports = router