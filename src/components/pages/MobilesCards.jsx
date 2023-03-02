import * as React from 'react';
import {Rating} from '@mui/material'
import {useNavigate} from 'react-router-dom'
export default function MobilesCards({name,rate,images}) {
    const navigate = useNavigate()
    var arr = Array(1,2,3,4,5)
    var item = arr[Math.floor(Math.random()*arr.length)];

  return (
   <>
        <div className='col-4 mt-3'>
            <div class="card" style={{minHeight:'100px'}}>
                <div className='d-flex justify-content-center p-2'>
                    <img src={images} alt="Card image cap"  height={100} width={100}  class="img-fluid"/>
                </div>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{rate}</p>
                <Rating name="half-rating-read" defaultValue={item} precision={0.5} readOnly />
                <div>
                    <button className='btn btn-primary' onClick={()=>{navigate(`/product/${name}`)}}>Buy now</button>
                </div>
            </div>
            </div>
        </div>  
   </>
  );
}