const express = require('express')
const path = require("path")
const app = express()

let port = 3000;

app.get('/',  (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
//   res.send('hii');
})

app.listen(port, ()=>{
    console.log(`Example app listening on port http://localhost:${port}`);
})