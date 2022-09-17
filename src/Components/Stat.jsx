import React from 'react'

const Stat = () => {
  return (
    <div>
            <section className='pt-20 text-white max-w-[1800px]'>
                                <div className='container mx-auto'>
                                        <div className='flex flex-col items-center lg:justify-center lg:flex-row w-full gap-y-6 gap-x-[310px]' data-aos='fade-up' data-aos-duration='2000'>
                                                <div className='flex lg:flex-row gap-x-6 items-center'>
                                                        <div className='w-20 h-20 lg:w-12 lg:h-12 rounded-full bg-gray-600 flex items-center justify-center'>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="blue" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"></path></svg>
                                                        </div>
                                                        <div className='flex flex-col'>
                                                                <h1 className='text-2xl font-semibold'>$30</h1>
                                                                <p className='text-xs capitalize text-gray-400'>digital currency exchange</p>
                                                        </div>
                                                </div>

                                                <div className='flex lg:flex-row gap-x-6 items-center'>
                                                        <div className="w-20 h-20 lg:w-12 lg:h-12 rounded-full bg-gray-600 flex items-center justify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="blue" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z"></path><path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5zm2.5 6v-1.5a2.5 2.5 0 00-5 0V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16z"></path></svg></div>
                                                        <div className="flex flex-col">
                                                                <h1 className="text-2xl capitalize font-semibold">190+</h1>
                                                                <p className="text-xs capitalize text-gray-400">countries around the world</p>
                                                        </div>
                                                </div>

                                                <div className='flex lg:flex-row gap-x-6 items-center'>
                                                        <div className="w-20 h-20 lg:w-12 lg:h-12 rounded-full bg-gray-600 flex items-center justify-center">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" color="blue" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                                                        </div>
                                                        <div className="flex flex-col">
                                                                <h1 className="text-2xl capitalize font-semibold">$10M</h1>
                                                                <p className="text-xs capitalize text-gray-400">trusted wallet investors</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>
    </div>
  )
}

export default Stat