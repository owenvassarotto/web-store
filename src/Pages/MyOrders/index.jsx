import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { Link } from "react-router-dom"
import OrdersCard from "../../Components/OrdersCard"

const MyOrders = () => {

  const {orders} = useContext(ShoppingCartContext);

  return (
    <div>
        
      <h1 className="text-center mt-4 mb-6 text-2xl">My Orders</h1>

      {orders?.length > 0 ? 
        orders?.map((order, index) => (
          <Link key={index} to={`/my-order/${order.id}`}>
            <OrdersCard id={order.id} date={order.date} totalProducts={order.totalProducts} totalPrice={order.totalPrice} />
          </Link>
      )) : 
        <div className="flex justify-center mt-10 font-light px-4">
            There are no orders created yet. 😥 
        </div>
      }
    </div>
  )
}

export default MyOrders