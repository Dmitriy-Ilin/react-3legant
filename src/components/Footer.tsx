import instagramm from 'src/assets/instagramm.png';
import facebook from 'src/assets/facebook.png';
import youtube from 'src/assets/youtube.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__row'>
          <div className='footer__title'>
            <div className='footer__logo'>
              3legant<span>.</span>
            </div>
            <div className='footer__divider'></div>
            <div className='footer__store'>Headphone Store</div>
          </div>
          <ul className='footer__nav'>
            <li>
              <a href='!#'>Home</a>
            </li>
            <li>
              <a href='!#'>Shop</a>
            </li>
            <li>
              <a href='!#'>Product</a>
            </li>
            <li>
              <a href='!#'>Blog</a>
            </li>
            <li>
              <a href='!#'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='footer__row footer__row--border'>
          <div className='footer__copyrights'>
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <a href='!#'>Privacy Policy</a>
            <a href='!#'>Terms of Use</a>
          </div>
          <div className='footer__socials'>
            <a href='!#'>
              <img src={instagramm} alt='instagramm' loading='lazy' />
            </a>
            <a href='!#'>
              <img src={facebook} alt='facebook' loading='lazy' />
            </a>
            <a href='!#'>
              <img src={youtube} alt='youtube' loading='lazy' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
