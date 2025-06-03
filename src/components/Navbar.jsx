import { AiFillBank } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <nav className="p-7 flex justify-between items-center w-full bg-yellow-500 z-50 font-inter border-solid border-gray-300">
      <a className="flex gap-1.5 items-center">
        <AiFillBank className="text-2xl text-slate-800" />
        <span className="text-2xl text-slate-800 pt-1 font-bold font-inter">
          SAMULITY
        </span>
      </a>
      <ul className="md:flex gap-7 text-slate-800 text-xl font-bold font-inter hidden">
        <li className="hover:text-yellow-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:text-yellow-500">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="md:hidden" onClick={toggleOpen}>
        <IoMenu className="text-4xl mx-1 text-slate-800" />
      </button>
      {isOpen ? (
        <div className="fixed bg-white inset-0">
          <div className="flex justify-between bg-yellow-500 p-7">
            <a className="flex gap-1.5 items-center">
              <AiFillBank className="text-2xl text-slate-800" />
              <span className="text-2xl text-slate-800 pt-1">SAMULITY</span>
            </a>
            <button className="md:hidden" onClick={toggleOpen}>
              <IoCloseSharp className="text-3xl text-slate-800" />
            </button>
          </div>
          <div className="mt-6">
            <Link to='/' onClick={toggleOpen} className="p-3 m-3 text-xl text-gray-700 block">Home</Link>
            <Link to='/services' onClick={toggleOpen} className="p-3 m-3 text-xl text-gray-700 block">Services</Link>
            <Link to='/contact' onClick={toggleOpen} className="p-3 m-3 text-xl text-gray-700 block">Contact</Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
}
