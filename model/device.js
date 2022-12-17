const  mongoose  = require("mongoose");
const userDevice  =  new  mongoose.Schema ({
    mac:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("userDevice",userDevice);