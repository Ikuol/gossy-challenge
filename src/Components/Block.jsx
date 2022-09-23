import React from 'react';
import Div from '../containers/Div';
import bitcoin from '../assets/bitcoin.png';
import ether from '../assets/ether.png';
import lite from '../assets/lite.png';


const Block = () => {

        return (
        <div>
                <section className='section pt-[180px] pb-12 lg:pt-[220px] bg-gray-100 w-full -mt-32'>
                        <div className='container mx-auto'>
                                <div data-aos='zoom-in' data-aos-duration='2000'><h2 className="text-2xl capitalize font-semibold text-center mb-16">Trade securely and market the high growth cryptocurrencies.</h2></div> 
                                <div className="flex flex-col gap-[45px] lg:flex-row px-0 lg:px-8 items-center justify-center">
                                        <div className="state rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300" id='card'>
                                                        <Div imgUrl={bitcoin} currency='Bitcoin' curSymbol='BTC' text='Digital currency in which a record of transactions is maintained.' />
                                        </div>
                                        <div className=" nstate rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300" id='card'>
                                                        <Div imgUrl={ether} currency='Ethereum' curSymbol='ETH' text='Blockchain technology to create and run decentralized digital applications.' />     
                                        </div>
                                        <div className=" nstate rounded-2xl py-12 px-6 shadow-primary cursor-pointer w-[350px]  lg:w-96 transition ease-in duration-300" id='card'>
                                                        <Div imgUrl={lite} currency='Litecoin' curSymbol='LTC' text='Cryptocurrency that enables instant payments to anyone in the world.' />
                                        </div>
                                </div>
                        </div>
                </section>
        </div>
        )
}

export default Block