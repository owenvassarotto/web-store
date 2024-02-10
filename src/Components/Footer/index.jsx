import { formatDate } from "../../utils"
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="shadow bg-slate-800 text-gray-300 py-2 flex gap-1 items-center justify-center text-sm font-light absolute bottom-0 w-full">
        <MdOutlineCopyright />
        <p>
            {year} Web Store - All rights reserved.
        </p>
    </footer>
  )
}

export default Footer