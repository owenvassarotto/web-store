import CheckoutSideMenu from "../CheckoutSideMenu"
import ProductDetail from "../ProductDetail"


const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center mt-24 mb-4">
        {children}

        <ProductDetail />

        <CheckoutSideMenu />
    </div>
  )
}

export default Layout