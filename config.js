const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shahzain:12shah34zain@mydatabase.lboguaf.mongodb.net/')

mongoose.connection.off('error',err=>{
    console.log("connection fail")
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
})