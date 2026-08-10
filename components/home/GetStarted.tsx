import Image from 'next/image'
import React from 'react'

const GetStarted = () => {
  return (
      <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-blue-900/20 bg-linear-to-r from-[#002178] to-[#093694]   p-6 text-white shadow-xl shadow-blue-950/15 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-4 ">
                  <div className='max-w-2xl'>
                      <span className='font-bold text-xs '>Ready to get started ?</span>
                      <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl mt-1 mb-4'>Make student pickup safer today.</h2>
                      <p className='text-sm lg:text-base text-gray-200 mb-5'>
                          Join hundrede of private schools already using EduSecure
                            to protect their students and simpitly operations.
                      </p>

                      <button className='bg-white px-6 py-2 rounded-md text-blue-950 cursor-pointer font-semibold transition-all hover:scale-[1.02]' >
                          Get Started
                      </button>

                  </div>

                  <div>
                      <Image
                          src={'/images/ready.png'}
                          alt='ready to get started'
                          width={200}
                          height={200}
                          className='rounded-lg'
                      />
                  </div>
                  
                  </div>
          </div>
        </section>  
  )
}

export default GetStarted