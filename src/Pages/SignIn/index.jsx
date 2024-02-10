import { useContext, useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { ShoppingCartContext } from "../../context"
import { hasUserAnAccount } from "../../utils"

const SignIn = () => {

  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  const parsedAccount = JSON.parse(localStorage.getItem('account'));

  const handleSignIn = () => {
    localStorage.setItem('sign-out', JSON.stringify(false));
    context.setSignOut(false);

    return <Navigate replace to={"/"} />
  }

  const renderLogin = () => {

    return (
      <div className="flex flex-col w-80">

          <p className="mb-2">
            <span className="font-light text-sm mr-2">Email:</span>
            <span>{parsedAccount?.email}</span>
          </p>

          <p>
            <span className="font-light text-sm mr-2">Password:</span>
            <input 
              type="password"
              disabled={true}
              className="bg-transparent"
              value={parsedAccount?.password}
            />
          </p>

          <Link to={"/"}>
            <button 
              className="bg-slate-950 hover:bg-slate-950/75 desabled:bg-slate-950/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
              disabled={hasUserAnAccount(context.account) === false}
              onClick={() => handleSignIn()}
            >
              Log In
            </button>
          </Link>

          <div className="text-center">
            <a href="/" className="font-light text-xs underline underline-offset-2">Forgot my password</a>
          </div>

          <button
            className="border border-gray-600 disabled:text-white/40 disabled:border-gray/40 rounded-lg mt-4 py-3 hover:bg-slate-950/10"
            disabled={hasUserAnAccount(context.account) === true}
            onClick={() => setView("create-user-info")}
          >
            Sign Up
          </button>
      </div>
    )
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }

    // Create account, save user data in local storage
    localStorage.setItem('account', JSON.stringify(data));
    context.setAccount(data);

    // Sign In
    handleSignIn();
  }

  const renderCreateUserInfo = () => {
    
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
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

        <Link to={"/"}>
          <button
            className="bg-slate-950 hover:bg-slate-950/80 w-full py-3 rounded-lg font-semibold mt-2"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogin();

  return (
    <>
      <h1 className="text-center mt-4 mb-6 text-2xl">Welcome</h1>

      {renderView()}
    </>
  )
}

export default SignIn