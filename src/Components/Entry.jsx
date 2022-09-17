import React from 'react'
import hero from '../assets/hero.png';

const Entry = () => {
  return (
    <div>
    <section className='text-white bg-homeBg w-full h-full bg-cover bg-no-repeat pt-[18px]'>
                        <div className='container mx-auto bgHome'>
                                <div className='flex flex-col lg:flex-row justify-center items-center gap-x-[150px]'>
                                        <div className='text-left pl-[10px]'>
                                                <div className='rounded-2xl max-w-[300px] bg-gray-600 p-1 mb-6 pl-1 pr-3'>
                                                <div className='flex items-center justify-between'>
                                                        <div data-aos='zoom-in' data-aos-duration='2000' className='bg-white rounded-full uppercase text-gray-400 text-xs py-1 px-4'>70% save</div>
                                                        <div className='text-xs text-white ml-3 lg:ml-0'>for the best black friday deals</div>
                                                </div>
                                                </div>
                                        <div className='text max-w-[500px]'>
                                                <div data-aos='fade-up' data-aos-duration='3000'>
                                                        <h1 className='text-white text-4xl lg:text-5xl capitalize font-semibold py-2'>fatest & secure platform to invest in Cypto</h1>
                                                        <p className='text-gray-300 text-xs mb-3'>buy and sell cryptocurrencies by trusted 10M wallets, in over 100m transactions</p>
                                                </div>

                                                <div className='py-3' data-aos='zoom-in' data-aos-duration='2000'>
                                                        <button className='bg-blue-600 text-white rounded-3xl flex gap-x-4 items-center capitalize px-4 py-1'>
                                                        try for FREE
                                                        <div data-aos='zoom-in-right' data-aos-duration='2000'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="bg-white py-1 rounded-full w-8 h-8 text-blue-500 px-2 aos-init aos-animate" data-aos="fade-right" data-aos-offset="100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 17l5-5-5-5v10z"></path><path fill="none" d="M0 24V0h24v24H0z"></path></svg></div> 
                                                        </button>
                                                </div>
                                        </div>
                                        </div>
                                        <div data-aos='zoom-in' data-aos-duration='2000' className=''>
                                        <img src={ hero } alt='error' className='object-cover w-full lg:w-[80%]' />
                                        </div>
                                </div>
                        </div>
                </section>
    </div>
  )
}

export default Entry