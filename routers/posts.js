const express = require('express')
const router = express.Router()

const posts = require("../postsList")

//LISTA
router.get('/', (req, res) => {
    console.log('sei dentro la bacheca')
    res.json(posts)
})






module.exports = router