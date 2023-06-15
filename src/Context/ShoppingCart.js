import { createContext,useContext,useState,useEffect } from "react";

const ShoppingCartContext = createContext({});

const initialCartItmes = localStorage.getItem("storeItems") ? JSON.parse(localStorage.getItem("storeItems")) : [];

const ShoppingCartProvider = ({children})=>{

    const [cartItems,setCartItems] = useState(initialCartItmes);

    useEffect(()=>{
        localStorage.setItem("storeItems",JSON.stringify(cartItems))
    },[cartItems])

    const cartQuantity = cartItems.reduce(
        (quantity,item) => item.quantity + quantity,0
    )

    const getItemsQuantity = (id) =>{
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }

    const increaseCartQuantity = (id,v_price) =>{
        setCartItems((currItems)=>{
            if(currItems.find((item)=> item.id === id) == null){
                return [...currItems,{id,quantity:1,price:v_price}];
            }else{
                return currItems.map((item)=>{
                    if(item.id === id){
                        return {...item,quantity:item.quantity+1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    

    const decreaseCartQuantity = (id) =>{
        setCartItems((currItems)=>{
            if(currItems.find((item)=> item.id === id)?.quantity === 1){
                return currItems.filter((item)=> item.id !== id);
            }else{
                return currItems.map((item)=>{
                    if(item.id === id){
                        return {...item,quantity: item.quantity -1};
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    const removeItemFromCart = (id) =>{
        setCartItems((currItems)=> currItems.filter((item)=>item.id !== id));
    }

    return(
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                setCartItems,
                cartQuantity,
                getItemsQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeItemFromCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;

export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext);
}