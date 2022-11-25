const pool = require('../db/postgres.js')

console.log('Connected to DB');

const getMenuType = (request, response) => {
  pool.query('SELECT * FROM menu_type ORDER BY id ASC', (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(200).json(results.rows)
  })
}

const getMenuTypeById = (request, response) => {
  const id = parseInt(request.params.id)
  console.log(id);
  pool.query('SELECT * FROM menu_type WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(200).json(results.rows)
  })
}

const createMenuType = (request, response) => {
  const { name, description } = request.body

  pool.query('INSERT INTO menu_type (name, description) VALUES ($1, $2) RETURNING *', [name, description], (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(201).send(
      `Menu type added with ID: ${results.rows[0].id} and description ${results.rows[0].description}`
    )
  })
}

const updateMenuType = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, description } = request.body

  pool.query(
    'UPDATE menu_type SET name = $1, description = $2 WHERE id = $3',
    [name, description, id],
    (error, results) => {
      if (error) {
        console.log(error)
      }
      response.status(200).send(`Menu type modified with ID: ${id} and description ${results.rows[0].description}`)
    }
  )
}

const deleteMenuType = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM menu_type WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error)
    }
    response.status(200).send(`Menu type deleted with ID: ${id}`)
  })
}

module.exports = {
  getMenuType,
  getMenuTypeById,
  createMenuType,
  updateMenuType,
  deleteMenuType,
}