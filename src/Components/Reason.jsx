import React from 'react'
import why from '../assets/why.png';

const Reason = () => {
  return (
    <div>
        <section className='pt-10 text-white'>
                <div className='container mx-auto'>
                        <div className='flex flex-col justify-center items-center gap-x-12 lg:flex-row' >
                                <div className='order-2 lg:order-1' data-aos='zoom-in' data-aos-duration='2000'>
                                        <img src={ why } alt='' />
                                </div>
                                <div className='text max-w-[600px] order-1 lg:order-2 text-left pl-[10px]' data-aos='fade-up' data-aos-duration='2000'>
                                        <h1 className="text-4xl lg:text-5xl mb-5">why you should choose CHAPPO</h1>
                                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, praesentium.</p>
                                        <div className="py-6">
                                                <button className="bg-blue-500 text-white rounded-full px-4 py-1">learn more</button>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
    </div>
  )
}

export default Reason