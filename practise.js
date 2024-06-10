const express = require('express')
const app = express()
const port = 4000
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/homepage', (req, res) => {
    res.send('home page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})