import React from 'react'
import Header from './Components/Header';
import Entry from './Components/Entry';
import Stat from './Components/Stat';
import Reason from './Components/Reason';
import Form from './Components/Form';
import Block from './Components/Block';
import Afford from './Components/Afford';
import Subcription from './Components/Subcription';
import Footer from './Components/Footer'
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