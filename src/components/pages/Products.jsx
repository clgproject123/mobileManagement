import React,{useState} from 'react'
import {useParams} from 'react-router-dom'
import AdderssBox from '../pecfication/AdderssBox';
import { mobilesItems } from '../pecfication/mobilepecfication';
import Fotter from './Fotter';
const Products = () => {

  const {productName} = useParams();
  
  const filterProduct = mobilesItems.filter(item =>{
    return item.name === productName.trim()
  })

 const ProductImage = filterProduct.map(item => {
    return item.image
  })
  const ProductImages = ProductImage[0]
  

  const [imageStr,setImageStr] = useState(ProductImages[0])


  if(!filterProduct){
    return <>
      <h1>No data found</h1>
    </>
  }

  return (
    <>
      <div className='container-fluid' style={{marginTop:'100px'}}>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <div>
                      <img src={imageStr} alt="phone" className='img-fluid' />
                    </div>
                    <div className='mt-2'>
                     {
                      ProductImages.map(item =>(
                        <>
                          <button className='btn' onClick={()=>{setImageStr(item)}}>
                             <img src={item} alt=".."  width={50} height={50}/>
                         </button>
                        </>
                      ))
                     }
                    </div>
                </div>
                <div className='col-8 pb-3'>
                    <div>
                        {filterProduct.map(item => (
                          <>
                        <h3 className='display-4' style={{fontSize:'40px'}}>{item.name}</h3>
                        <h1>{item.rate}</h1>
                        <p className='lead'>{item.Highlights.map(item =>(
                          <li>{item}</li>
                        ))}</p>
                        <p className='lead' style={{fontSize:'14px'}} >{item.description}</p>
                        <AdderssBox product={productName}/>
                          </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Fotter/>
      </div>
    </>
  )
}

export default Products