const express = require('express')
const app = express()

console.log('hello world')
const port = 3000
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`);
})