import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[950px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-bold tracking-wide'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6] pt-2'>
          Raphael Jay Bernardo
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to='experience' smooth duration={500}>
            <button className='text-pink-600 group font-medium border-2 px-6 py-3 my-2 flex items-center border-pink-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white hover:font-medium rounded-md'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
