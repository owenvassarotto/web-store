import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from "../../Components/NavBar"
import Layout from "../../Components/Layout"
import { ShoppingCartProvider } from "../../context"
import Footer from "../../Components/Footer"

// function to set and return the routes
const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/", element: <Home />
    },
    {
      path: "/all", element: <Home />
    },
    {
      path: "/categories/:category", element: <Home />
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
      path: "/*", element: <NotFound />
    },
  ])

  return routes;
}

const App = () => {

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
