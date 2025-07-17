const express = require('express');
const app = express();

app.use("/test",(req, res) =>{
    res.send('Test Page')
})
app.use("/sample",(req, res) =>{
    res.send('Sample World!!!')
})
app.use((req, res) =>{
    res.send('Hello World!!!')
})
app.listen(4040, () =>{
    console.log('Application listen port 4040');
});