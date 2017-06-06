//引入path方法
const path = require('path');
//对webpack进行配置
//入口，出口，loader，插件    webpack核心
module.exports = {
  entry:'./app.js',
  output:{
    filename:'app.js',
    //创建一个build文件夹，然后通过path方法吧你的filename下的这个app.js创建在build文件夹下
    path: path.resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {
      	//找到是js结尾的文件夹
        test:/\.js$/,
        use:{
          loader:'babel-loader'
        }
      }
    ]
  }
}