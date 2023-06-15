import React from 'react'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import mastercart from '../assets/mastercard.png'

const Footer = () => {
  return (
    <div className='w-full mt-20 bg-red-100'>
      <div className='mx-auto w-full max-w-screen-lg px-4 py-8'>  
        
        <div className='w-full flex flex-col gap-8'>

          <div className='lg:flex items-start lg:justify-between space-y-6'>
            
            <div className='lg:max-w-[300px] lg:text-left text-center'>
              <h1 className='text-4xl font-bold mb-3'>Foodle</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                Et mollitia Lorem ipsum dolor sit.
              </p>
            </div>

            <div className='grid grid-cols-2 lg:text-left text-center gap-x-7 gap-y-4'>
              <div>
                <h1 className='uppercase font-semibold text-[17px]'>Delivery Time</h1>
                <span>Sunday - Thursday</span>
              </div>
              <div>
                <h1 className='uppercase font-semibold text-[17px]'>CONTACT</h1>
                <span>AGADIR, MOROCCO</span>
              </div>
              <div>
                <h1 className='uppercase font-semibold text-[17px]'>EMAIL US</h1>
                <span>hello@gmail.com</span>
              </div>
              <div>
                <h1 className='uppercase font-semibold text-[17px]'>CALL US</h1>
                <span>1-234-567-00</span>
              </div>
            </div>

            <div className='flex items-center justify-center gap-6'>
              <img className='w-[50px]' src={paypal} alt="paypal" />
              <img className='w-[50px]' src={visa} alt="paypal" />
              <img className='w-[50px]' src={mastercart} alt="paypal" />
            </div>

          </div>

          
          <span className='w-full text-center lg:text-md text-sm font-medium py-3'>Copyright 2023, website made by Ayoub Ait Ihia. All Right Reserved.</span>

        </div>
      
      
      </div>
    </div>
  )
}

export default Footer