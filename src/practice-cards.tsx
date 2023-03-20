import React, {useState} from 'react';
import './App.css';
import './card.css'


export default function DisplayFront(props: any) {
  const [flip, setflip] = useState(false)
  const showSide = (flipped:boolean) => {
    if (flipped == true){
      return 'Back'
    }
    else {
      return 'Front'
    }
  }
  if (!props.show) {return null }
  return(
    <div className='card-side'>
      <div className='card-side-display'>
        <div className='card-side-content'>
          <div className='card-side-text'>
            {showSide(flip)}
          </div>
          <div className='card-side-buttons'>
            <input type={'button'} value='FLIP' onClick={() => setflip(!flip)}/>
          </div>
        </div>
        <span className='card-side-footer'>
            <input type={'button'} value='Right'/>
            <input type={'button'} value='Wrong'/>
            <input type={'button'} value='FINISH' onClick={props.onClose}/>
        </span>
      </div>
    </div>
    );
  }