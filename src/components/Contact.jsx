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
              className='bg-[#ccd6f6] p-2'
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              className='my-4 p-2 bg-[#ccd6f6]'
              type='email'
              placeholder='Email'
              name='email'
            />
            <textarea
              className='bg-[#ccd6f6] p-2'
              name='message'
              rows='10'
              placeholder='Message'
            ></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
