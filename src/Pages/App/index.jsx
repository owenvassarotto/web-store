import { useRoutes, BrowserRouter, Navigate } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from "../../Components/NavBar"
import Layout from "../../Components/Layout"
import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from "../../context"
import Footer from "../../Components/Footer"
import { useContext } from "react"
import { hasUserAnAccount } from "../../utils"

// function to set and return the routes
const AppRoutes = () => {

  const { account, signOut } = useContext(ShoppingCartContext);

  // check if user is sign out 
  const isUserSignOut = signOut || JSON.parse(localStorage.getItem('sign-out'));

  let routes = useRoutes([
    {
      path: "/", element: hasUserAnAccount(account) && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />
    },
    {
      path: "/all", element: hasUserAnAccount(account) && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />
    },
    {
      path: "/categories/:category", element: hasUserAnAccount(account) && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"} />
    },
    {
      path: "/my-order", element: <MyOrder />
    },
    {
      path: "/my-order/:id", element: <MyOrder />
    },
    {
      path: "/my-orders", element: <MyOrders />
    },
    {
      path: "/sign-in", element: <SignIn />
    },
    {
      path: "/my-account", element: <MyAccount />
    },
    {
      path: "/*", element: <NotFound />
    },
  ])

  return routes;
}

const App = () => {

  // initialize local storage
  initializeLocalStorage();

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <Layout>
          <AppRoutes />
        </Layout>
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
