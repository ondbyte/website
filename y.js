const express = require('express')
const app = express()
const port = 8000


app.get('/', (req, res) => {
    console.log('getting request')
    res.sendFile('website/y.html',{root:__dirname})
  })

app.use(express.static(__dirname + '/website'))

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })