import { FaCartShopping } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowForwardIos, MdAttachMoney } from "react-icons/md";

const OrdersCard = (props) => {

  const {id ,date, totalPrice, totalProducts} = props;

  return (
    <div className="border border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-md text-lg mb-4">

      <p className="text-xs font-light mb-3 text-gray-600">Order Id: {id}</p>

      <div className="flex gap-8 items-center">
        {/* total products */}
        <div className="flex items-center gap-1">
          <FaCartShopping />
          <p>{totalProducts} products</p>
        </div>
        {/* totalPrice */}
        <div className="flex items-center gap-1">
          <MdAttachMoney />
          <p>{totalPrice}</p>
        </div>
        {/* date time */}
        <div className="flex items-center gap-1">
          <FaRegCalendarAlt />
          <p>{date}</p>
        </div>

        {/* arrow icon */}
        <div>
          <MdArrowForwardIos />
        </div>
      </div>

    </div>
  )
}

export default OrdersCard