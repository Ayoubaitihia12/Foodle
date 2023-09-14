import React from 'react'
import hero from '../assets/hero.png'
import {BiChevronRight} from 'react-icons/bi'
import Categories from './Categories'
import Services from './Services'
import Customers from './Customers'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full mt-20'>
        <div className='mx-auto w-full max-w-screen-lg flex md:flex-row flex-col-reverse justify-between items-center px-4 py-12 gap-4'>
            
            <div className='flex flex-col gap-4 items-start max-w-screen-sm mx-auto'>
                <h1 className='md:text-4xl text-4xl font-bold leading-tight md:text-left text-center'>
                    Trust In <span className='text-red-600'>The Fastest</span> & Most Reliable <span className='text-red-600'>Delivery</span> Service
                </h1>
                <p className='md:text-left text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Explicabo nobis asperiores ducimus nam iste officiis accusantium 
                    eveniet id perferendis iure!
                </p>
                <Link 
                to="menu" 
                className='bg-red-600 px-5 py-3 text-white rounded-md flex items-center md:mx-0 mx-auto'>
                    <span className='font-semibold'>Order now</span>
                    <BiChevronRight size={25}/>
                </Link>
            </div>
                
            <img className='md:w-1/2 w-2/3' src={hero} alt="" />

        </div>
        <Categories/>
        <Services/>
        <Customers/>
    </div>
  )
}

export default Home