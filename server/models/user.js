var mongoose=require('mongoose');
//New user model for authentication 
//email property - require it, trim it, set type to string, set min length of 1
var User = mongoose.model('Users',{
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1
    }
}
)
module.exports = {User};

