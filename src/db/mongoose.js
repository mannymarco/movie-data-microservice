const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

console.log(process.env.MONGODB_URL);

// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useCreateIndex: true
    
// });
