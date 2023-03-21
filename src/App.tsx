import React, {useState} from 'react';
import './App.css';
import DisplayCard from './practice-cards';
import './nav-buttons.css';
import MakeFlashcard from './make-cards';
import YouTubeNotes from './video-notes';

  export default function App() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
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
            <DisplayCard onClose = {() => setShow(false)} show={show}/>
          </span>
          <span className='video-notes'>
          <input type={'button'} value='TAKE NOTES ON VIDEO' onClick={() => setShow3(true)}/>
              <YouTubeNotes onClose = {() => setShow(false)} show={show3}/>
          </span>
        </span>
      </div>
    </div>
  );
}