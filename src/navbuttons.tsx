import React, {useState} from 'react';

export default function CardNavButtons(props:any){
    const [current, nextId] = useState(0)
    const ids = Object.keys(props.set)
    if (Math.abs(current+1) > ids.length) 
        {nextId(0)}
    var  currentitem = props.set[ids[current]]
    console.log(currentitem)
    return (
      <span className='nav-buttons'>
        <input type={'button'} value='BACK' onClick={()=>nextId(current-1)}/>
        <input type={'button'} value='NEXT' onClick={()=>nextId(current+1)}/>
      </span>
      );
  }