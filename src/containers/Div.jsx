import React from 'react'

const changeState = () =>{
    const currencies = document.querySelectorAll('#card');
    
    for (let i = 0; i < currencies.length; i++) {
            currencies[i].addEventListener('click', () => {
                for (var j=0; j < currencies.length; j++) {
                    if(j!==i) {
                            currencies[j].classList.remove("state");
                            currencies[j].classList.add('nstate');
                    }
                }
                    currencies[i].classList.remove('nstate');
                    currencies[i].classList.add('state');
            })
        }
}

const Div = ({imgUrl,currency,curSymbol,text}) => {
  return (
    <div>
            
            <div className="flex flex-col justify-center items-center">
                        <img className="mb-12" src= { imgUrl } alt="" />
                        <div className="mb-4 flex items-center gap-x-2">
                                <div className="text-[32px] font-bold"> { currency } </div>
                                <div className="text-lg text-gray-400 font-medium"> { curSymbol } </div>
                        </div>
                        <p className="mb-6 text-center"> { text } </p>
                        <button id='but' onClick={() => changeState()}  className="bg-blue hover:bg-blue-hover-900 border-none pl-8 pr-6 gap-x-3  border-2 border-gray-300 rounded-full h-16 flex justify-center items-center">
                                <div className="hidden text-lg font-medium">Start mining</div><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>
                        </button>
            </div>
            
    </div>
  )
}

export default Div