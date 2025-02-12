import moogoose from "mongoose"

const orderSchema= new moogoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,defaultL:"Food Processing"},
    date:{type:String, default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel = moogoose.model.order || moogoose.model("order",orderSchema) 

export default orderModel;