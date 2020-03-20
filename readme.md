### 项目结构
```js
src                      // 根目录
├─ assets                // 客户端静态资源
│  ├─ css
│  ├─ img
│  └─ js
│     ├─ axios.min.js
│     ├─ util.js
│     └─ vue.min.js
│
├─ controller            // 控制器 用于解析用户输入，处理后返回相应的结果
│  └─ userController.js
│
├─ module                // 模型 用于定义数据模型
│  ├─ config.js          // 服务端配置
│  ├─ db.js              // 数据库请求封装
│  └─ userModule.js
│
├─ views                 // 视图 返回客户端视图
│  ├─ addUser.html
│  ├─ editUser.html
│  └─ index.html
│
├─ app.js                // 入口文件
│
├─ package.json          // yarn/npm 配置文件
│
└─ router.js             // 客户端视图路由
```


### 运行
```bash
$ yarn serve
```


### 添加环境变量（这个命令是每次重启终端都要执行的）
```bash
$ export PATH=/usr/local/mongodb/bin:$PATH

$ sudo mongod --dbpath=/Users/[yourusername]/mongodb/data/db
```


### mongodb 配置使用
> [http://blog.starpoetry.cn/](http://blog.starpoetry.cn/2020/03/13/mongodb-in-macos10/)


### koa2 文档
> [https://koa.bootcss.com](https://koa.bootcss.com)


### koa-router 服务端路由文档
> [https://github.com/koajs/router/](https://github.com/koajs/router/blob/master/API.md)


### axios 客户端路由文档
> [https://github.com/axios/](https://github.com/axios/axios)


