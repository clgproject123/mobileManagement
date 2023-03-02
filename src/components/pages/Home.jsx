import React from 'react'
import Navbar from '../Navbar/Navbar'
import HomeImageMoving from '../pecfication/HomeImageMoving'
import MobileList from '../pecfication/MobileList'
import Fotter from './Fotter'
const Home = () => {
    
  return (
    <>
        <div className='container-fluid px-0 mx-0' style={{marginTop:'67px'}}>
            <div>
                <div className='row'>
                    {/* List */}
                    <div className='col-2 px-0'>
                       <MobileList/>
                    </div>
                    {/* List */}
                    <div className='col-10 px-0'>
                        <div>
                            <HomeImageMoving/>
                        </div>
                    </div>  
                </div>
            </div>
            <Fotter/>
        </div>
    </>
  )
}

export default Home