const mysql = require('mysql2')



const sequelize = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'dummy_db'
})

sequelize.connect(function (err) {
  if (err) {
    console.error('error connecting: ');
    return;
  }
  console.log(' connected ');
});


module.exports = sequelize