import React,{useEffect} from 'react'
import {useShoppingCart} from '../Context/ShoppingCart'
import {Items} from '../data/Data'
import StoreItem from './StoreItem';
import { Link } from 'react-router-dom';

const CartItems = () => {

    const {cartItems,setCartItems,cartQuantity,getItemsQuantity,increaseCartQuantity,decreaseCartQuantity,removeItemFromCart} = useShoppingCart();

    var totalPrice = 0;
    return (
        <div>
            <div className='py-8'>
                <span className='font-bold md:text-3xl text-2xl'>Checkout Goods </span>
                <span className='font-bold md:text-2xl text-xl text-gray-400'>{"("+ cartQuantity + ")"}</span>
            </div>
            {cartQuantity>0 ? (
            
            <div>
            <div className='flex flex-col gap-4'>
            {
                cartItems.map((item)=>{
                    totalPrice += item.quantity * item.price;
                    return (
                        <StoreItem key={item.id} {...item}/>
                    )
                })
            }
            </div>
            <div className='py-8 flex flex-col gap-3'>
                <span className='flex items-center justify-between'>
                    <span className='text-xl font-semibold'>Subtotal:</span>
                    <span className='font-bold text-2xl'>${totalPrice}</span>
                </span>
                <Link className='bg-black text-white py-3 rounded-md text-center'>
                    Checkout now
                </Link>
            </div>
            </div>
            )
            :
            (
                <h1 className='text-center text-xl text-gray-500 py-28'>Your cart is currently empty.</h1>
            )
            }
        </div>
    )
}

export default CartItems