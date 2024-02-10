import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { FaShoppingBag } from "react-icons/fa";

const ShoppingCart = () => {

    const { count, openCheckoutSideMenu, closeProductDetail } = useContext(ShoppingCartContext);

  return (
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
  )
}

export default ShoppingCart