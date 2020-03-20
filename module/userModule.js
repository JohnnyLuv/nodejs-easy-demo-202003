const DB = require('./db')


/**
 * 用户登录
 * @param {Object} ctx 
 */
const login = ctx => {
  const query = ctx.request.body
  console.log(query)
  return {
    status: 200,
    data: {},
    msg: 'login ok',
  }
}

/**
 * 用户列表
 * @param {Object} ctx 
 */
const userList = async ctx => {
  let response = {}
  const data = await DB.find('user', {})
  response = {
    status: 200,
    data,
    msg: 'success',
  }
  return response
}

/**
 * 用户详情
 * @param {Object} ctx 
 */
const userInfo = async ctx => {
  const _id = ctx.params._id
  console.log(_id)
  const result = await DB.find('user', { _id: DB.ObjectId(_id) })
  const response = {
    status: 200,
    data: result[0],
    msg: 'success',
  }
  return response
}

/**
 * 添加用户
 * @param {Object} ctx 
 */
const addUser = async ctx => {
  const query = ctx.request.body
  console.log(query)
  let response = {}
  switch (true) {
    case query.username === '':
      response = {
        status: 201,
        msg: 'username 必填',
      }
      break
    case query.password === '':
      response = {
        status: 201,
        msg: 'password 必填',
      }
      break
    default:
      const data = await DB.insert('user', query)
      response = {
        status: 200,
        data: data.ops[0],
        msg: '添加成功',
      }
      break
  }
  return response
}

/**
 * 修改用户
 * @param {Object} ctx 
 */
const editUser = async ctx => {
  const query = ctx.request.body
  console.log(query)
  await DB.update('user', { _id: DB.ObjectId(query._id) }, { username: query.username, password: query.password })
  const response = {
    status: 200,
    data: { _id: query._id },
    msg: 'success',
  }
  return response
}

/**
 * 删除用户
 * @param {Object} ctx 
 */
const removeUser = async ctx => {
  const _id = ctx.params._id
  await DB.delete('user', { _id: DB.ObjectId(_id) })
  const response = {
    status: 200,
    data: { _id },
    msg: 'success',
  }
  return response
}

module.exports = {
  login,
  userList,
  userInfo,
  addUser,
  editUser,
  removeUser,
}