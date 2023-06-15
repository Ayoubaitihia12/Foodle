import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {useShoppingCart} from '../Context/ShoppingCart'

function FoodCart({food}) {

  const {increaseCartQuantity,cartItems,getItemsQuantity} = useShoppingCart();

  const quantity = getItemsQuantity(food.id);
  
  return (
    <div className='rounded-lg bg-red-50 p-4 pt-12 group cursor-pointer max-w-[350px]'>
      
      <div className='md:h-[100px] h-[70px] flex items-center justify-center mb-4'>
        <img src={food.imgSrc} className='h-full object-cover group-hover:scale-110 duration-300' alt="" />
      </div>

      <div className='flex flex-col items-center gap-4'>
        <h1 className='font-bold text-xl'>{food.name}</h1>
        <p className='text-center text-md'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ab.
        </p>
        <span className='flex items-center justify-between w-full'>
          <h1 className='font-bold text-xl'>${food.price}</h1>
          <button 
          onClick={()=>increaseCartQuantity(food.id,food.price)}
          className='bg-red-600 md:text-md text-sm px-5 py-2 rounded-full text-white'>
            Add To Cart {quantity > 0 && ('('+ quantity + ')')}
          </button>
        </span>
      </div>

    </div>
  )
}

export default FoodCart