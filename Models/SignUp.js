import mongoose from 'mongoose';

const CustomerSignUp = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
    },
    password:
    {
        type:String,
        required:true
    },
})

const AddCustumer =  mongoose.model('StudentSignUp', CustomerSignUp);

export default AddCustumer;

