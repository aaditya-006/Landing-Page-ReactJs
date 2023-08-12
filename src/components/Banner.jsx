import React from 'react'
import Typed from 'react-typed';


function Banner() {
  return (
    <div className='bg-[#2699fb] text-center w-full py-[50px]'>
        <div className="max-w-[1240px] my-[100px] font-bold mx-auto ">
            <div className='text-xl md:text-3xl md:p-[24px]'>
                Learn With Us
            </div>
            <h2 className='text-white text-3xl md:text-[60px] md:p-[24px]'>Grow With Us.</h2>
            <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                Learn
                <Typed className='pl-3'
                    strings={['Website Development','Digital Marketing','Ethical Hacking']}
                    typeSpeed={40} 
                    loop 
                    backSpeed={30}
                />
            </div>
            
    <button className='bg-black mt-[10px] text-white p-3 rounded-[10px] inline w-[30%] '>Get Started</button>
        </div>
    </div>
  )
}

export default Banner