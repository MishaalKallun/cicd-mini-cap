const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

let result = {};

app.use( express.json() );

app.use(cors())


app.post('/', (req, res)=>{
  result = req.body;
  res.send(result)
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/result', (req, res) => {
  res.send(result)
})

app.listen(port, () => {
  console.log(`app listening at port: ${port}`)
})