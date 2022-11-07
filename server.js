const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const route = require('./routes/menuType')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/menuType', route.getMenuType)
app.get('/menuType/:id', route.getMenuTypeById)
app.post('/menuType', route.createMenuType)
app.put('/menuType/:id', route.updateMenuType)
app.delete('/menuType/:id', route.deleteMenuType)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})