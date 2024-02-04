import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../OrderCard";
import {totalPrice} from "../../utils"
import { Link } from "react-router-dom";
import { formatDate } from "../../utils";
import { v4 as uuidv4 } from 'uuid';

const CheckoutSideMenu = () => {

  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, orders, setOrders} = useContext(ShoppingCartContext)

  // function to set my order
  const handleCheckout = () => {
    const orderToAdd = {
      id: uuidv4(),
      date: formatDate(new Date()),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }

    setOrders([...orders, orderToAdd]);

    // after sets my order we'll remove the products of the cart
    setCartProducts([]);
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? 'flex flex-col' : 'hidden'} fixed bg-white right-0 top-[68px] w-[360px] h-[calc(100vh-68px)] border border-black rounded`}>
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
            <h2 className="font-medium text-xl">Cart</h2>
            <button 
              className="text-2xl"
              onClick={() => closeCheckoutSideMenu()}
            >
              <IoMdClose />
            </button>
        </div>
        {/* products cart body */}
        {cartProducts.length > 0 ? (
          <div className="flex flex-col gap-4 px-4 overflow-y-scroll mb-[44.93px]">
              {cartProducts?.map((product, index) => (
                  <OrderCard 
                    key={index} 
                    productData={product} 
                    deleteOption={true}
                  />
              ))}
          </div>
        ): (
          <div className="flex justify-center mt-10 text-sm font-light px-4">
            There are no products in your cart yet. 😥 
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-300 bg-white flex justify-between">
            <p className="flex gap-2 text-xl py-2 font-semibold ml-4">
              <span className="uppercase">Total:</span>
              <span>${totalPrice(cartProducts)}</span>
            </p>
            <Link to={"/my-order/last"} className="bg-[#5ae05a] hover:bg-[#41b341] px-4 font-bold text-white flex">
              <button
                onClick={() => handleCheckout()}
              >
                Checkout
              </button>
            </Link>
        </div>
    </aside>
  )
}

export default CheckoutSideMenu