const mongoose = require('mongoose');

var url =`mongodb+srv://admin:admin12345@cluster0.slls4mw.mongodb.net/users?retryWrites=true&w=majority`

const connectDB = async () => {
    try{
        
        const con = await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;