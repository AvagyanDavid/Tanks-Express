var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("guide:tanks");
database.dropDatabase()
database = client.db("guide:tanks");
const tanks = database.collection("tanks");
const result = await cats.insertOne({name:"ТТ"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
