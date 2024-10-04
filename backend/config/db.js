const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://migarakavishan43:RzLm8jmBTPzUuu5E@cluster0.q9lki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error("MongoDB connection error: ", err);
});

module.exports = mongoose;
 