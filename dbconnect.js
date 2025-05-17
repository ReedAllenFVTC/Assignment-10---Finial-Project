const { MongoClient, ObjectId } = require('mongodb');
const { uri } = require('./secrets/mongodb.json');
const client = new MongoClient(uri);

const getCollection = async (dbName, collectionName) => {
    await client.connect(); // This should only run once ideally, but fine for now
    return client.db(dbName).collection(collectionName);
};

module.exports = { getCollection, ObjectId };