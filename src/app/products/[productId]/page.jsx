
import { AddToCart } from "@/app/components/AddToCart";
import Image from "next/image";
import Header from "../../components/Header";
import PdpShelf from "@/app/components/PdpShelf";





const ProductPage = async({params}) => {



    const id = params.productId;

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await response.json();



  return (
  <>
    <Header />
    <div className="text-white w-4/5 m-auto pt-8">
       
       <p className="text-6xl">{product.title}</p>
       <div className="bg-white flex align-start px-16 pt-32 pb-8 gap-8 justify-around">
           <div className="flex align-center">
           <Image src={product.image} width={400} height={300} alt={product.title} />

           </div>
           <div className="text-black flex flex-col gap-8">
            <p>BRAND</p>
               <p className="flex">{product.rating.rate}
                 <span>
               <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg>
                </span></p>
               <p>$ {product.price}</p>
               <AddToCart id={product.id} title={product.title} image={product.image} price={ product.price} />
          

           </div>
           
       </div>
       <div className="text-black">
        <PdpShelf id={id} />
       </div>

   </div>
  </>
   
  )
}

export default ProductPage