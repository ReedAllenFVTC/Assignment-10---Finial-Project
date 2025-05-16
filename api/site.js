const router = require('express').Router()
const { response } = require('express')
const { getCollection, ObjectId } = require('../dbconnect')
const { error } = require('console')

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const collection = await getCollection('foodtruck', 'menuItems')

        const item = await collection.findOne({ menuId: parseInt(id) });

        if (!item) return response.status(404).send('Menu Item Not Found');
        response.json(item)
    }
    catch (error) {
        response.status(500).send('Server Error')

    }

    //console.log(collection)
    //response.send('done')
})