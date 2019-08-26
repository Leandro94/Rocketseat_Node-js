/*
  tipos de parametros:
   Query params = ?teste=1 //query params localhost:3000/teste?nome=leandro server.get("/users"
   Route params = /users/1 // const id = req.params.id;
   Request body = {"name": "Leandro", "email": "...."}
*/
const express = require("express"); //importando
//console.log(express);

const server = express();
//para o express entender que deve ler json
server.use(express.json());

const users = ["Leandro", "Luis", "Pet"];
//middleware global:
//é tudo que tem req, res etc
server.use((req, res, next) => {
  console.time("Request");
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();
  console.timeEnd("Request");
});
//middleware local:
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "User name is required" });
  }
  return next();
}
function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }
  req.user = user;
  return next();
}

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  //simbolo informa que é uma função
  //console.log("teste");
  //return res.send("Ola mundo");

  //const id = req.params.id; //variavel constante
  //usando desestruturação:
  const { index } = req.params;

  //return res.json({ message: `Buscando o usuario ${id}` });
  return res.json(req.user);
});
server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  
  return res.json(users);
});

server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const name = req.body.name;
  users[index] = name;
  return res.json(users);
});
server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1); //percorre o vetor
  //return req.json(users);
  return res.send();
});
server.listen(3000);

/*
function teste(req,res)
{
  console.log("teste");
}
server.get('/teste',function ( ) {
  console.log('teste');
});*/
