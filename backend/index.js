const connectToMongo=require('./db')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000
app.use(express.json())

app.use('/data',require('./routes/data'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})