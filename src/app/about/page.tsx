import React from 'react'

const About = () => {
  return (
    <div>
        <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url(About.jpg)"}}>
            <div className='bg-red-950 bg-opacity-60 p-8 absolute left-[650px] rounded-md max-w-lg'>
                <h2 className='text-4xl  font-bold mb-4' data-aos="fade-up">About Us</h2>
                <p>Welcome to The Attar&apos;s Studio; where we celebrate the timeless elegance of attars—natural perfumes that represent a perfect blend of tradition, luxury, and craftsmanship. Each bottle is a masterpiece, meticulously crafted from the finest natural ingredients to create fragrances that resonate with sophistication and charm. From the soft floral whispers of rose and jasmine to the deep, earthy notes of sandalwood and oud, our attars offer a sensory journey that evokes emotions and memories. Handcrafted with passion and precision, these exquisite scents are more than just perfumes—they&apos;re a tribute to heritage and an embodiment of your individuality. Discover the art of attars at Attar&apos;s Studio, where every fragrance tells a unique and captivating story.</p>
            </div>
        </section>
    </div>
  )
}
export default About;
