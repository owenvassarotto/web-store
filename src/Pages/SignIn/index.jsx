import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <>
      <h1 className="text-center mt-4 mb-6 text-2xl">Welcome</h1>

      <div className="flex flex-col w-80">

        <p className="mb-2">
          <span className="font-light text-sm mr-2">Email:</span>
          <span>vassarottowen@gmail.com</span>
        </p>

        <p>
          <span className="font-light text-sm mr-2">Password:</span>
          <span>******</span>
        </p>

        <Link to={"/"}>
          <button className="bg-slate-950 hover:bg-slate-950/75 desabled:bg-slate-950/40 text-white w-full rounded-lg py-3 mt-4 mb-2">
            Log In
          </button>
        </Link>

        <div className="text-center">
          <a href="/" className="font-light text-xs underline underline-offset-2">Forgot my password</a>
        </div>

        <button
          className="border border-gray-600 disabled:text-white/40 disabled:border-gray/40 rounded-lg mt-4 py-3 hover:bg-slate-950/10"
        >
          Sign Up
        </button>
      </div>
    </>
  )
}

export default SignIn