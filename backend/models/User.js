const mongoose= require('mongoose');
const {Schema}=mongoose;

const UserSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    },

});
const User = mongoose.model('user', UserSchema);
  module.exports = User;