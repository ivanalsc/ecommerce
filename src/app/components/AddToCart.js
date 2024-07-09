"use client"

import { Button } from "@/components/ui/button";
import { useCart } from "@/app/components/cart-provider";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import "../../app/globals.css";




export const AddToCart = ({id, title,image,price}) => {

  const {cart, setCart} = useCart();
  const { toast } = useToast()

  const addToCart = (id, title, image, price) => {

    const existingProductIndex = cart.findIndex(product => product.product === id);

  if (existingProductIndex !== -1) {
    const updatedCart = cart.map((product, index) => 
      index === existingProductIndex
        ? { ...product, qt: product.qt + 1 }
        : product
    );
    setCart(updatedCart);
  } else {
    const newProduct = { product: id, title: title, image: image, price: price, qt: 1 };
    setCart([...cart, newProduct]);
  }
  toast({
    title: "Added",
  })
};

  return (
    <div>
    <Button onClick={()=>addToCart(id,title,image,price)} variant="outline" className="button_slide hover:text-white">ADD TO CART</Button>
    <Toaster />
    </div>
  )
}
