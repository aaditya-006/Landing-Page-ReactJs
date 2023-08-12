import React from 'react'
import {BsPersonWorkspace} from "react-icons/bs"

export default function Plans() {
  return (
    <div className='py-[100px]'>
        <div className="md:grid grid-cols-3 gap-5 mx-auto max-w-[1240px]">
            <div className="shadow-xl sm:w-[80%] sm:mx-auto sm:my-[40px] rounded-[10px] h-[500px] text-center hover:scale-110 duration-300 ">
                <BsPersonWorkspace className='mx-auto bg-white mt-[-20px] text-6xl'/>
                <h2 className='p-2 text-4xl text-green-500 font-bold  py-[10%]'>Web Development</h2>
                <h1 className='p-1 text-5xl font-bold'>Rs.1499</h1>
                <hr className='w-[80%] mx-auto my-2' />
                <p className='p-2'>ReactJs</p>
                <p className='p-2'>HTML,CSS,JS</p>
                <p className='p-2'>Node.js</p>
                <button className='bg-green-500 mt-[10px] text-white p-3 rounded-[10px] inline w-[30%] '>Start Trial</button>
            </div>
            <div className="shadow-xl sm:w-[80%] sm:mx-auto sm:my-[40px] text-center h-[500px] hover:scale-110 duration-300 bg-slate-200">
            <BsPersonWorkspace className='mx-auto mt-[-20px] text-6xl'/>
                <h2 className='p-2 text-4xl  text-green-500 font-bold  py-[10%]'>Marketing</h2>
                <h1 className='p-1 text-5xl font-bold'>Rs.2499</h1>
                <hr className='w-[80%] mx-auto my-2' />
                <p className='p-2'>Search Engine optimization</p>
                <p className='p-2'>Facebook Ad Marketing</p>
                <p className='p-2'>Keyword Research</p>
                <button className='bg-black mt-[10px] text-white p-3 rounded-[10px] inline w-[30%] '>Start Trial</button>
            </div>
            <div className="shadow-xl sm:w-[80%] sm:mx-auto sm:my-[40px] h-[500px] text-center hover:scale-110 duration-300 ">
            <BsPersonWorkspace className='mx-auto mt-[-20px] text-6xl'/>
                <h2 className='p-2 text-4xl text-green-500 font-bold  py-[10%]'>UI/UX Crash Course</h2>
                <h1 className='p-1 text-5xl font-bold'>Rs.1499</h1>
                <hr className='w-[80%] mx-auto my-2' />
                <p className='p-2'>Research work</p>
                <p className='p-2'>5+ project</p>
                <p className='p-2'>Adobe XD</p>
                <button className='bg-green-500 mt-[10px] text-white p-3 rounded-[10px] inline w-[30%] '>Start Trial</button>
            
            </div>
        </div>
    </div>
  )
}
