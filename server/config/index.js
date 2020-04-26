const path = require('path')

module.exports = {
  db: {
    database: process.env.DATABASE || 'movie', // 自定义传
    username: 'movie',
    password: 'movie',
    options: {
      host: 'localhost',
      dialeact: 'sqlite', // 指定数据库
      storage: path.resolve(__dirname, '../db/movie.sqlite')
    }
  }
}
