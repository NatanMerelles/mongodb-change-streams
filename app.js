const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/ocal?replSet=rs01';
const dbName = 'test';
const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(async function (err) {
  console.log('Connected successfully to server');
});

const db = client.db(dbName);

db.collection('data').watch().on('change', (change) => console.log({ change }));