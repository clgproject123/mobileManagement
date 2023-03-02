import React from 'react'
import Fotter from './Fotter'

const About = () => {
  return (
    <>
        <div className='container-fluid ' style={{marginTop:'67px'}}>
            <div className='container'>
                <h1 className='display-4 pt-4'>About us</h1>
                <div className='mt-5 pb-3'>
                    <div className='row d-flex align-items-center ' style={{minHeight:'1vh'}}>
                        <div className='col-4'>
                            <div className="text-center">
                                <img src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mobile" width={400} height={300}/>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className="text-center px-5">
                               <p className='lead'>
                                A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today's mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems
                               </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fotter/>
        </div>
    </>
  )
}

export default About

{/* <div className='col-4'>
                            <div className='text-center'>
                                <img src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=600" alt="mobile" width={400} height={300}/>
                            </div>
                        </div>
                        <div className='col-8 d-flex justify-content-center'>
                            <div>
                              
                            </div>
                        </div> */}