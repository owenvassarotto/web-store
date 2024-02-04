import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { Link } from "react-router-dom"
import OrdersCard from "../../Components/OrdersCard"

const MyOrders = () => {

  const {orders} = useContext(ShoppingCartContext);

  return (
    <div>
        
      <h1 className="text-center mt-4 mb-6 text-2xl">My Orders</h1>

      {orders.map((order, index) => (
        <Link key={index} to={`/my-order/${order.id}`}>
          <OrdersCard date={order.date} totalProducts={order.totalProducts} totalPrice={order.totalPrice} />
        </Link>
      ))}
    </div>
  )
}

export default MyOrders