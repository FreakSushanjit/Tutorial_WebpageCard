import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full overflow-x-auto w-3/4 flex gap-6 p-5'>
      {props.users.map(function(elem,idx){  
        return <RightCard key={idx} id={idx} img={elem.img} bio={elem.bio} text={elem.text} color={elem.color} />
      })}
    </div> 
  )
}

export default RightContent