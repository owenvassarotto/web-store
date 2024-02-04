import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ShoppingCartContext } from "../../context";


const ProductDetail = () => {

  const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailOpen ? 'flex flex-col' : 'hidden'} fixed bg-white right-0 top-[68px] w-[360px] h-[calc(100vh-68px)] border border-black rounded overflow-y-scroll`}>
        <div className="flex justify-between items-center p-4">
            <h2 className="font-medium text-xl">Detail</h2>
            <button 
              className="text-2xl"
              onClick={() => closeProductDetail()}
            ><IoMdClose /></button>
        </div>
        {/* detail body */}
        <figure className="px-6">
          <img 
            className="w-full rounded-lg" 
            src={productToShow.image} 
            alt={`Image of ${productToShow.title}`} 
          />
          <p className="flex flex-col gap-y-2 py-4">
            <span className="font-bold text-2xl text-[#31cf31]">${productToShow.price}</span>
            <span className="font-medium text-md">{productToShow.title}</span>
            <span className="font-light text-sm">{productToShow.description}</span>
          </p>
        </figure>
    </aside>
  )
}

export default ProductDetail