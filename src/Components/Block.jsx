import React from 'react';
import bitcoin from '../assets/bitcoin.png';
import ether from '../assets/ether.png';
import lite from '../assets/lite.png';


const Block = () => {

        const changeState = () =>{
                const currencies = document.querySelectorAll('#card');
               //const currButton = document.querySelectorAll('#but #butt');
                
                for (let i = 0; i < currencies.length; i++) {
                        currencies[i].addEventListener('click', () => {
                            for (var j=0; j < currencies.length; j++) {
                                if(j!==i) {
                                        currencies[j].classList.remove("state");
                                        currencies[j].classList.add('nstate');
                                        //currButton[j].classList.remove("showing");
                                        //currButton[j].classList.add("none");
                                }
                            }
                                currencies[i].classList.remove('nstate');
                                currencies[i].classList.add('state');
                                //currButton[i].classList.add("show");
                        })
                    }
        }

  return (
    <div>
        <section className='section pt-[180px] pb-12 lg:pt-[220px] bg-gray-100 w-full -mt-32'>
                <div className='container mx-auto'>
                    <div data-aos='zoom-in' data-aos-duration='2000'><h2 className="text-2xl capitalize font-semibold text-center mb-16">Trade securely and market the high growth cryptocurrencies.</h2></div> 
                            <div className="flex flex-col gap-[45px] lg:flex-row px-0 lg:px-8 items-center justify-center">
                                    <div className=" state rounded-2xl py-12 px-6 shadow-primary w-[350px]  lg:w-96 cursor-pointer transition ease-in duration-300" id='card'>
                                            <div className="flex flex-col justify-center items-center">
                                                    <img className="mb-12" src= { bitcoin } alt="" />
                                                    <div className="mb-4 flex items-center gap-x-2">
                                                            <div className="text-[32px] font-bold">Bitcoin</div>
                                                            <div className="text-lg text-gray-400 font-medium">BTC</div>
                                                    </div>
                                                    <p className="mb-6 text-center">Digital currency in which a record of transactions is maintained.</p>
                                                    <button id='but' className="bg-blue hover:bg-blue-hover-900 border-none pl-8 pr-6 gap-x-3  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                                            <div className="hidden text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                                    </button>
                                            </div>
                                    </div>
                                    <div className=" nstate rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300" id='card'>
                                            <div className="flex flex-col justify-center items-center">
                                                    <img className="mb-12" src= { ether } alt="" />
                                                    <div className="mb-4 flex items-center gap-x-2">
                                                            <div className="text-[32px] font-bold">Ethereum</div>
                                                            <div className="text-lg text-gray-400 font-medium">ETH</div>
                                                    </div>
                                                    <p className="mb-6 text-center">Blockchain technology to create and run decentralized digital applications.</p>
                                                    <button id='but' onClick={() => changeState()} className="text-blue w-16  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                                            <div className="hidden text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                                    </button>
                                            </div>
                                    </div>
                                    <div className=" nstate rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300" id='card'>
                                            <div className="flex flex-col justify-center items-center">
                                                    <img className="mb-12" src= { lite } alt="" />
                                                    <div className="mb-4 flex items-center gap-x-2">
                                                            <div className="text-[32px] font-bold">Litecoin</div>
                                                            <div className="text-lg text-gray-400 font-medium">LTC</div>
                                                    </div>
                                                    <p className="mb-6 text-center">Cryptocurrency that enables instant payments to anyone in the world.</p>
                                                    <button id='but' onClick={() => changeState()} className="text-blue w-16  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                                            <div className="hidden text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                                                    </button>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </section>
    </div>
  )
}

export default Block