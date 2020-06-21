const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dataBase = "tunrec";

MongoClient.connect(
  mongoUrl,
  { useNewUrlParser: true },
  (err, client) => {
    assert.equal(err, null, "data base erreur");
    const db = client.db(dataBase);

    app.get('/user',(req,res)=>{
        db.collection('user').find().toArray(
            (err,data)=>{
                if (err) res.send("error: can not fetch users")
                else {res.send(data)}
        });
    })
    app.get('/user/:id', (req,res) => {
      let id = ObjectID(req.params.id)
      db.collection('user').findOne({_id: id},(err,data)=>{
       if(err)   res.send("error: can not fetch user")
       else {res.send(data) }})
      });
    app.post("/user/addannonce", (req, res) => {
      let newAnno = req.body
      db.collection("user").insertOne(newAnno, (err, data) => {
        if (err) res.send("cant add annonce");
        else res.send(data);
      });
    })
}
);

app.listen(3007, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3007");
});
