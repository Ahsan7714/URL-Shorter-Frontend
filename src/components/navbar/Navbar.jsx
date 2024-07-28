import React, { useState } from 'react'
import logo from "./log.png"
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const[open,setOpen]=useState(false);
    const handleClick = () => setOpen(!open);
  return (
    <nav className=' px-10 py-2'>
    <div className=' flex justify-between items-center '>
        <div className=' flex items-center '>
            <img src={logo} alt="" width={200} />
        </div>
        <div className=' hidden md:flex gap-20 text-white'>
            <Link to="/" className='  text-xl hover:text-[#912534]'>Home</Link>
            <Link to="/about" className='  text-xl hover:text-[#912534]'>About</Link>
            <Link to="/blog" className='  text-xl hover:text-[#912534]'>Blog</Link>
            <Link to="/contact" className='  text-xl hover:text-[#912534]'>Contact</Link>
        </div>
        <div className="md:hidden text-white text-2xl" onClick={handleClick}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
    </div>
    <div className={`md:hidden ${open ? 'block' : 'hidden'} border-2 border-[#912534] px-6 py-10  rounded-lg`}>
        <Link className="block text-white py-3 text-xl hover:text-[#912534] " onClick={() => setNav(false)}>Home</Link>
        <Link className="block text-white py-3 text-xl hover:text-[#912534]" onClick={() => setNav(false)}>About</Link>
        <Link className="block text-white py-3 text-xl hover:text-[#912534]" onClick={() => setNav(false)}>Blog</Link>
        <Link className="block text-white py-3 text-xl hover:text-[#912534]" onClick={() => setNav(false)}>Contact</Link>
      </div>
    </nav>
  )
}
export default Navbar