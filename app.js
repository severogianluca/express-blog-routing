const express = require('express');

const app = express();
const port = 3500;
const homeRouter = require('./routers/posts')


app.use("/posts", homeRouter)
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('sei dentro la homepage')

    res.send('server del blog')
})




app.listen(port, () =>{
    console.log('il server ti ascolta')
})