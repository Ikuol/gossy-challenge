import React from 'react';
import { Header,Entry,Stat,Reason,Form,Block,Afford,Subcription,Footer } from './Components';
import './App.css';


const view = () => {

  return (
            <div className="overflow-hidden text-center">
                <div>
                        <Header />
                        
                        <div className=''>

                                <Entry />                

                                <Stat />

                                <Reason />
                                
                                <Form />
                               
                                <Block />
                               
                                <Afford />
                                                                                
                                <Subcription />
                                
                                <Footer />

                         </div>
                </div>
        </div>
  )
}

export default view