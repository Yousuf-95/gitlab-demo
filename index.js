require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    return res.send('<h3>Hello from the server.</h3>')
});

app.listen(PORT, () => console.log('Server listening on port ' + PORT));