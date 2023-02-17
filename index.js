const express = require('express')
const {google} = require('googleapis');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  console.log('req', req.body)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`)
})