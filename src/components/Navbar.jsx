import { AiFillBank } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!isOpen);
    }

    return (
        <nav className='p-7 flex justify-between items-center w-full bg-yellow-500 z-50 font-inter border-solid border-gray-300' >
                <a className="flex gap-1.5 items-center">
                <AiFillBank className="text-2xl text-slate-800"/>
                <span className="text-2xl text-slate-800 pt-1 font-bold font-inter">SAMUELITY</span>
                </a>
                <ul className='md:flex gap-7 text-slate-800 text-xl font-bold font-inter hidden'>
                  <li className="hover:text-yellow-500">
                    <a href='#'>Home</a>
                  </li>
                  <li className="hover:text-yellow-500">
                    <a href='#Header'>Services</a>
                  </li>
                  <li className="hover:text-yellow-500">
                    <a href='#Header'>Contact</a>
                  </li>
                </ul>
                <button className="md:hidden" onClick={toggleOpen}>
                    <IoMenu className="text-4xl mx-1 text-white"/>
                </button>
                {isOpen ?
                <div className="fixed bg-white inset-0">
                    <div className="flex justify-between bg-cyan-900 p-7">
                    <a className="flex gap-1.5 items-center">
                        <AiFillBank className="text-2xl text-white"/>
                        <span className="text-2xl text-white pt-1">SAMUELITY</span>
                    </a>
                    <button className="md:hidden" onClick={toggleOpen}>
                    <IoCloseSharp className="text-3xl text-white"/>
                    </button>
                    </div>
                    <div className="mt-6">
                        <a className="p-3 m-3 text-xl text-gray-700 block">Home</a>
                        <a className="p-3 m-3 text-xl text-gray-700 block">Services</a>
                        <a className="p-3 m-3 text-xl text-gray-700 block">Contact</a>
                    </div>
                </div>: <></>}
            </nav>
    );
}