import React from 'react'
import delivery from '../assets/delivery.png'
import dine from '../assets/dine.png'
import pick from '../assets/pick.png'

const Services = () => {

    const services = [
        {
            id: 1,
            title : "Quick Delivery",
            img : delivery
        },
        {
            id: 2,
            title : "Super Dine In",
            img : dine
        },
        {
            id: 3,
            title : "Easy Pick Up",
            img : pick
        }
    ]

    return (
        <div className='py-24 mx-auto w-full max-w-screen-lg px-4 grid md:grid-cols-3 grid-cols-1 items-center justify-between gap-16'>
            {
                services.map(({id,title,img})=>(
                    <div key={id} className='mx-auto flex flex-col gap-4 items-center max-w-[400px]'>
                        <img className='w-1/4' src={img} alt="" />
                        <h2 className='font-bold text-xl'>{title}</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit Officia quaerat quibusdam.</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Services