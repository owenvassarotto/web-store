import { formatDate } from "../../utils"
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-500 py-2 flex gap-1 items-center justify-center text-sm font-light">
        <MdOutlineCopyright />
        <p>
            {year} Web Store - All rights reserved.
        </p>
    </footer>
  )
}

export default Footer