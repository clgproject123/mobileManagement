import mongoose from 'mongoose';

const MobileProduct = new mongoose.Schema({
    customerName:
    {
        type:String,
        required:true
    },
    modelName:
    {
        type:String,
        required:true,
    },
    rate:
    {
        type:String,
        required:true
    },
    image:
    {
        type:String,
        required:true
    },
    phoneNumber:
    {
        type:String,
        required:true
    },
    adderss:
    {
        type:String,
        required:true
    }
})

const mobileData =  mongoose.model('MobileProduct', MobileProduct);

export default mobileData;
