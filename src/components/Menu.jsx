import React , {useState , useEffect} from 'react'
import {LuPizza} from 'react-icons/lu'
import {GiHamburger,GiTacos} from 'react-icons/gi'
import {GiHotDog} from 'react-icons/gi'
import {BiDrink,BiChevronRight} from 'react-icons/bi'
import FoodCart from './FoodCart'
import {Items} from '../data/Data'

const Menu = () => {


    const categories = [
        {
            id:1,
            icon : <LuPizza size={25}/>,
            name : 'Pizza'
        },
        {
            id:2,
            icon : <GiHamburger size={25}/>,
            name : 'Burger'
        },
        {
            id:3,
            icon : <GiHotDog size={25}/>,
            name : 'Hot Dog'
        },
        {
            id:4,
            icon : <BiDrink size={25}/>,
            name : 'Drink'
        },
        {
            id:5,
            icon : <GiTacos size={25}/>,
            name : 'Taco'
        }
    ]

    const [category,setCategory] = useState("Pizza");
    const [foods,setFood] = useState([]);

    useEffect(()=>{
        setFood(Items.filter(item=>item.category === category));
    },[category])

    console.log(foods);

    // const totalPrice = 

    return (
        <div className='w-full mt-20'>
            <div className='mx-auto w-full max-w-screen-lg px-4 py-12'>
                
                <div className='mb-6'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-5xl text-center'>Our Menu</h1>
                        <span className='h-1 bg-red-500 rounded-full mx-auto w-[100px] block'></span>
                    </div>
                    <p className='text-center text-lg mt-6 font-medium'>
                        These Are Our Regular Menus. You Can Order Anything You Like.
                    </p>
                </div>
                
                <div className='py-8'>
                    <h3 className='font-semibold text-2xl mb-6'>Menu Categoty</h3>
                    
                    <div className='flex items-center justify-between space-x-6 overflow-x-scroll scrollbar-hide'>

                        {
                            categories.map(({id,icon,name})=>(
                                <button 
                                    onClick={()=>setCategory(name)}
                                    key={id} 
                                    className={category === name ? "bg-red-600 shadow-xl w-[110px] rounded-lg p-5 flex items-center justify-center flex-col gap-3 duration-300" : "bg-red-100 w-[110px] rounded-lg p-5 flex items-center justify-center flex-col gap-3 duration-300"}>
                                    
                                    <span className='bg-white p-3 rounded-full'>
                                        {icon}
                                    </span>
                                    <span className={categories === name ? 'text-md font-medium text-white' : 'text-md font-medium text-black'}>{name}</span>
                                    <span className='bg-white p-1 rounded-full'>
                                        <BiChevronRight size={25}/>
                                    </span>

                                </button>
                            ))
                        }

                    </div>

                </div>

                <div className='mt-12 grid md:grid-cols-3 sm:grid-cols-2 md:gap-8 gap-6 items-center justify-center'>
                    {
                        foods.map((food)=>(
                            <FoodCart key={food.id} food={food}/>
                        ))
                    }
                    
                </div>

            </div>
        </div>
    )
}

export default Menu