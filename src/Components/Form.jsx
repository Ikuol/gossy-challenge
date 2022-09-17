import React from 'react'

const Form = () => {
  return (
        <div>
                <section className='pt-14'>
                    <div className='container mx-auto'>
                            <div className='text-white text-center mb-10'>
                                    <div data-aos='fade-up' data-aos-duration='2000'><h2 className='text-center capitalize mb-5 font-semibold text-2xl'> how much can you earn with us</h2></div>
                                    <div data-aos='fade-up' data-aos-duration='3000'><p className='text-gray-400 text-xs text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id similique temporibus dignissimos tempore odio?</p></div> 
                            </div>
                            <div className='lg:w-full bg-white w-[360px] lg:max-w-[942px] mx-auto rounded-2xl text-darkblue p-6 lg:p-12 shadow-primary relative' data-aos='zoom-in' data-aos-duration='2000'>
                                    <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
                                            <input type='text' placeholder='Enter your hash rate' className='text-black text-xl border-b outline-none' />
                                            <select className="select w-full lg:max-w-[200px] h-8 outline-none cursor-pointer">
                                            <option value="">TH/s</option><option value="">H/s</option><option value="">KH/s</option><option value="">MH/s</option><option value="">GH/s</option>
                                            </select>
                                            <button className='btn bg-blue-500 text-white rounded-full px-8 flex self-start h-10 items-center font-semibold'>Calculate</button>
                                    </form>
                                    <div className='mt-10 text-left'>
                                            <div className="text-blue-500 mb-4">ESTIMATED 24 HOUR REVENUE:</div>
                                            <div className="text-[32px] font-bold mb-3">0.055 130 59 ETH <span className="text-blue-600">($1275)</span></div>
                                            <div className="text-gray-500">Revenue will change based on mining difficulty and Ethereum price.</div>
                                    </div>
                            </div>
                    </div>
                </section>
        </div>
  )
}

export default Form