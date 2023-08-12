import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

function Header() {
    const [toogle,settoogle] = useState(false)
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className="max-w-[1240px] py-[15px] items-center flex justify-between mx-auto">
        <div className='text-3xl font-bold'>
            AdiStudio
        </div>
        {
            toogle ?
            <AiOutlineMenu onClick={()=> settoogle(!toogle)} className='text-white text-3xl block'/>
            :
            <AiOutlineClose onClick={()=> settoogle(!toogle)}  className='text-white text-3xl  block'/>
        }
        <ul className={`duration-500 text-xl text-center text-white w-full h-screen fixed bg-black left-0 top-[98px] 
            ${toogle ?`left-[-100%]`:`left-[0px]` }`}>
            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                Gallery
            </li>
            <li className='p-5'>
                Portfolio
            </li>
            <li className='p-5'>
                Contact Me
            </li>
        </ul>
    </div>
</div>
  )
}

export default Header