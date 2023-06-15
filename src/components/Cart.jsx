import React from 'react'
import {useShoppingCart} from '../Context/ShoppingCart'
import CartProduct from './CartProduct'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {removeItemFromCart,increaseCartQuantity,decreaseCartQuantity,cartItems,cartQuantity} = useShoppingCart();

  var TotalPrice = 0;

  return (
    <div className='w-full mt-20'>
      <div className='mx-auto w-full max-w-screen-lg px-4 py-12'>

      
          <div className='flex flex-col gap-5 mb-14'>
            <h1 className='font-bold text-5xl text-center'>Cart</h1>
            <span className='h-1 bg-red-500 rounded-full mx-auto w-[50px] block'></span>
          </div>

        {cartQuantity > 0 ? (

        <div className='flex lg:flex-row flex-col gap-10 items-start justify-between w-ful'>

          <div className='w-full'>
            <table className='w-full'>

              <tr className='uppercase text-gray-400 text-left'>
                <th className='pb-3'>product</th>
                <th className='pb-3'>quantity</th>
                <th className='pb-3'>price</th>
                <th></th>
              </tr>

              {
                cartItems.map((item)=>{
                  TotalPrice += item.price * item.quantity;
                  return(
                    <CartProduct key={item.id} {...item}/>
                  )
                })
              }

            </table>
          </div>

          <div className='border-[2px] p-4 rounded-md border-gray-200 min-w-[330px]'>
            
            <div className='flex flex-col gap-3 pb-4 border-b-[2px] border-gray-200'>
              <span className='flex items-center justify-between'>
                <span className=' text-gray-400 text-md font-medium'>SubTotal</span>
                <span className='font-bold text-md'>${TotalPrice}</span>
              </span>
              <span className='flex items-center justify-between'>
                <span className=' text-gray-400 text-md font-medium'>Discount</span>
                <span className=' text-gray-400 text-md font-medium'>$0</span>
              </span>
            </div>

            <div className='flex flex-col gap-3 pt-4'>
              <span className='flex items-center justify-between'>
                <span className='text-md font-medium'>Grand total</span>
                <span className='text-xl font-bold'>${TotalPrice}</span>
              </span>
              <button onClick={()=>alert("Checkout")} className='bg-black text-white text-center py-3 rounded-md'>
                Checkout now
              </button>
            </div>
          </div>


        </div>
        ) :
        (
          <div>
            <h1 className='text-center text-3xl text-gray-500'>Your cart is currently empty.</h1>
          </div>
        )
        }

          

      </div>
    </div>
  )
}

export default Cart