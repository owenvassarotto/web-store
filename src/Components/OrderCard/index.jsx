import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ShoppingCartContext } from "../../context";

const OrderCard = ({productData, deleteOption}) => {

    const {id, title, image, price} = productData;

    const { deleteProductFromCart } = useContext(ShoppingCartContext);

  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full object-cover rounded-lg" src={image} alt={`Image of ${title}`} />
            </figure>
            <p className="text-sm font-light truncate" style={{ width: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</p>
        </div>
        <div className="flex items-center gap-2">
            {/* price */}
            <p className="text-lg font-medium text-[#31cf31]">${price}</p>
            {/* delete button */}
            {deleteOption && (
                <button
                    onClick={e => deleteProductFromCart(e, id)}
                >
                    <IoMdClose />
                </button>
            )}
        </div>
    </div>
  )
}

export default OrderCard