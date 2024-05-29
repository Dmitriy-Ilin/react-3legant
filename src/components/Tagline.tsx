import { useState } from 'react';
import ticket from 'src/assets/tag.svg';
import arrowRight from 'src/assets/arrow-right.svg';
import close from 'src/assets/close.png';

const Tagline = () => {
  const [isClose, setIsClose] = useState(false);

  return (
    <>
      {!isClose ? (
        <>
          <div className='tagline'>
            <img className='tagline__icon' src={ticket} alt='icon' loading='lazy'/>
            <div className='tagline__desc'>
              30% off storewide — Limited time!
            </div>
            <a className='tagline__link' href='#!'>
              Shop Now
              <img src={arrowRight} alt='arrow-right' loading='lazy'/>
            </a>
            <button 
              onClick={() => setIsClose(true)}
              className='tagline__close'
            >
              <img src={close} alt='close' loading='lazy'/>
            </button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Tagline;
