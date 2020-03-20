/* 页面路由 */

const Router = require('koa-router'),
  router = new Router()

// 首页
router.get('/', async ctx => {
  await ctx.render('index.html')
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