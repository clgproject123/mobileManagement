import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';                
import axios from 'axios'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Oder() {
  const navigate = useNavigate()
  const [data,setData] = React.useState([{}])
    
  React.useEffect(()=>{
    axios.get('http://localhost:3434/order')
    .then((request) => {
      setData(request.data.result)
    })
    .catch((error)=>{
      alert(error);
    })
  },[])

  const cancelOrder =(id)=>{
    axios.delete(`http://localhost:3434/cancleOrder/${id}`)
    .then((request) => {
      alert(request.data.msg)
      navigate('/')
    })
    .catch((error)=> {
      alert(error)
    })
  }

  return (
    <>

      {data.length == 0 ? 
        <>
          <div className='container-fluid text-center' style={{marginTop:'67px', height:'80vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src="https://cdn.dribbble.com/users/357929/screenshots/2276751/media/678caef6068a976e4a0d94bbdba6b660.png?compress=1&resize=400x300&vertical=top"  alt="no order" />
          </div>
        </>
        :
        <>
          {data && 
          <>
            <div className='container-fluid' style={{marginTop:'67px'}}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Custumer Name</TableCell>
            <TableCell>Model Name</TableCell>
            <TableCell align="right">Rate</TableCell>  
            <TableCell align="right">
              image
            </TableCell>
            <TableCell align="right">Phone number</TableCell>
            <TableCell align="right">Adderss</TableCell>
            <TableCell align="right">Cancle order</TableCell>
          </TableRow>
        </TableHead>
        {data.map((item)=>(
        <TableBody>
              <>
              <TableCell component="th" scope="row">
                {item.customerName}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.modelName}
              </TableCell>
              <TableCell align="right">{item.rate}</TableCell>
              <TableCell align="right">
              <img src={item.image} alt="..." className='img-fluid' height={70} width={40} />
              </TableCell>
              <TableCell align="right">{item.phoneNumber}</TableCell>
              <TableCell align="right">{item.adderss}</TableCell>
              <TableCell align="right"><Button  variant="contained" onClick={()=>{cancelOrder(item._id)}} >clancel order</Button></TableCell>
              </>
        </TableBody>
            ))}    
      </Table>
    </TableContainer>
        </div>
          </>
        }

        </>
      }
    </>
  );
}

