import { createContext, useEffect, useState } from "react";

// creating the global context
const ShoppingCartContext = createContext();

// function to initialize localStorage
const initializeLocalStorage = () => {
    // getting account and sign-out of localStorage
    const accountLocalStorage = localStorage.getItem('account');
    const signOutLocalStorage = localStorage.getItem('sign-out');

    let accountValue;
    let signOutValue;

    if(!accountLocalStorage){
        localStorage.setItem('account', JSON.stringify({}));
        accountValue = {};
    }else{
        accountValue = JSON.parse(accountLocalStorage);
    }

    if(!signOutLocalStorage){
        localStorage.setItem('sign-out', JSON.stringify(false));
        signOutValue = false;
    }else{
        signOutValue = JSON.parse(signOutLocalStorage);
    }
}

const ShoppingCartProvider = ({children}) => {

    // My account
    const [account, setAccount] = useState({});

    // Sign out
    const [signOut, setSignOut] = useState(false);
    
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

    // Get products
    // state to save API's products
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    // Get categories
    const [productsCategories, setProductsCategories] = useState(null);

    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        // getting all products from API
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err => console.log("Error fetching products: ", err))

        // getting all products categories from API
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => setProductsCategories(data))
            .catch(err => console.log("Error fetching products categories: ", err))

        // initialize local storage
        initializeLocalStorage();
    }, [])

    const filteredProductsByTitle = (items, title) => items?.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));

    const filteredProductsByCategory = (items, category) => items?.filter(item => item.category === category);

    // Filtrado por título
    useEffect(() => {
        if (searchByTitle) {
            const filteredByTitle = filteredProductsByTitle(products, searchByTitle);
            setFilteredProducts(filteredByTitle);
        }
    }, [searchByTitle, products]);

    // Filtrado por categoría
    useEffect(() => {
        if (searchByCategory) {
            const filteredByCategory = filteredProductsByCategory(products, searchByCategory);
            setFilteredProducts(filteredByCategory);
        }
    }, [searchByCategory, products]);

    // Filtrado combinado
    useEffect(() => {
        if (searchByTitle && searchByCategory) {
            const filteredByBoth = filteredProductsByTitle(filteredProductsByCategory(products, searchByCategory), searchByTitle);
            setFilteredProducts(filteredByBoth);
        } else if (!searchByTitle && !searchByCategory) {
            setFilteredProducts(products);
        }
    }, [searchByTitle, searchByCategory, products]);

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
                products,
                setProducts,
                searchByTitle,
                setSearchByTitle,
                filteredProducts,
                productsCategories,
                searchByCategory,
                setSearchByCategory,
                account,
                setAccount,
                signOut,
                setSignOut,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }