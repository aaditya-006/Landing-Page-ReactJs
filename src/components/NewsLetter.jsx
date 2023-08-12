import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full bg-[#2699fb] p-4'>
        <div className="md:flex max-w-[1240px] mx-auto justify-between py-[50px]">
            <div className='m-2'>
                <h1 className='text-[40px] font-bold text-white'>Want to learn latest I.T. skills?</h1>
                <span className="text-white">Sign up to our news letter and stay up to date</span>
            </div>
            <div className='m-2 pt-5'>
                <input type="text" className='p-3 mx-2 rounded text-slate-600 w-[60%] sm:w-full' placeholder='Email'/>
                <button className='bg-black mt-[10px] text-white p-3 rounded-[10px]  inline w-[30%] '>Notify Me</button>
                <br />
                <p className="text-white w-[100%]">
                    We Care about the protection of your data.Read Our <br /> <span className='text-black'>Privacy Policy.</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter