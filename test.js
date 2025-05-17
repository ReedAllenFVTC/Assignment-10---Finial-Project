const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://proballnoobz:4gR7HLjj2r3A0Dyo@cluster0.ctpiyny.mongodb.net/foodtruck?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function testConnection() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB!");
        const db = client.db("foodtruck");
        const collection = db.collection("menuItems");
        const items = await collection.find().toArray();
        console.log("🍽️ Menu items:", items);
    } catch (err) {
        console.error("❌ Connection error:", err);
    } finally {
        await client.close();
    }
}

testConnection();
