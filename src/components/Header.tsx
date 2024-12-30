"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = ( ) => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
  return (
    <header className='bg-red-950 text-white py-5 flex justify-between items-center px-10 relative z-10'>
    <h1 className='text-2xl font-bold'>The Attar&apos;s Studio</h1>
    <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/" onClick={closeMenu} className='hover:underline'>Home</Link>
        <Link href="/about" onClick={closeMenu} className='hover:underline'>About</Link>
        <Link href="/attars" onClick={closeMenu} className='hover:underline'>Attars</Link>
        <Link href="/contact" onClick={closeMenu} className='hover:underline'>Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
    </nav>
    <div className='md:hidden flex items-center'>
        <HiMenuAlt3
        className='text-white text-3xl cursor-pointer'
        onClick={toggleMenu}/>
    </div>
    <div
    className={`${
        isMenuOpen ? 'block' : 'hidden'
    } absolute top-[10px] left-0 w-full bg-gray-600 p-5 md:hidden z-20`}
    >
        <div className='flex justify-end'>
            <HiX
            className='text-white text-3xl cursor-pointer'
            onClick={toggleMenu} />
        </div>
        <nav className='flex flex-row items-center gap-3 text-white font-bold'>
        <Link href="/" onClick={closeMenu} className='hover:underline'>Home</Link>
        <Link href="/about" onClick={closeMenu} className='hover:underline'>About</Link>
        <Link href="/attars" onClick={closeMenu} className='hover:underline'>Attars</Link>
        <Link href="/contact" onClick={closeMenu} className='hover:underline'>Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
    </nav>
    </div>
    </header>
  )
}
export default Header;
