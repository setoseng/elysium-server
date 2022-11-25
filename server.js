const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const route = require('./routes/menuType')
const port = 80

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/getMenuType', route.getMenuType)
app.get('/getMenuTypeById/:id', route.getMenuTypeById)
app.post('/createMenuType', route.createMenuType)
app.put('/updateMenuTypeById/:id', route.updateMenuType)
app.delete('/deleteMenuTypeById/:id', route.deleteMenuType)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})