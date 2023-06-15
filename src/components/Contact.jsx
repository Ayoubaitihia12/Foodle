import React from 'react'
import contact from '../assets/contact.png'

const Contact = () => {
    return (
        <div className='w-full mt-20'>
            <div className='mx-auto w-full max-w-screen-lg px-4 py-20'>

                <div className='w-full flex flex-col gap-5 items-center text-center mb-16'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-5xl text-center'>Contact</h1>
                        <span className='h-1 bg-red-500 rounded-full mx-auto w-[100px] block'></span>
                    </div>
                    <p className='max-w-screen-sm'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt consetetur sadipscing.
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 items-center rounded-3xl overflow-hidden'>
                    <div className='bg-red-100 px-8 lg:py-36 py-6 '>
                        <img src={contact} alt="" />
                    </div>
                    <div className='bg-red-500 px-8 lg:py-16 py-8 text-white flex flex-col gap-10'>
                        <div>
                            <h1 className='text-3xl font-semibold mb-8'>Have Questions? Contact Us</h1>
                            <p>For any problems or questions, feel free to reach out to us by filling up the form below</p>
                        </div>
                        <div>
                            <form method="post" className='flex items-start flex-col gap-5'>
                                <div className='grid grid-cols-2 gap-4 w-full'>
                                    <input type="text" placeholder='First Name' className='bg-red-700 px-3 py-2 outline-none rounded-md placeholder:text-[16px] placeholder:text-gray-200' />
                                    <input type="text" placeholder='Last Name' className='bg-red-700 px-3 py-2 outline-none rounded-md placeholder:text-[16px] placeholder:text-gray-200'/>
                                </div>
                                <input type="email" placeholder='Email Addresse' className='bg-red-700 px-3 py-2 outline-none rounded-md placeholder:text-[16px] placeholder:text-gray-200 w-full'/>
                                <input type="text" placeholder='Subject' className='bg-red-700 px-3 py-2 outline-none rounded-md placeholder:text-[16px] placeholder:text-gray-200 w-full'/>
                                <textarea cols="30" rows="5" placeholder='Your Message' className='bg-red-700 px-3 py-2 outline-none rounded-md placeholder:text-[16px] placeholder:text-gray-200 w-full'></textarea>
                                <button className='bg-white text-red-500 px-6 py-2 text-xl rounded-md font-semibold'>Submit Form</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact