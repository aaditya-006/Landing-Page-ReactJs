import React from 'react'
import laptop from "../img.jpg"

function Experts() {
  return (
    <div className='mx-auto max-w-[80%] my-10 p-10 min-w-full  md:grid grid-cols-2'>
        <div className="h-[200px] col-span-1 md:w-[80%] ">
            <img src={laptop} alt="" />
        </div>
        <div className="sm:py-40 col-span-1 flex flex-col  md:w-[80%]">
            <h1 className='text-[#00df9a] text-3xl font-bold md:text-5xl my-2'>Learn from Experts</h1>
            <p className='my-2 md:text-xl sm:text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia obcaecati praesentium pariatur! Laboriosam ducimus nemo eligendi vitae? Rem alias beatae, sapiente accusamus sunt ipsum laudantium quis exercitationem corporis doloremque veritatis officiis recusandae dolorum quos expedita molestias rerum consequatur ipsa odit fuga optio deserunt inventore aliquam. Excepturi deserunt officiis praesentium!</p>
            <button className='bg-black text-white p-3 rounded-[10px] inline w-[30%] '>Get Started</button>
        </div>
    </div>
  )
}

export default Experts