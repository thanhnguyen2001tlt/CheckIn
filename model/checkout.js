const  mongoose  = require("mongoose");
const userCheckout  =  new  mongoose.Schema ({
    typecheckout:{
        type:String,
        required:true
    },
    datetime:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("userCheckout",userCheckout);