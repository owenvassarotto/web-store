import CheckoutSideMenu from "../CheckoutSideMenu"
import ProductDetail from "../ProductDetail"


const Layout = ({children}) => {
  return (
    <div className="flex flex-col items-center pt-24 pb-14">
        {children}

        <ProductDetail />

        <CheckoutSideMenu />
    </div>
  )
}

export default Layout