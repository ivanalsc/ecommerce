
import { AddToCart } from "@/app/components/AddToCart";
import Image from "next/image";
import Header from "../../components/Header";




const ProductPage = async({params}) => {



    const id = params.productId;

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await response.json();



  return (
  <>
    <Header />
    <div className="text-white w-4/5 m-auto pt-8">
       
       <p className="text-6xl">{product.title}</p>
       <div className="bg-white flex align-start px-16 py-32 gap-8 justify-around">
           <div className="flex align-center">
           <Image src={product.image} width={400} height={300} alt={product.title} />

           </div>
           <div className="text-black flex flex-col gap-8">
               <p>{product.rating.rate}</p>
               <p>$ {product.price}</p>
               <AddToCart id={product.id} title={product.title} image={product.image} price={ product.price} />
          

           </div>
           
       </div>

   </div>
  </>
   
  )
}

export default ProductPage