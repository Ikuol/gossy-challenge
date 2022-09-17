import React from 'react'
import logo from './assets/logo.svg';
import hero from './assets/hero.png';
import why from './assets/why.png';
import bitcoin from './assets/bitcoin.png';
import ether from './assets/ether.png';
import lite from './assets/lite.png';
import feature_1 from './assets/feature-1.png';
import feature_2 from './assets/feature-2.png';
import feature_3 from './assets/feature-3.png';
import index_1 from './assets/index-1.png';
import index_2 from './assets/index-2.png';
import index_3 from './assets/index-3.png';
import './App.css';

const view = () => {

        const getYear = () =>{
                var aujourdhui = new Date();
                var annee = aujourdhui.getUTCFullYear();
                return annee;
        }

        const showMenu = () =>{
                document.querySelector('#nav').classList.remove('-right-full');
                document.querySelector('#nav').classList.add('-right-0');
        }
         
        
        const hideMenu = () =>{
                document.querySelector('#nav').classList.add('-right-full');
                document.querySelector('#nav').classList.remove('-right-0');
        }

        // const changeState = () =>{

        // }
  return (
            <div className="overflow-hidden text-center">
            <div>
                <header className='py-5'>
                    <div className='container mx-auto'>
                            <div className='flex justify-between pl-[10px] lg:gap-x-[600px] lg:justify-center'>
                            
                                <img src={logo} alt="error" />
                                
                                <div className='hidden lg:flex gap-x-[55px] items-center'>
                                    <nav className=''>
                                        <ul className='flex gap-x-8 justify-between'>
                                            <li className='transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white'>Products</li>
                                            <li className='transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white'>Features</li>
                                            <li className='transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white'>About</li>
                                            <li className='transition-all border-b border-transparent cursor-pointer hover:border-blue-500 text-white'>Contact</li>
                                        </ul>
                                    </nav>
                                    <div className=''>
                                        {/* <a href="#" className='text-white capitalize cursor-pointer'>login</a> */}
                                        <span className='mx-6 text-white/20'> | </span>
                                        <button className='text-white bg-blue-500 rounded-3xl px-4 py-1 capitalize'>register</button>
                                    </div>
                                </div>
                                 <svg onClick={ () => showMenu() } stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="lg:hidden mr-[10px] text-3xl text-white cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> 
                            </div>
                    </div>
                </header>
                <div className='-right-full fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500 bg-violet-500 show' id='nav'>
                <nav className='lg:hidden flex bg-darkblue-secondary h-full top-0 w-full justify-center text-white'>
                        <svg onClick={ () => hideMenu() } stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-3xl absolute right-6 top-6 cursor-pointer " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
                        <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize">
                            <li className="text-white text-2xl">Products</li>
                            <li className="text-white text-2xl">Features</li>
                            <li className="text-white text-2xl">About</li>
                            <li className="text-white text-2xl">Contact</li>
                            <div className="flex items-center justify-center">
                                {/* <a href="#" class="text-white text-2xl capitalize cursor-pointer">login</a> */}
                                <span className="mx-6 text-white/20"> | </span>
                                <button className="text-white text-2xl bg-blue-500 rounded-3xl px-4 py-1 capitalize">register</button>
                            </div>
                        </ul>
                </nav>
                </div>  
            <div className=''>
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

                    <section className='section pt-[180px] pb-12 lg:pt-[220px] bg-gray-100 w-full -mt-32'>
                            <div className='container mx-auto'>
                               <div data-aos='zoom-in' data-aos-duration='2000'><h2 className="text-2xl capitalize font-semibold text-center mb-16">Trade securely and market the high growth cryptocurrencies.</h2></div> 
                                <div className="flex flex-col gap-[45px] lg:flex-row px-0 lg:px-8 items-center justify-center">
                                            <div className="bg-violet-900 text-white  rounded-2xl py-12 px-6 shadow-primary w-[350px]  lg:w-96 cursor-pointer transition ease-in duration-300">
                                                    <div className="flex flex-col justify-center items-center">
                                                        <img className="mb-12" src= { bitcoin } alt="" />
                                                        <div className="mb-4 flex items-center gap-x-2">
                                                                <div className="text-[32px] font-bold">Bitcoin</div>
                                                                <div className="text-lg text-gray-400 font-medium">BTC</div>
                                                        </div>
                                                        <p className="mb-6 text-center">Digital currency in which a record of transactions is maintained.</p>
                                                        <button className="text-white bg-blue-600 hover:bg-blue-hover-900 border-none pl-8 pr-6 gap-x-3  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                                                <div className="text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                                        </button>
                                                    </div>
                                            </div>
                                            <div className="bg-white  rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300">
                                                    <div className="flex flex-col justify-center items-center">
                                                        <img className="mb-12" src= { ether } alt="" />
                                                        <div className="mb-4 flex items-center gap-x-2">
                                                                <div className="text-[32px] font-bold">Ethereum</div>
                                                                <div className="text-lg text-gray-400 font-medium">ETH</div>
                                                        </div>
                                                        <p className="mb-6 text-center">Blockchain technology to create and run decentralized digital applications.</p>
                                                        <button className="text-blue w-16  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                                                <div className="hidden text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                                        </button>
                                                    </div>
                                            </div>
                                            <div className="bg-white rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300">
                                                    <div className="flex flex-col justify-center items-center">
                                                        <img className="mb-12" src= { lite } alt="" />
                                                        <div className="mb-4 flex items-center gap-x-2">
                                                                <div className="text-[32px] font-bold">Litecoin</div>
                                                                <div className="text-lg text-gray-400 font-medium">LTC</div>
                                                        </div>
                                                        <p className="mb-6 text-center">Cryptocurrency that enables instant payments to anyone in the world.</p>
                                                        <button className="text-blue w-16  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                                                <div className="hidden text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                                        </button>
                                                    </div>
                                            </div>
                                </div>
                            </div>
                    </section>

                    <section className='py-12 text-white'>
                                <div className='container mx-auto'>
                                            <div className='text text-center capitalize max-w-[758px] mx-auto mb-14' data-aos='zoom-in' data-aos-duration='3000'>
                                                    <h1 className='text-2xl lg:text-3xl'>  Market sentiments, portfolio, and run the infrastructure of your choice  </h1>
                                            </div>
                                            <section className='py-6'>
                                                    <div className='container mx-auto'>
                                                        <div className='flex flex-col lg:flex-row gap-x-[180px] justify-center items-start p-[25px]'>
                                                                <div className='max-w-[500px] text-left pl-[10px]'>
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
                                                                <div className='order-2 lg:order-1' data-aos='zoom-in' data-aos-duration='2000'>
                                                                    <img src={ feature_2 } alt='' />
                                                                </div>
                                                                <div className='text max-w-[500px] order-1 lg:order-2 text-left pl-[10px]'>
                                                                   <div data-aos='fade-zoom-in' data-aos-duration='2000'><h1 className="text-2xl mb-5 capitalize font-semibold text-white">detailed statistics</h1></div> 
                                                                   <div data-aos='fade-zoom-in' data-aos-duration='3000'><p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero deserunt commodi quos adipisci! Corporis, vero?</p></div> 
                                                                    <div className="py-6" data-aos='zoom-in' data-aos-duration='2000'><button className="p-2 bg-blue-500 rounded-full px-4 text-xs">learn more</button></div>
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
                    
                    <footer className='lg:pt-14 pt-0'>
                                <div className='container mx-auto'>
                                        <div className='flex flex-1 flex-col gap-12 lg:flex-row bg-darkblue text-white justify-center gap-x-[190px]'>
                                            <div className='mx-auto lg:mx-0 mb-6 max-w-[285px]'>
                                                    <img src={logo} alt="error" />
                                            </div>
                                            <div className="flex flex-none flex-col gap-16 lg:flex-row">
                                                    <div className="text-center w-full lg:text-left">
                                                        <div className="text-xl font-medium mb-6">Quick Links</div>
                                                        <ul className="space-y-4 text-gray">
                                                                <li className="hover:text-blue transition">Home</li>
                                                                <li className="hover:text-blue transition">Products</li>
                                                                <li className="hover:text-blue transition">About</li>
                                                                <li className="hover:text-blue transition">Features</li>
                                                                <li className="hover:text-blue transition">Contact</li>
                                                        </ul>
                                                    </div>
                                                    <div className="text-center w-full lg:text-left">
                                                        <div className="text-xl font-medium mb-6">Resources Links</div>
                                                                <ul className="space-y-4 text-gray">
                                                                    <li className="hover:text-blue transition">Download Whitepapper</li>
                                                                    <li className="hover:text-blue transition">Smart Token</li>
                                                                    <li className="hover:text-blue transition">Blockchain Explore</li>
                                                                    <li className="hover:text-blue transition">Crypto API</li>
                                                                    <li className="hover:text-blue transition">Interest</li>
                                                                </ul>
                                                        </div>
                                                    </div>

                                                    <div className='flex flex-col'>
                                                        <div className='lg:ml-[80px]'>
                                                                <h3 className="h3 font-medium text-center mb-10 lg:text-left">We accept following payment systems</h3>
                                                                <div className='flex justify-center items-center gap-6'>
                                                                    <img src={ index_1 } alt="error" />
                                                                    <img src={ index_2 } alt="error" />
                                                                    <img src={ index_3 } alt="error" />
                                                                </div>
                                                        </div>
                                                    </div>
                                        </div>
                                </div>

                                <div className='py-12'>
                                            <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row justify-center lg:gap-y-0 text-white gap-x-[770px]'>
                                            
                                                    <div>© { getYear() } CRAPPO. All rights reserved.</div>
                                                    <div className='flex text-2xl gap-x-[2rem]'>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"></path></svg>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M260.062 32C138.605 32 40.134 129.701 40.134 250.232c0 41.23 11.532 79.79 31.559 112.687L32 480l121.764-38.682c31.508 17.285 67.745 27.146 106.298 27.146C381.535 468.464 480 370.749 480 250.232 480 129.701 381.535 32 260.062 32zm109.362 301.11c-5.174 12.827-28.574 24.533-38.899 25.072-10.314.547-10.608 7.994-66.84-16.434-56.225-24.434-90.052-83.844-92.719-87.67-2.669-3.812-21.78-31.047-20.749-58.455 1.038-27.413 16.047-40.346 21.404-45.725 5.351-5.387 11.486-6.352 15.232-6.413 4.428-.072 7.296-.132 10.573-.011 3.274.124 8.192-.685 12.45 10.639 4.256 11.323 14.443 39.153 15.746 41.989 1.302 2.839 2.108 6.126.102 9.771-2.012 3.653-3.042 5.935-5.961 9.083-2.935 3.148-6.174 7.042-8.792 9.449-2.92 2.665-5.97 5.572-2.9 11.269 3.068 5.693 13.653 24.356 29.779 39.736 20.725 19.771 38.598 26.329 44.098 29.317 5.515 3.004 8.806 2.67 12.226-.929 3.404-3.599 14.639-15.746 18.596-21.169 3.955-5.438 7.661-4.373 12.742-2.329 5.078 2.052 32.157 16.556 37.673 19.551 5.51 2.989 9.193 4.529 10.51 6.9 1.317 2.38.901 13.531-4.271 26.359z"></path></svg>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z"></path><path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zM256 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z"></path></svg>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path></svg>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z"></path></svg>
                                                    </div>
                                            </div>
                                </div>
                    </footer>
                </div>
            </div>
        </div>
  )
}

export default view