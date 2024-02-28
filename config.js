const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userName:yourPassword@mydatabase.lboguaf.mongodb.net/')

mongoose.connection.off('error',err=>{
    console.log("connection fail")
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
})
