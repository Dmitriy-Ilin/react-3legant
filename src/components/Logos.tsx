import logo1 from 'src/assets/logo1.jpeg';
import logo2 from 'src/assets/logo2.jpeg';
import logo3 from 'src/assets/logo3.jpeg';
import logo4 from 'src/assets/logo4.png';
import logo5 from 'src/assets/logo5.jpeg';
import logo6 from 'src/assets/logo5.jpeg';

const Logos = () => {
  return (
    <article className='logos'>
      <div className='container'>
        <div className='logos-row'>
          <img src={logo1} alt='logo-1' loading='lazy'/>
          <img src={logo2} alt='logo-2' loading='lazy'/>
          <img src={logo3} alt='logo-3' loading='lazy'/>
          <img src={logo4} alt='logo-4' loading='lazy'/>
          <img src={logo5} alt='logo-5' loading='lazy'/>
          <img src={logo6} alt='logo-6' loading='lazy'/>
        </div>
      </div>
    </article>
  );
};

export default Logos;
