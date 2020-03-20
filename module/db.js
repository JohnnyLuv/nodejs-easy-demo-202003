/**
 * DB库
 */
const { MongoClient, ObjectId } = require('mongodb')
const Config = require('./config.js')

class Db {
  static getInstance() { //单例模式解决多次实例化问题
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }
  constructor() {
    this.dbClient = ''
    this.ObjectId = ObjectId
    this.connect() //实例化时自动连接数据库，提高查询效率
  }
  connect() {
    return new Promise((resolve, reject) => {
      if (!this.dbClient) { //解决数据库多次链接问题
        MongoClient.connect(Config.dbUrl, (err, client) => {
          if (err) {
            reject(err)
          }
          let db = client.db(Config.dbName)
          this.dbClient = db
          resolve(this.dbClient)
          // db.close() 注释成为长连接
        })
      } else {
        resolve(this.dbClient)
      }
    })
  }
  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        let result = db.collection(collectionName).find(json)
        result.toArray((err, docs) => {
          if (err) {
            reject(err)
          }
          resolve(docs)
        })
      })
    })
  }
  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).insertOne(json, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
      })
    })
  }
  update(collectionName, json1, json2) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).updateOne(json1, { $set: json2 }, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
      })
    })
  }
  delete(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).removeOne(json, (err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(res)
          }
        })
      })
    })
  }
}
module.exports = Db.getInstance()