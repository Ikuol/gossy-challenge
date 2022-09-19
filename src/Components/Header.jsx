import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';

const header = () => {

            const showMenu = () =>{
                    document.querySelector('#nav').classList.remove('-right-full');
                    document.querySelector('#nav').classList.add('-right-0');
            }
            

            const hideMenu = () =>{
                    document.querySelector('#nav').classList.add('-right-full');
                    document.querySelector('#nav').classList.remove('-right-0');
            }

  return (
    <div>
         <header className='py-5'>
                <div className='container mx-auto'>
                        <div className='flex justify-between pl-[10px] lg:gap-x-[635px] lg:justify-center'>
                        
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
                                    <NavLink to="/" className='text-white capitalize cursor-pointer'>login</NavLink> 
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
                                 <NavLink to="/" className="text-white text-2xl capitalize cursor-pointer">login</NavLink> 
                                <span className="mx-6 text-white/20"> | </span>
                                <button className="text-white text-2xl bg-blue-500 rounded-3xl px-4 py-1 capitalize">register</button>
                            </div>
                        </ul>
                </nav>
            </div>  
    </div>
               
  )
}

export default header