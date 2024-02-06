import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../context"
import OrderCard from "../../Components/OrderCard";
import { Link, useParams } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { totalPrice } from "../../utils";

const MyOrder = () => {

  const { orders } = useContext(ShoppingCartContext);

  const params = useParams();

  const showOrder = id => {

    if(id === 'last'){
      return (
        /* Access the last element of 'order', if 'order' is defined */
        orders?.slice(-1)[0].products.map((product, index) => (
          <OrderCard 
            key={index} 
            productData={product}
            deleteOption={false}
          />
        ))
      )
    }else{
      return (
        /* Access to an specific order by id */
        orders?.map((order) => {
          if(order.id === id){
            return (
              /* Access the last element of 'order', if 'order' is defined */
              order.products.map((product, index) => (
                <OrderCard 
                  key={index} 
                  productData={product}
                  deleteOption={false}
                />
              ))
            )
          }
        })
      )
    }
  }

  // Calculating total price
  const calculateTotal = (id) => {
    const currentOrder = id === "last" ? orders.slice(-1)[0] : orders.find((order) => order.id === id);
    return currentOrder ? totalPrice(currentOrder.products) : 0;
  };

return (
    <div className="flex flex-col gap-4 px-4 mb-12 w-80">
        <div className="flex items-center justify-center gap-10">
          <Link to={"/my-orders"}>
            <MdArrowBackIos className="text-xl" />
          </Link>
          <h1 className="text-center mt-4 mb-6 text-2xl">My Order</h1>
        </div>
        {showOrder(params.id)}
        <div className="flex justify-between font-bold uppercase text-xl mt-4">
          <p>Total:</p>
          <span>${calculateTotal(params.id)}</span>
        </div>
    </div>
  )
}

export default MyOrder