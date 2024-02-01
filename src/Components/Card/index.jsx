import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { GoPlus } from "react-icons/go";

const Card = ({product}) => {

    // object destructuring
    const {id, title, category, price, image} = product;

    const {count, setCount, openProductDetail, productToShow, setProductToShow} = useContext(ShoppingCartContext);

    // When we click in the card we call this function that show the ProductDetail component
    const showProduct = (productDetail) => {

        openProductDetail();

        setProductToShow(productDetail);
    }
    
    return (
        <div 
            className="bg-white shadow shadow-black/10 p-2 rounded-lg cursor-pointer w-56 h-60 hover:shadow-md hover:shadow-black/15"
            onClick={() => showProduct(product)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <img className="w-full h-full object-cover rounded-lg" src={image} alt="Headphones" />
                <button 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-gray-100 rounded-full m-2 w-6 h-6"
                    onClick={e => {
                        e.stopPropagation();
                        setCount(count + 1);
                    }}
                >
                    <GoPlus />
                </button>
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-full text-black text-xs m-2 p-1 capitalize">{category}</span>
            </figure>
            <p className="flex justify-between items-center gap-x-2 mt-3">
                <span className="text-sm font-light truncate">{title}</span>
                <span className="text-md font-medium">${price}</span>
            </p>
        </div>
    )
}

export default Card