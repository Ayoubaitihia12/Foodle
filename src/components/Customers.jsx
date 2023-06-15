import React from 'react'
import avatar1 from '../assets/customers/avatar1.jpg'
import avatar2 from '../assets/customers/avatar2.jpg'
import avatar3 from '../assets/customers/avatar3.jpg'
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

const Customers = () => {

    const custumers = [
        {
            id:1,
            img: avatar1,
            name: 'Mitchell Marsh'
        },
        {
            id:2,
            img: avatar2,
            name: 'Jhon Doe'
        },
        {
            id:3,
            img: avatar3,
            name: 'Steven Crock'
        },
        {
            id:4,
            img: avatar1,
            name: 'Mitchell Marsh'
        },
        {
            id:5,
            img: avatar2,
            name: 'Jhon Doe'
        },
        {
            id:6,
            img: avatar3,
            name: 'Steven Crock'
        }
    ]
    return (
        <div className='mx-auto w-full max-w-screen-lg px-4 py-8'>
            <h1 className='text-4xl font-bold text-center mb-12'>What Our <span className='text-red-600'>Customer</span> Says?</h1>
            <div className='flex items-center gap-8'>
                <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    580: {
                        slidesPerView: 1.6,
                    },
                    900: {
                        slidesPerView: 2.2,
                    },
                    1100:{
                        slidesPerView: 3,
                    }
                }}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        custumers.map(({id,img,name})=>(
                            <SwiperSlide>
                            <div key={id} className='bg-red-100 rounded-md min-w-[300px] flex flex-col gap-6 p-8'>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Ex sint dolor, exercitationem asperiores mollitia corporis eum.
                                    Odio necessitatibus ipsa voluptatibus eos ad atque qui fugiat voluptate.
                                </p>
                                <div className='flex flex-col '>
                                    <img className='w-[50px] h-[50px] object-cover rounded-full' src={img} alt="" />
                                    <h3 className='font-semibold text-xl'>{name}</h3>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                

            </div>
        </div>
       
    )
}

export default Customers