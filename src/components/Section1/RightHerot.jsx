import React from 'react'

const RightHerot = (props) => {
  return (
    <div className="absolute h-full w-full top-0 left-0 flex flex-col justify-between bg-gradient-to-t from-black p-8 text-white">
        <h1 className='bg-white rounded-full text-black h-10 w-10 flex items-center justify-center'>{props.id+1}</h1>
        <div className='flex flex-col justify-between gap-8'>
          <p className='py-5 font-semibold'>{props.bio}</p>
          <div className='flex justify-between items-center'>
            <button style={{backgroundColor:props.color}} className={"text-white bg-gradient-to-t from-gray-700 text-white px-7 py-2 rounded-full hover:bg-green-300 hover:text-cyan-300 transition duration-300"}>{props.text}</button>
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>

      </div>
  )
}

export default RightHerot