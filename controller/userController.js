const Router = require('koa-router'),
  router = new Router()

const { login, userList, userInfo, addUser, editUser, removeUser } = require('../module/userModule')

// 用户登录
router.post('/login', async ctx => {
  const response = login(ctx)
  ctx.body = response
})

// 用户列表
router.get('/userList', async ctx => {
  const response = await userList(ctx)
  ctx.body = response
})

// 查询用户详情
router.get('/userInfo/:_id', async ctx => {
  const response = await userInfo(ctx)
  ctx.body = response
})

// 添加用户
router.post('/addUser', async ctx => {
  const response = await addUser(ctx)
  ctx.body = response
})

// 修改用户
router.post('/editUser', async ctx => {
  const response = await editUser(ctx)
  ctx.body = response
})

// 删除用户
router.del('/removeUser/:_id', async ctx => {
  const response = await removeUser(ctx)
  ctx.body = response
})

module.exports = router