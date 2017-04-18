var mongoose = require('mongoose');

//create mongoose model i.e., fields that can be part of document in collection.
var Todo = mongoose.model('Todos',{
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};
