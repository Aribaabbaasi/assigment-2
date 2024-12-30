import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <section className='contact-form border max-w-lg max-auto my-20 p-8 bg-white shadow-md rounded-md'>
        <h2 className='text-4xl font-bold mb-6 text-center' data-aos="fade-up">Contact Us</h2>
        <form>
          <input type="text" placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-red-950 rounded-md' required />
          <input type="email" placeholder='Email Address' className='w-full mb-4 px-4 py-2 border border-red-950 rounded-md' required />
          <input type="text" placeholder='Phone Number'required className='w-full mb-4 px-4 py-2 border border-red-950 rounded-md' />
          <textarea placeholder='Your Message' className='w-full mb-4 px-4 py-2 border border-red-950 rounded-md' rows={5} required></textarea>
          <button type='submit' className='w-full bg-red-950 text-white py-2 rounded-md'>Send Message</button>
        </form>
      </section>
    </div>
  )
}
export default Contact;
