import Card from "../../Components/Card"
import { useContext, useEffect } from "react"
import { ShoppingCartContext } from "../../context"
import { useParams } from "react-router-dom";

const Home = () => {

  const { setSearchByTitle, filteredProducts, setSearchByCategory } = useContext(ShoppingCartContext);

  const params = useParams();
  useEffect(() => {
    setSearchByCategory(params.category);
  }, [params.category])

  const renderView = () => {
    if(filteredProducts?.length > 0){
      return (
        filteredProducts?.map((product, index) => (
          <Card key={index} product={product} />
        ))
      )
    }else{
        return (
          <div className="text-center col-span-4 justify-center mt-10 font-light px-4">
            There were no results in the search. 😥 
          </div>
        )
    }
  }

  return (
    <>
      <h1 className="text-center mt-4 mb-6 text-2xl">Exclusive Products</h1>

      <input 
        type="text" 
        placeholder="Search a product"
        className="border border-gray-400 bg-slate-800 w-80 rounded-lg px-4 py-2 mb-6 focus:outline-none"  
        onChange={e => setSearchByTitle(e.target.value)}
      />

      <div className="grid md:grid-cols-4 gap-4 w-full place-items-center justify-center items-center max-w-screen-lg my-4">
        {renderView()}
      </div>
    </>
  )
}

export default Home