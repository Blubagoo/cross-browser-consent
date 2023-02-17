const express = require('express')
const {google} = require('googleapis');
var cors = require('cors')
const app = express()
const port = 8080

app.use(cors())
app.use(express.json())


app.post('/', (req, res) => {
  console.log('req', req.body)
  return res.json({}).status(200)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})