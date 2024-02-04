import { FaCartShopping } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdArrowForwardIos, MdAttachMoney } from "react-icons/md";

const OrdersCard = (props) => {

  const {date, totalPrice, totalProducts} = props;

  return (
    <div className="flex gap-8 items-center mb-3 border border-gray-200 hover:bg-gray-50 p-4 rounded-md text-lg">
      {/* products */}
      <div className="flex items-center gap-1">
        <FaCartShopping />
        <p>{totalProducts}</p>
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
  )
}

export default OrdersCard