const express = require('express');
const app = express ();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('sei dentro la homepage')

    res.send('server del blog')
})




app.listen(port, () =>{
    console.log('il server ti ascolta')
})