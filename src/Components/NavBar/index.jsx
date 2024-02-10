import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import { hasUserAnAccount } from "../../utils";
import ShoppingCart from "../ShoppingCart";

const NavBar = () => {

    const { count, openCheckoutSideMenu, closeProductDetail, productsCategories, signOut, setSignOut, account } = useContext(ShoppingCartContext);

    // check if user is sign out 
    const isUserSignOut = signOut || JSON.parse(localStorage.getItem('sign-out'));

    /*
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    */ 

    const handleSignOut = () => {
        localStorage.setItem('sign-out', JSON.stringify(true));
        setSignOut(true);
    }

    const renderView = () => {
        if(hasUserAnAccount(account) && isUserSignOut){
            return (
                <li>
                        <NavLink
                            to={"/sign-in"}
                            onClick={() => handleSignOut()}
                        >
                            Sign In
                        </NavLink>
                </li>
            )
        }else{
            return (
                <>
                    <li className="font-semibold">
                        {JSON.parse(localStorage.getItem("account")).email || account.email}
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
                            onClick={() => handleSignOut()}
                        >
                            Sign Out
                        </NavLink>
                    </li>
                </>
            )
        }
    }

  return (
    <nav id="sidebar" className="flex justify-between items-center fixed top-0 shadow w-full z-10 py-5 px-8 text-sm font-light bg-slate-800">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <Link
                    to={`${isUserSignOut ? 'sign-in' : '/'}`}
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
                        to={`categories/${category}`}
                        className="capitalize"
                    >
                        {category}
                    </NavLink> 
                </li>
            ))}
        </ul>
        <ul className="flex items-center gap-3">
            {renderView()}
            <ShoppingCart />
        </ul>
    </nav>
  )
}

export default NavBar