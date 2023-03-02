import React from 'react'
import { mobilesItems } from '../pecfication/mobilepecfication';
import MobilesCards from './MobilesCards';

const Mobiles = () => {
    console.log(mobilesItems);
  return (
    <>
        <div className='container-fluid' style={{marginTop:'67px'}}>
            <div className='container'>
                <h1 className='display-4' style={{fontSize:'40px'}}>Smart Mobiles</h1>

                    <div className='row'>
                        {mobilesItems.map(item =>(
                            <>
                                <MobilesCards name={item.name} rate={item.rate} images={item.image[0]} />
                            </>
                        ))}
                    </div>

            </div>
        </div>
    </>
  )
}

export default Mobiles