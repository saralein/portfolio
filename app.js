const express = require('express');
const app = express();

app.use(express.static('public'))
app.use(express.static('node_modules'))

app.get('/', (req, res) => {
  res.send(index.html)
})

app.listen(3000, function() {
  console.log('Listening on port 3000.')
})
