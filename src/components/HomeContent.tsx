'use client';
import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
  return (
    <div>
      <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: "url(Hero.jpg)"}}>
        <div className='pl-0 md:pl-16 text-white text-center'>
          <h1 className='text-6xl font-bold drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-red-950 to-red-950 via-yellow-200' data-aos='fade-up'>Welcome to The Attar&apos;s Studio</h1>
          <p className='text-2xl mt-4'>Discover the Essence of Purity – Handcrafted Attars for Every Soul</p>  
          <button className='mt-6 px-6 py-3 bg-red-950 hover:bg-[#60100b] rounded-md font-bold'>Shop Now</button>      
          </div>
      </section>
    </div>
  )
}
export default HomeContent
