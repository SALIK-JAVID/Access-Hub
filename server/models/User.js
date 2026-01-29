// this file will specify how a user will be stored in the database.
const mongoose = require('mongoose');
// we will define a function that will specify how to store a user in the data base.
const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim:true,
        maxlength: [50]
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, //this is used to validate the email (regex) regular expression.
            'Please provide a valid email'
          ]

    },
    password:{
        type:String,
        required:true,
        minlength: [6, 'Password should have min 6 characters']

    },
    status:{
        type:String,
        requierd:true,
        enum: ["active", "blocked","deleted"],
        default:"active", 
    },
    
}
);

const User = mongoose.model('User', userSchema);
module.exports = User;