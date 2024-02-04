import { createContext, useEffect, useState } from "react";

// creating the global context
const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) => {

    
    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});
    
    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping Cart - Counter
    const [count, setCount] = useState(cartProducts.length);

    //when cartProducts is modified, we set the count to the number of products in the cart
    useEffect(() => setCount(cartProducts.length), [cartProducts])
    
    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Shopping Cart - Order
    const [orders, setOrders] = useState([]);

    // Shopping Cart - Delete products to cart
    const deleteProductFromCart = (e, id) => {
        // if e exists, we stop propagation
        e.stopPropagation();
        // we remove the product from the array with the filter method
        const newCartProducts = cartProducts.filter(product => product.id !== id);

        setCartProducts(newCartProducts);
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                deleteProductFromCart,
                orders,
                setOrders,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }