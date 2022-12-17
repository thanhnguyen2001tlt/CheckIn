const  mongoose  = require("mongoose");
const userCheck  =  new  mongoose.Schema ({
    typecheckin:{
        type:String,
        required:true
    },
    datetime:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("userCheck",userCheck);