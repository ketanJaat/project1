import React, { useState , useEffect } from 'react'

const Intro = () => {

    const [event , setEvent] = useState(false);

    useEffect(() => {
        // Check if the intro has been shown during the current session
        const isIntroShown = sessionStorage.getItem('introShown');
        if (isIntroShown) {
          setEvent(true); // Skip the intro if it has already been shown in this session
        }
      }, []);
    
      const handleEvent = () => {
        setEvent(true);
        sessionStorage.setItem('introShown', 'true'); // Mark the intro as shown for this session
      };

      const [show, setShow] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setShow(true); // Make the text visible after 5 seconds
        }, 5000);
    })

  return (
    <div className={`relative z-10 w-screen h-screen opacity-65 ${event ? 'hidden' : 'block'}`}>
        <div className='absolute bg-black h-screen w-screen flex justify-center items-center flex-col gap-10 text-white'>
            <p className='transform transition-transform animate-toggle'>aa gya bsdk</p>
            <p className={`text-xl transform transition-opacity duration-1000 ${show ? "opacity-100" : "opacity-0"} `}>bol na jaldi</p>
            <button className='border-2 border-white rounded-lg p-5' onClick={handleEvent}>haan</button>
        </div>
    </div>
  )
}

export default Intro