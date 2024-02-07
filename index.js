const express = require("express");
const { DataTypes } = require("sequelize");
const app = express();
port = 3000;
require("./connection");
const users = require("./Modal");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("dummy_db", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
});


app.use(express.json());

const db = {};
db.users = require("./Modal")(sequelize, DataTypes);

// sequelize.sync ({
//   force: true
// }).then(() => {
//   console.log('table created')
// }).catch((err) => {
//   console.log(err)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


const Readuser = async (req,res) => {
  const user1 = await db.users.findOne({where: {id: req.query.id}});
  res.send(user1)
};




//post User or Create user
const PostUser = async (req,res) => {
  const { id,first_name, last_name, email, mobile_number,password,verified} = req.body;
  // console.log("req.body",req.body);
  
  const user1 = await db.users.create({ id,first_name, last_name, email, mobile_number,password,verified });
 if(user1)
 { res.send("added")
} 
else{
  res.send("not added")
}
}

const deleteUser = async (req,res) => {
  const user1 = await db.users.destroy({ where: { id: req.querry.id } });
  user1 ? res.send("deleted") : res.send("not deleted");
}

const updateUser = async (req,res) => {
  const { id,first_name, last_name, email, mobile_number,password,verified} = req.body;

  const user1 = await db.users.update(
    {id,first_name, last_name, email, mobile_number,password,verified}, 
{where: { id:id }}  )

  user1 ? res.send("updated") : res.send("not updated");
}

//Create User data
app.post("/PostUser",PostUser)
// Read data
app.get("/Read", Readuser);
// delete User
app.delete("/delete", deleteUser);

//Update User

app.post("/update", updateUser);
