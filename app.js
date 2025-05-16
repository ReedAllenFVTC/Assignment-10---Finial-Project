const express = require('express')
const { request } = require('http')
const app = express()



const port = 3000

app.use(express.json())

const path = require('path')
const root = path.join(__dirname, 'public')

app.use(express.static('public'))

app.get('/', (request,response) =>{
    response.sendFile('index.html', {root})
})

app.get('/api/v1/random', (request, response) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    response.send({randomNumber})
})

app.get('/api/v1/random-pokemon', (request, response) => {
    const r = Math.floor(Math.random() * 9)
    response.send(pokemon[r])
})

app.get('/', (request, response) => {
    response.send("Hello")
    console.log('incoming request')
})

app.get('/test', (request, response) => {
    response.send('hello from test route')
})

app.listen(port, () => console.log(`listening on port: ${port}`))

//const db = connect('mongodb://localhost/foodtruck')
