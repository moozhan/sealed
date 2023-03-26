//imports
const express = require('express')
const path = require("path")
const app = express()

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


const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port 3000'))