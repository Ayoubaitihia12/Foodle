import React from 'react'
import {GiHamburger,GiTacos,GiHotDog} from 'react-icons/gi'
import {LuPizza} from 'react-icons/lu'
import {BiDrink,BiChevronRight} from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Categories = () => {

    const categories = [
        {
            id: 1,
            category: 'Burger',
            icon : <GiHamburger size={25}/>
        },
        {
            id: 2,
            category: 'Hot Dog',
            icon : <GiHotDog size={25}/>
        },
        {
            id: 3,
            category: 'Pizza',
            icon : <LuPizza size={25}/>
        },
        {
            id: 4,
            category: 'Drink',
            icon : <BiDrink size={25}/>
        },
        {
            id: 5,
            category: 'Taco',
            icon : <GiTacos size={25}/>
        }
    ]
    return (
        <div className='py-10 mx-auto w-full max-w-screen-lg px-4 items-center gap-2'>
            <Swiper
                spaceBetween={20}
                // slidesPerView={4.5}
                breakpoints={{
                    0: {
                      slidesPerView: 1.9,
                    },
                    520: {
                      slidesPerView: 2.3,
                    },
                    630: {
                      slidesPerView: 2.7,
                    },
                    780: {
                        slidesPerView: 3.2,
                    },
                    920: {
                        slidesPerView: 4.2,
                    },
                    1100: {
                        slidesPerView: 4.8,
                    },
                }}
            >
                {
                    categories.map(({id,category,icon})=>(
                        <SwiperSlide>
                            <div key={id} className='bg-red-100 flex items-center text-white p-5 gap-6 rounded-md cursor-pointer'>
                                <span className='bg-red-600 rounded-full p-3'>
                                    {icon}
                                </span>
                                <h3 className='text-black sm:text-lg font-semibold text-md'>{category}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Categories