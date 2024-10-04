/*for online server */

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://migarakavishan43:RzLm8jmBTPzUuu5E@cluster0.q9lki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("MongoDB Connected");
// }).catch((err) => {
//     console.error("MongoDB connection error: ", err);
// });

// module.exports = mongoose;
 

/*for local server */
const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017').on('open',()=>{
    console.log("MongoDb Connected");

}).on('error',()=>{
    console.log("MongoDb connection erro");
});

module.exports = connection;