import React , {useState} from 'react'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import CartItems from './CartItems'
import {useShoppingCart} from '../Context/ShoppingCart'

const Navbar = () => {

    const {cartQuantity} = useShoppingCart();

    const [nav,setNav] = useState(false);
    const [change,setChange] = useState(false);

    const [sales,setSales] = useState(false);

    const links = [
        {
            id : 1,
            link : "Home",
            to : '/'
        },
        {
            id : 2,
            link : "Menu",
            to : 'menu'
        },
        {
            id : 3,
            link : "Cart",
            to : 'cart'
        },
        {
            id : 4,
            link : "Contact",
            to : 'contact'
        },
    ]

    const changeBackground = ()=>{
        if(window.scrollY >= 85){
            setChange(true);
        }else{
            setChange(false);
        }
        
    }

    window.addEventListener("scroll",changeBackground);

    return (
        <div className='fixed top-0 left-0 w-full z-10'>
            <div className={change ? 'relative shadow-lg h-24 duration-200 bg-white' : 'relative duration-200 h-20 bg-white'}>
                <div className='mx-auto max-w-screen-lg h-full w-full flex justify-between items-center px-6'>
                    
                    <h1 className='text-2xl font-bold'>Foodle</h1>

                    <ul className='hidden md:flex justify-between gap-10'>
                        {links.map(({id,link,to})=>(
                            <li className='font-medium'>
                                <NavLink 
                                className={({ isActive }) => isActive ? 'text-red-600': 'hover:text-red-600 duration-300'} 
                                to={to} key={id} >    
                                    {link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center gap-6'>
                        <span className='relative cursor-pointer' onClick={()=>setSales(!sales)}>
                            {cartQuantity > 0 && (<span className='bg-red-600 px-[5px] py-[.5px] rounded-full text-white text-xs absolute top-[-5px] right-[-7px]'>{cartQuantity}</span>)}
                            <HiOutlineShoppingBag size={22}/>
                        </span>
                        <Link to="login">
                            <VscAccount size={22}/>
                        </Link>
                        <div className='block md:hidden cursor-pointer' onClick={()=>setNav(!nav)}>
                            {nav ? <AiOutlineClose size={22}/> : <AiOutlineMenu size={22}/>}
                        </div>
                    </div>

                    {nav  && (<div onClick={()=>setNav(!nav)} className='absolute top-0 left-0 h-screen w-full bg-black opacity-25'/>)}

                    {sales  && (<div onClick={()=>setSales(!sales)} className='absolute top-0 left-0 h-screen w-full bg-black opacity-25'/>)}

                    <ul className={nav ? 'absolute top-0 right-0 h-screen bg-white w-[250px] p-10 flex flex-col gap-7 pt-28 duration-300' : 'absolute top-0 right-[-100%] h-screen bg-white w-[250px] p-10 flex flex-col gap-7 pt-28 duration-300'}>
                        {links.map(({id,link,to})=>(
                            <li key={id} className='text-md font-semibold'>
                                <Link to={to}>{link}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className={sales ?
                        'fixed top-0 right-0 h-screen overflow-y-auto bg-white w-[400px] max-w-[80%] py-4 px-6 flex flex-col gap-7 duration-300' 
                        : 'fixed top-0 right-[-100%] overflow-y-auto h-screen bg-white w-[400px] max-w-[80%] p-10 flex flex-col gap-7 duration-300 overflow-auto'}>
                        <CartItems/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar