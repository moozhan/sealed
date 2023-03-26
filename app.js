//imports
const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/seminal/collection', (req, res) => {
    res.render('collection')
})

app.get('/seminal/introduction', (req, res) => {
    res.render('introduction')
})


//list on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));