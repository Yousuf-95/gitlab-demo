const express = require('express');

const app = express();

app.get('/', (req,res) => {

    return res.send('<h3>Hello from the server.</h3>')
})

app.listen(3000, () => console.log('Server listening on port 3000'));