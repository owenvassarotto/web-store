import { useContext, useRef, useState } from "react"
import { MdArrowBackIos } from "react-icons/md";
import { ShoppingCartContext } from "../../context";
import { Navigate } from "react-router-dom";

const MyAccount = () => {

  const form = useRef(null);
  const [view, setView] = useState("user-info");

  const parsedAccount = JSON.parse(localStorage.getItem('account'));

  const {setAccount} = useContext(ShoppingCartContext);

  const renderUserInfo = () => {
    return (
      <div className="flex flex-col gap-4 w-80">

        <p className="mb-2">
            <span className="font-light text-sm mr-2">Name:</span>
            <span className="font-semibold">{parsedAccount?.name}</span>
        </p>

        <p className="mb-2">
            <span className="font-light text-sm mr-2">Email:</span>
            <span className="font-semibold">{parsedAccount?.email}</span>
        </p>

        <button
            className="bg-slate-950/10 hover:bg-slate-950/20 border border-slate-950 w-full py-3 rounded-lg font-semibold mt-2"
            onClick={() => setView("edit-user-info")}
          >
            Edit
        </button>
      </div>
    )
  }

  const editAccount = e => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }

    // editing user data of local storage and local state
    localStorage.setItem("account", JSON.stringify(data));
    setAccount(data);

    alert("Updated user data ✅")

    setTimeout(() => {
      setView("user-info");
    }, 1000);
  }

  const renderEditUserInfo = () => {
    return (
      <form 
        ref={form} 
        className="flex flex-col gap-4 w-80"
        onSubmit={e => editAccount(e)}
      >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">Your name:</label>
            <input 
              type="text"
              id="name"
              name="name"
              defaultValue={parsedAccount?.name}
              placeholder="Peter"
              className="rounded-lg border border-gray-600 placeholder:font-light placeholder:text-sm placeholder:text-gray-50/60 focus:outline-none py-2 px-2 bg-slate-950"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-sm">Your email:</label>
            <input 
              type="email"
              id="email"
              name="email"
              defaultValue={parsedAccount?.email}
              placeholder="peter@gmail.com"
              className="rounded-lg border border-gray-600 placeholder:font-light placeholder:text-sm placeholder:text-gray-50/60 focus:outline-none py-2 px-2 bg-slate-950"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-sm">Your password:</label>
            <input 
              type="password"
              id="password"
              name="password"
              defaultValue={parsedAccount?.password}
              placeholder="********"
              className="rounded-lg border border-gray-600 placeholder:font-light placeholder:text-sm placeholder:text-gray-50/60 focus:outline-none py-2 px-2 bg-slate-950"
            />
          </div>

          <button
            className="bg-slate-950 hover:bg-slate-950/80 w-full py-3 rounded-lg font-semibold mt-2"
            type="submit"
          >
            Edit
          </button>
        </form>
    )
  }

  const renderView = () => view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();

  return (
    <>  
      {view === "edit-user-info" ? (
        <div className="mt-4 mb-10 flex items-center justify-center gap-8">
          <button
            onClick={() => setView("user-info")}
          >
            <MdArrowBackIos className="text-xl" />
          </button>
          <h1 className="text-2xl">My Account</h1>
        </div>
      ) : (
        <h1 className="text-center mb-10 mt-4 text-2xl">My Account</h1>
      )}
      

      {renderView()}
    </>
  )
}

export default MyAccount