import React from 'react'
import {TextField,Button} from '@mui/material'
const Fotter = () => {
  return (
    <>
        <div className='container-fluid p-0'>
            <div>
                <div className='row bg-dark d-flex align-items-center text-white' style={{height:'50vh'}}>
                    <div className='col-6'>
                        <h1 className='display-4' style={{fontSize:'24px',padding:10}}><u>Mobile Store</u></h1>
                        <p className='lead' style={{fontSize:'18px',padding:10}}>A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today's mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems</p>
                    </div>
                    <div className='col-2'>
                        <h4 className='display-4' style={{fontSize:'24px'}}><u>Quick link</u></h4>
                        <p className='lead' style={{fontSize:'18px',cursor:'pointer'}}>Home</p>
                        <p className='lead' style={{fontSize:'18px',cursor:'pointer'}}>About</p>
                        <p className='lead' style={{fontSize:'18px',cursor:'pointer'}}>Mobile</p>
                        <p className='lead' style={{fontSize:'18px',cursor:'pointer'}}>SignIN</p>
                        <p className='lead' style={{fontSize:'18px',cursor:'pointer'}}>SingnUp</p>
                    </div>
                    <div className='col-4'>
                       <h4  className='display-4' style={{fontSize:'24px'}}><u>Join Our NewsLetter Now</u></h4>
                       <div className='pb-3'>
                        <TextField size='small' id="outlined-basic" label="Email" variant="outlined" />
                       </div>
                       <Button size='small' variant="contained">submit</Button>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Fotter