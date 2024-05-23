// Third party packages
require('dotenv').config();
const express = require('express');

// This will now start up the express app
const app = express();

// Routes
app.get('/', (req, res) => {
   res.json( {msg: 'welcome to the app siuuu'} );
})

// listen for requests
app.listen(process.env.PORT, () => {
   console.log(`listening on port ${process.env.PORT}`)
});


