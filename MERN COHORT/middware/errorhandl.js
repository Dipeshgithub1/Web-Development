const express = require('express');

const app = express();

// Route that intentionally throws an error
app.get('/', (req, res) => {
    throw new Error('Something went wrong!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Corrected from 'console.err' to 'console.error'
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
