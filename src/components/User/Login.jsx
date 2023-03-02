import React,{useState} from 'react'
import axios from 'axios'
import {TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'
const Login = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:'',
    password:''
  })

  const handleChange =(e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleClick =()=>{
    axios.post('http://localhost:3434/login', data) 
    .then((res)=>{
      alert(res.data.msg);
      const token = jwt_decode(res.data.token);
      //webtoken
        localStorage.setItem('profile',JSON.stringify({token}))
        console.log(token);
       //webtoken
       if(res.data.success){
        navigate('/')
        window.location.reload();
       }
    }) 
    .catch((err) => {
      alert(err);
    })  
  }

  return (
    <>
        <div className='container-fluid' style={{marginTop:'67px'}}>
          <div className='container d-flex justify-content-center pt-5'>
           <div>
           <h1 className='display-4'>Login</h1>
              <div className='pt-4'>
                <TextField name='email' size='small' id="outlined-basic" label="Email" type={'email'} variant="outlined" onChange={handleChange} />
              </div>
              <div className='pt-4'>
                 <TextField name='password' size='small'   id="outlined-basic" label="Password" type={'password'} variant="outlined" onChange={handleChange} />
              </div>
              <div className='pt-4'>
                <p className='lead' style={{fontSize:'14px'}}><span className='text-primary' onClick={()=>{navigate('/signup')}} style={{cursor:'pointer'}} >Create account</span></p>
                <button className='btn btn-primary' onClick={handleClick}>Submit</button>
              </div>
           </div>
          </div>
        </div>
    </>
  )
}

export default Login