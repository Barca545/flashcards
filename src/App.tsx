import React, {useState} from 'react';
import './App.css';
import DisplayFront from './practice-cards';
import './nav-buttons.css';
import MakeFlashcard from './make-cards'

  export default function App() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    return(
    <div className='App'>
      <br/>
      <div>
        <span className='flashcard-control'>
          <span className='make-cards'>
            <input type={'button'} value='MAKE FLASHCARDS' onClick={() => setShow2(true)}/>
            <MakeFlashcard show={show2}/>
          </span>
          <span className='practice-cards'>
            <input type={'button'} value='START FLASHCARDS' onClick={() => setShow(true)}/>
            <DisplayFront onClose = {() => setShow(false)} show={show}/>
          </span>
        </span>
      </div>
    </div>
  );
}