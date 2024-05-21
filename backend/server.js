// Third party packages
const express = require('express');

// This will now start up the express app
const app = express();

// Routes
app.get('/', (req, res) => {
   res.json(msg: 'welcome to the app');
})

// listen for requests
app.listen(4000, () => {
   console.log('listening on port 4000')
});


