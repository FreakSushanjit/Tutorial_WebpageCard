import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightHerot from './RightHerot'
const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden rounded-4xl relative w-70 bg-amber-100'>
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightHerot text={props.text} bio={props.bio} id={props.id} color={props.color} />
    </div> 
  )
}

export default RightCard