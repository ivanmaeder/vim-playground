const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  res.redirect(`/playground/${uuidv4()}`)
})

app.get('/playground/:id', async (req, res) => {
  res.sendFile(`${__dirname}/public/playground.html`);
})

app.listen(3000)