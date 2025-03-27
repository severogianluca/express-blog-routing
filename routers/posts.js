const express = require('express')
const router = express.Router()

const posts = require("../postsList")

//LISTA INDEX
router.get('/', (req, res) => {
    console.log('sei dentro la bacheca')
    res.json(posts)
})

router.get('/:slug', (req, res) => {
    console.log('stai prendendo l/oggetto ' + req.params.slug)

    res.send('stai prendendo l/oggetto ' + req.params.slug)
})

router.post('/', (req, res) => {
    console.log('hai creato l/oggetto ' + req.params)
    res.send('hai creato l/oggetto ' + req.params)
})

router.put('/:slug', (req, res) => {
    console.log('stai modificando l/oggetto ' + req.params.slug)
    res.send('stai modificando l/oggetto ' + req.params.slug)
})

router.delete('/:slug', (req, res) => {
    console.log('stai eliminando l/oggetto ' + req.params.slug)
    res.send('stai eliminando l/oggetto ' + req.params.slug)
})



module.exports = router