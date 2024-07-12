"use client"


import { Button } from "@/components/ui/button";
import CheckoutList from "../components/CheckoutList";
import { useCart } from "@/app/components/cart-provider";
import Link from "next/link";


const Checkout = () => {
  const { cart, setCart } = useCart();



  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.qt * item.price;
  }, 0);
if(cart.length !== 0){
    return (
        <div className=" w-4/5 m-auto pt-8">
            <Link href="/">J.</Link>
            <div className="bg-white border mt-4 text-black flex align-start p-16  gap-8 justify-around">
               <CheckoutList />
                <div className="flex flex-col justify-between">
                    <div>
                    <p className="mb-4">SUMMARY</p>
                    {cart.map( product => {
                        return(
                            <p >{product.qt} x $ {product.price}</p>
                        )
                    })}
                    </div>
                   
                    <div>
                        
                        Total: $ {total.toFixed(2)}
                        <div>
                            <Link href="/order-placed" className="bg-black text-white px-4 py-2 mt-2 inline-block">BUY NOW</Link>
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
      )
}
else{
    return(
        <div className="text-white w-4/5 m-auto pt-8">
        CART.
        <div className="bg-white text-black flex align-start p-16  gap-8 justify-around">
       Your cart is empty
       </div>
       </div>
    )
}
}

export default Checkout