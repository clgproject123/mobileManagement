import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import AddCustumer from './Models/SignUp.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mobileData from './Models/Mobile.js'

const PORT = process.env.PORT || 3434

const CONNECTION_URL = `mongodb://collegedata:12345@ac-bg5byzv-shard-00-00.dfyenix.mongodb.net:27017,ac-bg5byzv-shard-00-01.dfyenix.mongodb.net:27017,ac-bg5byzv-shard-00-02.dfyenix.mongodb.net:27017/?ssl=true&replicaSet=atlas-ada2u1-shard-0&authSource=admin&retryWrites=true&w=majority`

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/',(req,res)=>{
    res.send('this sathish project')
  })

app.post('/signup',async (req,res)=>{
    const {name, email, password} = req.body;
    

    const oldUser = await AddCustumer.findOne({email});

    if(oldUser)
    {
        return res.json({success:false,msg:'this email alerdy having 😣'})  
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const student = new AddCustumer({ name, email, password:hashedPassword})

    const token = jwt.sign({
        email:student.email,
        id:student._id,
        username:student.name,
        },'afgdfgeiksfnierkwefiwojeo',{expiresIn:"1h"})

    try {
        await student.save()
        return res.json({success:true,msg:'register successfully',token})  
    } catch (error) {
        return res.status.json({success:false,msg:'something is error please cheack'})
    }  
})

app.post('/login',async (req,res)=>{
    const {email,password} = req.body;
   
    try {
        
        const oldUser = await AddCustumer.findOne({email})

        if (!oldUser) return res.json({ success:false , msg: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password , oldUser.password)

        if(!isPasswordCorrect) return res.json({success:false,msg:"Invalid password"})

        const token = jwt.sign({username:oldUser.name, email:oldUser.email, id:oldUser._id,},`dfgesvesvrsgacrkhsdvjnaijdnvjajnsdfj`,{expiresIn:"1h"})

        if(token) return res.json({success:true,msg:'welcome',token})
 
    } catch (error) {
        return res.status(404).json({success:false,msg:'Somethig went wrong'})
    }
})   

app.post('/product',async (req,res)=>{
    const {customerName, modelName, rate, image, phoneNumber, adderss } = req.body;
    // console.log(customerName, modelName, rate, image, phoneNumber, adderss );
    const Mobiles = new mobileData({customerName, modelName, rate, image, phoneNumber, adderss})
    try {
        console.log('successfully');  
        await Mobiles.save()
        return res.json({success:true,msg:'Your order added'})
    } catch (error) {
        return res.status(404).json({success:false,msg:'something is error please cheack'})
    }   
})
 
app.get('/order',(req,res)=>{
    mobileData.find({},(error,result)=>{
        if(error)
        {
            return res.send(404).json({success:false,msg:'Somrthing went wrong'}) 
        }
        else
        {
            return res.status(200).json({success:true,result})  
        }
    })
})

app.delete('/cancleOrder/:id',async (req,res)=>{
    const id = req.params.id;
    await mobileData.findByIdAndRemove(id).exec();
    return res.status(200).json({success:true,msg:'your order is canceled'})
})


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
//mongoDB
