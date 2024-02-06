import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {

    const { count, openCheckoutSideMenu, closeProductDetail, productsCategories } = useContext(ShoppingCartContext);

    /*
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    */ 
  return (
    <nav id="sidebar" className="flex justify-between items-center fixed top-0 shadow w-full z-10 py-5 px-8 text-sm font-light bg-white">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <Link
                    to={"/"}
                >
                    Web Store
                </Link>
            </li>
            <li>
                <NavLink
                    to={"/"}
                >
                    All
                </NavLink> 
            </li>
            {productsCategories?.map(category => (
                <li key={category}>
                    <NavLink
                        to={category}
                        className="capitalize"
                    >
                        {category}
                    </NavLink> 
                </li>
            ))}
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60">
                owen@web_store.com
            </li>
            <li>
                <NavLink
                    to={"/my-orders"}
                >
                    My Orders
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/my-account"}
                >
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/sign-in"}
                >
                    Sign In
                </NavLink>
            </li>
            <button 
                className="font-bold flex gap-1 items-center"
                onClick={() => {
                    closeProductDetail()
                    openCheckoutSideMenu()
                }}
            >
                <FaShoppingBag /> 
                {count}
            </button>
        </ul>
    </nav>
  )
}

export default NavBar