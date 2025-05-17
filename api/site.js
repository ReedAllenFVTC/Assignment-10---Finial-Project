// api/site.js

const router = require('express').Router();
const { response } = require('express');
const { getCollection } = require('../dbconnect');

//Get menuitems
router.get('/', async (request, response) => {
    try{
        const collection = await getCollection('foodtruck', 'menuItems')
        const items = await collection.find({}).toArray();
        response.json(items)
    }catch (error){
        console.error(error)
        response.status(500).send('SERVER ERROR')
    }
})

// GET /menuItems/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const collection = await getCollection('foodtruck', 'menuItems');

        const item = await collection.findOne({ menuId: parseInt(id) });

        if (!item) return res.status(404).send('Menu item not found');
        res.json(item);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
