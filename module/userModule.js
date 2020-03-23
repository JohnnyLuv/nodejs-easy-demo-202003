const DB = require('./db')
const jwt = require('jsonwebtoken')


/**
 * 用户登录
 * @param {Object} ctx 
 */
const login = async ctx => {
  const query = ctx.request.body
  // console.log(query)

  let response = {}
  switch (true) {
    case !query.username:
      response = { status: 201, msg: 'username 必填' }
      break
    case !query.password:
      response = { status: 201, msg: 'password 必填' }
      break
    default:
      const data = await DB.find('user', { username: query.username })
      if (query.username === data[0].username && query.password === data[0].password) {
        const token = jwt.sign(
          {
            _id: data[0]._id,
            username: data[0].username,
          },
          'johnny_jwt_secret',
          { expiresIn: '1h' }
        )
        response = {
          status: 200,
          data: { ...data[0], token: `Bearer ${token}` },
          msg: '登录成功',
        }
      } else {
        response = { status: 201, msg: '账号或密码错误' }
      }
      break
  }
  return response
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
  const data = await DB.find('user', { _id: DB.ObjectId(_id) })
  const response = {
    status: 200,
    data: data[0],
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
      response = { status: 201, msg: 'username 必填' }
      break
    case query.password === '':
      response = { status: 201, msg: 'password 必填' }
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