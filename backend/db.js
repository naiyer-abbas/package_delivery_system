const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DB', (err) => {
    if(!err)
    {
        console.log('MongoDB connection success...')
    }

    else
    {
        console.log('Error in establishing DB connection!');
    }
});

module.exports = mongoose;