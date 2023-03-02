import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import { mobilesItems } from './mobilepecfication';
import axios from 'axios';
export default function AdderssBox({product}) {
  
  const [open, setOpen] = React.useState(false);

  const user = JSON.parse(localStorage.getItem('profile'))

  const [data,setData] = React.useState({
    customerName:'',
    modelName:'',
    rate:'',
    image:'',
    phoneNumber:'',
    adderss:'',
    check:false,
  })


  const handleClickOpen = () => {
    if(user)
    {
      setOpen(true);
      const filterProduct = mobilesItems.filter(item =>{
        return item.name === product.trim()
      })
      filterProduct.map(item =>{
        setData({
            modelName:item.name,
            rate:item.rate,
            image:item.image[0]
        })
      })
    }
    else{
      alert('please login your account')
    }
  };

  const handleChange =(e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleClick =()=>{
    axios.post('http://localhost:3434/product',data)
    .then((res)=>{
      alert(res.data.msg)
      setOpen(false)
    })
    .catch((err)=>{
      alert(err)
    })
    console.log("kumar:",data);
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Buy now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Details"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className='pt-3'>
              <div>
                <TextField name='customerName' size='small' id="outlined-basic" label="name" variant="outlined" onChange={handleChange} />
              </div>
              <div className='py-2'>
                <TextField name='adderss' size='small' id="outlined-basic" label="Adders" variant="outlined" onChange={handleChange} />
              </div>
              <div>
                <TextField name='phoneNumber' size='small' id="outlined-basic" label="phone Number" variant="outlined" onChange={handleChange} />
              </div>
              <div className='py-2'>
                <Checkbox name='check' size='small' onChange={handleChange}/> cash on delivery
              </div>
              <div>

              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button size='small' onClick={handleClose}>Disagree</Button>
          <Button size='small' onClick={handleClick} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}