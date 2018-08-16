const mongoose = require('mongoose');  //数据驱动
const config = require('config-lite');

mongoose.connect(config.mongodb, {
  useMongoClient: true
});
mongoose.Promise = global.promise;

var db = mongoose.connection;
db.once('open', () => {
  console.log('Mongodb started successfully');
})