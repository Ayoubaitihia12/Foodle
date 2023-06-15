import React from 'react'
import hero from '../assets/hero.png'

const Login = () => {
  return (
    <div className='w-full mt-20'>
      <div className='mx-auto w-full max-w-screen-lg grid md:grid-cols-2 grid-cols-1 px-4 py-12 gap-4'>
        <div className='md:block hidden'>
          <img className='w-[80%]' src={hero} alt="" />
        </div>
        <div className='flex items-center px-8'>
          <div className='md:w-full w-[400px] max-w-full mx-auto'>
            <h1 className='text-center text-3xl font-bold mb-7'>Sign In</h1>
            <form>
              <div className='w-full flex flex-col items-start gap-1 mb-3'>
                <label htmlFor="" className='font-bold text-md'>E-mail</label>
                <input className='outline-none bg-gray-100 px-4 py-3 w-full rounded-md' type="text" placeholder='@mail.com' />
              </div>
              <div className='w-full flex flex-col items-start gap-1'>
                <label htmlFor="" className='font-bold text-md'>Password</label>
                <input className='outline-none bg-gray-100 px-4 py-3 w-full rounded-md' type="text" placeholder='Password' />
              </div>
              <button className='bg-red-600 text-white rounded-md font-semibold py-3 w-full mt-6'>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login