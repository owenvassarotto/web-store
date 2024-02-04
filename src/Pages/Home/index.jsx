import Card from "../../Components/Card"
import { useState, useEffect, useContext } from "react"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../context"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

const Home = () => {

  // state to save API's products
  const [products, setProducts] = useState(null)

  useEffect(() => {
    // getting all products from API
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.log("Error fetching products: ", err))
  }, [])

  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg items-center justify-center">
        {products?.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </>
  )
}

export default Home