import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { GoPlus, GoCheck } from "react-icons/go";

const Card = ({product}) => {

    // object destructuring
    const {id, title, category, price, image} = product;

    const {
        openProductDetail, 
        setProductToShow, 
        cartProducts, 
        setCartProducts, 
        openCheckoutSideMenu, 
        closeCheckoutSideMenu,
        deleteProductFromCart,
    } = useContext(ShoppingCartContext);

    // When we click in the card we call this function that show the ProductDetail component
    const showProduct = (productDetail) => {

        openProductDetail();

        setProductToShow(productDetail);

        closeCheckoutSideMenu();
    }

    const addProductToCart = (e, productData) => {
        e.stopPropagation();

        // we do a copy of the existing elements in cartProducts and then we add the new product
        setCartProducts([...cartProducts, productData]);

        openCheckoutSideMenu();
    }

    const renderIcon = (productId) => {

        const isInCart = cartProducts.some(product => product.id === productId);

        if(!isInCart){
            return (
                <button 
                        className="absolute top-0 right-0 flex justify-center items-center bg-slate-800/70 hover:bg-slate-800 rounded-full m-2 w-6 h-6 "
                        onClick={e => addProductToCart(e, product)}
                    >
                        <GoPlus />
                </button>
            )
        }else{
            return (
                <button 
                    className="absolute top-0 right-0 flex justify-center items-center bg-[#4ef24e] hover:bg-[#49e449] text-white rounded-full m-2 w-6 h-6"
                    onClick={e => deleteProductFromCart(e, productId)}
                >
                        <GoCheck />
                </button>
            )
        }
    }
    
    return (
        <div 
            className="bg-slate-800 p-2 rounded-lg cursor-pointer w-56 h-60 shadow shadow-black/10 hover:shadow-md hover:shadow-black/15 text-gray-50"
            onClick={() => showProduct(product)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <img className="w-full h-full object-cover rounded-lg" src={image} alt="Headphones" />
                {renderIcon(id)}
                <span className="absolute bottom-0 left-0 bg-slate-800/70 rounded-full text-xs m-2 py-1 px-2 capitalize">{category}</span>
            </figure>
            <p className="flex justify-between items-center gap-x-2 mt-3">
                <span className="text-sm font-light truncate">{title}</span>
                <span className="text-md font-medium">${price}</span>
            </p>
        </div>
    )
}

export default Card