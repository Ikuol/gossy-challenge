import React from 'react';
//import Why from '../containers/Why';
import feature_1 from '../assets/feature-1.png';
import feature_2 from '../assets/feature-2.png';
import feature_3 from '../assets/feature-3.png';

const Afford = () => {
  return (
    <div>
            <section className='py-12 text-white'>
                            <div className='container mx-auto'>
                                    <div className='text text-center capitalize max-w-[758px] mx-auto mb-14' data-aos='zoom-in' data-aos-duration='3000'>
                                            <h1 className='text-2xl lg:text-3xl'>  Market sentiments, portfolio, and run the infrastructure of your choice  </h1>
                                    </div>
                                    <section className='py-6'>
                                            <div className='container mx-auto'>
                                                    <div className='flex flex-col lg:flex-row gap-x-[180px] justify-center items-start p-[25px]'>
                                                            <div className='text max-w-[500px] text-left pl-[10px]'>
                                                            <div data-aos='fade-zoom-in' data-aos-duration='3000'>
                                                                    <h1 className="text-2xl mb-5 capitalize font-semibold">invest smart</h1>
                                                                    <p className="text-gray-400 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                                                            </div> 
                                                            <div className="py-6" data-aos='zoom-in' data-aos-duration='2000'><button className="p-2 bg-blue-500 rounded-full px-4 text-xs">learn more</button></div>
                                                            </div>
                                                            <div className=''data-aos='zoom-in' data-aos-duration='2000'>
                                                            <img src={ feature_1 }  alt=""/>
                                                            </div>
                                                    </div>
                                            </div>
                                    </section>

                                    <section className='py-16'>
                                            <div className='container mx-auto'>
                                                    <div className='flex flex-col lg:flex-row justify-center items-center gap-x-[40px] p-[25px]'>
                                                            <div className='text max-w-[500px] text-left pl-[10px]'>
                                                            <div data-aos='fade-zoom-in' data-aos-duration='2000'><h1 className="text-2xl mb-5 capitalize font-semibold text-white">detailed statistics</h1></div> 
                                                            <div data-aos='fade-zoom-in' data-aos-duration='3000'><p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis, vero?</p></div> 
                                                            <div className="py-6" data-aos='zoom-in' data-aos-duration='2000'><button className="p-2 bg-blue-500 rounded-full px-4 text-xs">learn more</button></div>
                                                            </div>
                                                            <div data-aos='zoom-in' data-aos-duration='2000'>
                                                            <img src={ feature_2 } alt='' />
                                                            </div>
                                                    </div>
                                            </div>
                                    </section>

                                    <section className='pb-[4rem]'>
                                            <div className='container mx-auto'>
                                                    <div className='flex flex-col items-center justify-center lg:flex-row p-[25px]'>
                                                            <div className='text max-w-[500px] text-left pl-[10px]'>
                                                            <div data-aos='fade-zoom-in' data-aos-duration='2000'> <h1 className="text-2xl mb-5 capitalize font-semibold text-white">Grow your profit and track your investments</h1></div>
                                                            <div data-aos='fade-zoom-in' data-aos-duration='3000'><p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim odit distinctio dolore id incidunt?</p></div> 
                                                            <div className="py-6" data-aos='zoom-in' data-aos-duration='2000'><button className="p-2 bg-blue-500 rounded-full px-4 text-xs">learn more</button></div>
                                                            </div>
                                                            <div className='' data-aos='zoom-in' data-aos-duration='2000'>
                                                            <img src={ feature_3 } alt="" />
                                                            </div>
                                                    </div>
                                            </div>
                                    </section>
                            </div>
                </section>
    </div>
  )
}

export default Afford