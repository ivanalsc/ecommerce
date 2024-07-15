"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/components/cart-provider";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { cart, setCart } = useCart();

  const deleteProduct = (id) => {

console.log("Acá id", id)
    const newCart = cart.filter((product) => product.product !== id);

    setCart(newCart)


};

  return (
    <div className=" px-8 pt-8 text-black flex justify-between items-center md:px-24">
      <div className="p-4">
        <Link href="/">J.</Link>
      </div>
      <div>
        <Drawer>
          <DrawerTrigger>CART.</DrawerTrigger>
          <DrawerContent className="px-24">
            <DrawerHeader>
              <DrawerTitle className="text-black">CART</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <ul className="flex gap-8 bg-white p-8 w-fit">
              {cart.length === 0 && <p>Your cart is empty</p>}
              {cart.map((product) => {
                return (
                  <li key={product.product} className="flex flex-col items-center gap-4 border p-4">
                    <Button className="flex justify-end w-full" onClick={()=>deleteProduct(product.product)}>X</Button>
                    
                    <div className=" w-36 max-w-36 h-36 max-h-36 flex items-center justify-center"> 
                    <Image src={product.image} width={150} height={100} alt={product.title} className="object-contain"/>

                    </div>
                    <div className="flex justify-center mb-4">
                <svg width="126" height="10" viewBox="0 0 126 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M63.2491 9.30678L67.7987 4.75718H125.651V4.55039H67.7987L63.2491 0.0524902L58.7512 4.55039H0.692139V4.75718H58.7512L63.2491 9.30678ZM63.2491 0.36269L67.5919 4.65378L63.2491 8.99658L58.9063 4.65378L63.2491 0.36269Z" fill="#555555"/>
</svg>

                </div>
                   <p className="max-w-60">{product.title} <span>({product.qt})</span></p>
                   <div className="flex justify-between w-full"><p>$ {product.price}</p></div>

                  </li>
                );
              })}
            </ul>
            <DrawerFooter>
            <DrawerClose>
                <Button variant="outline" className="text-black underline border-none hover:text-black">Continue shopping</Button>
              </DrawerClose>
              <Link href="/checkout" className="bg-black text-white hover:shadow-none flex items-center px-4">Go to checkout</Link>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
