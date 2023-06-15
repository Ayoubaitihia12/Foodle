import React , {useEffect, useState} from 'react'
import {BsTrash} from 'react-icons/bs'
import {Items} from '../data/Data'
import {useShoppingCart} from '../Context/ShoppingCart'

const CartProduct = ({id,quantity}) => {

    const {removeItemFromCart,increaseCartQuantity,decreaseCartQuantity} = useShoppingCart();

    const [StoreItem,setStoreItem] = useState({});

    useEffect(()=>{
        setStoreItem(Items.find((i)=> i.id === id));
    },[])

    console.log(StoreItem);

    const totalPrice = StoreItem.price*quantity;

    return (
        <tr className='border-t-[2px] border-gray-200'>
            <td>

                <div className='flex items-center py-6 gap-1'>
                    <div className='w-[100px]'>
                        <img className='h-[60px] object-cover' src={StoreItem.imgSrc} alt="" />
                    </div>
                    <div className='flex flex-col items-start gap-1'>
                        <h1 className='md:text-lg font-bold'>{StoreItem.name}</h1>
                        <span className='text-gray-400 text-sm'>{StoreItem.category}</span>
                    </div>
                </div>

            </td>

            <td>
                <div>
                    <div className='flex items-center justify-between w-[100px] py-1 px-3 border-[1.5px] border-gray-200 rounded-md text-lg'>
                        <button onClick={()=>decreaseCartQuantity(id,StoreItem.price)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={()=>increaseCartQuantity(id)}>+</button>
                    </div>
                </div>
            </td>

            <td className='text-left'>
                <span className='md:text-lg font-bold'>${totalPrice}</span>
            </td>

            <td>
                <button onClick={()=>removeItemFromCart(id)} className='cursor-pointer'>
                    <BsTrash/>
                </button>
            </td>
        </tr>
    )
}

export default CartProduct