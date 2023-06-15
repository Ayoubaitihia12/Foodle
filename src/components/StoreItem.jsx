import React , {useState,useEffect} from 'react'
import {Items} from '../data/Data'
import {AiOutlineClose} from 'react-icons/ai'
import {useShoppingCart} from '../Context/ShoppingCart'

const StoreItem = ({id,quantity}) => {

    const {removeItemFromCart,increaseCartQuantity,decreaseCartQuantity} = useShoppingCart();

    const [storeItems,setStoreItems] = useState({});

    useEffect(()=>{
        setStoreItems(Items.find((item)=> item.id === id));
    },[])

    const totalPrice = quantity*storeItems.price;

    return (
        <div className='border-[1px] border-gray-500 rounded-lg flex justify-between items-center p-4'>
           <div className='flex items-start gap-5'>
                <img src={storeItems.imgSrc} alt={storeItems.name} className='w-[60px] object-cover mt-2' />
                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-lg'>{storeItems.name}</span>
                    <span className='flex justify-between items-center'>
                        <span className='text-sm'>{quantity}x</span>
                        <span className='text-red-600 font-semibold'>${totalPrice}</span>
                    </span>
                    <span className='flex items-center justify-between px-3 w-full rounded-md overflow-hidden bg-red-100 text-lg min-w-[120px]'>
                        <button onClick={()=>increaseCartQuantity(id,storeItems.price)}>+</button>
                        <span>{quantity}</span>
                        <button onClick={()=>decreaseCartQuantity(id)}>-</button>
                    </span>
                </div>
           </div>

           <div className='cursor-pointer' onClick={()=>removeItemFromCart(id)}>
                <AiOutlineClose />
           </div>

        </div>
    )
}

export default StoreItem