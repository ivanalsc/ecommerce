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
    <div className="px-24 pt-8 text-white flex justify-between">
      <div className="p-4">
        <Link href="/">J.</Link>
      </div>
      <div>
        <Drawer>
          <DrawerTrigger>CART.</DrawerTrigger>
          <DrawerContent className="px-24">
            <DrawerHeader>
              <DrawerTitle className="text-white">CART</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <ul className="flex gap-8 bg-white p-8 w-fit">
              {cart.length === 0 && <p>Your cart is empty</p>}
              {cart.map((product) => {
                return (
                  <li key={product.product} className="flex flex-col items-center gap-4">
                    <div className=" w-36 max-w-36 h-36 max-h-36 flex items-center justify-center"> 
                    <Image src={product.image} width={150} height={100} alt={product.title} className="object-contain"/>

                    </div>
                   <p>{product.title} <span>({product.qt})</span></p>
                   <div className="flex justify-between w-full"><p>$ {product.price}</p> <Button onClick={()=>deleteProduct(product.product)}>X</Button></div>

                  </li>
                );
              })}
            </ul>
            <DrawerFooter>
            <DrawerClose>
                <Button variant="outline" className="text-white underline border-none hover:text-white">Continue shopping</Button>
              </DrawerClose>
              <Link href="/checkout" className="bg-white text-black hover:shadow-none hover:bg-white flex items-center px-4">Go to checkout</Link>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
