/* 页面路由 */

const Router = require('koa-router'),
  router = new Router()


// 首页/用户列表
router.get('/', async ctx => {
  await ctx.render('index.html')
})

// 用户登录
router.get('/login', async ctx => {
  await ctx.render('login.html')
})

// 新增用户
router.get('/user/add', async ctx => {
  await ctx.render('addUser.html')
})

// 修改用户
router.get('/user/edit/:_id', async ctx => {
  await ctx.render('editUser.html')
})

module.exports = router