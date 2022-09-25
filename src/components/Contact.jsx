import React from 'react'

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f]  pt-20'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Contact
          </p>
        </div>
        <div className=' flex justify-center items-center'>
          <form
            method='POST'
            action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c'
            className='flex flex-col max-w-[600px] w-full'
          >
            <p className='py-6  text-pink-600'>
              Submit the form below or shoot me an email
              <br />- raphaeljaybernardo@gmail.com
            </p>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name='message'
              placeholder='Enter your message'
              rows='10'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>
            <button className='text-white bg-gradient-to-b from-pink-500 to-pink-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
