
import { AddToCart } from "@/app/components/AddToCart";
import Image from "next/image";
import Header from "../../components/Header";
import PdpShelf from "@/app/components/PdpShelf";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"





const ProductPage = async({params}) => {



    const id = params.productId;

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await response.json();



  return (
  <>
    <Header />
    <div className="text-black w-4/5 m-auto pt-8">
       
       <p className="text-6xl">{product.title}</p>
       <div className="bg-white flex flex-col align-start pt-16 pb-8 gap-8 justify-around md:flex-row md:px-16">
           <div className="flex align-center">
           <Image src={product.image} width={400} height={300} alt={product.title}  className="object-contain"/>

           </div>
           <div className="text-black flex flex-col gap-8 border p-8">
            <p>BRAND</p>
            <p className="text-stone-700 max-w-80 italic">{product.description}</p>
               <p className="flex">{product.rating.rate}
                 <span>
               <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg>
                </span></p>
               <p>$ {product.price}</p>
               <AddToCart id={product.id} title={product.title} image={product.image} price={ product.price} />
          
               <Accordion type="single" collapsible className="md:min-w-80">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      <span className="flex justify-start gap-4">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M13.5654 7.22473H18.0525L22.4874 11.6074V18.338H20.4914" stroke="black"/>
<path d="M8.55664 18.4424H15.2872" stroke="black"/>
<circle cx="17.9482" cy="18.3381" r="2.4218" stroke="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.05217 20.2599C7.11356 20.2599 7.97398 19.3994 7.97398 18.3381C7.97398 17.2767 7.11356 16.4163 6.05217 16.4163C4.99079 16.4163 4.13037 17.2767 4.13037 18.3381C4.13037 19.3994 4.99079 20.2599 6.05217 20.2599ZM6.05217 21.2599C7.66584 21.2599 8.97398 19.9517 8.97398 18.3381C8.97398 16.7244 7.66584 15.4163 6.05217 15.4163C4.43851 15.4163 3.13037 16.7244 3.13037 18.3381C3.13037 19.9517 4.43851 21.2599 6.05217 21.2599Z" fill="black"/>
<path d="M1.49829 18.8469L1.49831 3.85461L13.5012 3.87711V18.338H8.45243" stroke="black"/>
<path d="M1.19995 18.338H3.70435" stroke="black"/>
</g>
</svg>
Free Flat Rate Shipping

      </span>
     </AccordionTrigger>
    <AccordionContent className="text-stone-700">
    Estimated to be delivered in two days.
    </AccordionContent>
  </AccordionItem>
</Accordion>

           </div>
           
       </div>
       <div className="text-black mt-8">
        <PdpShelf id={id} />
       </div>

   </div>
  </>
   
  )
}

export default ProductPage