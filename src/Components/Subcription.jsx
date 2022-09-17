import React from 'react'

const Subcription = () => {
  return (
    <div>
            <section className='pb-[3.5rem]'>
                    <div className='container mx-auto'>
                            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-x-[300px] bg-gradient-to-r from-violet-500 bg-no-repeat lg:h-[216px] px-5 lg:px-10 py-6 rounded-md w-10/12 cori' data-aos='zoom-in' data-aos-duration='2000'>
                                    <div className='text-left pl-[1px]'>
                                    <h1 className="text-2xl mb-5 font-semibold text-white capitalize">start mining now</h1>
                                    <p className="text-white mb-5 max-w-[400px] text-xs ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</p>
                                    </div>
                                    <form className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-6">
                                    <input type='text'  className='input text-base text-black pl-[10px] h-10 rounded-lg focus:outline-none' placeholder='enter message' />
                                    <button className="capitalize p-2 px-4 bg-white rounded-2xl">subscribe</button>
                                    </form>
                            </div>
                    </div>
            </section>
    </div>
  )
}

export default Subcription