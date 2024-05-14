import arrowDown from 'src/assets/arrow-down.svg';
import search from 'src/assets/search.svg';
import profile from 'src/assets/profile.svg';
import bag from 'src/assets/bag.svg';

const Navigation = () => {
  return (
    <>
      <nav className='nav'>
        <div className='container'>
          <div className='nav__row'>
            <a href='#!' className='nav__logo logo'>
              3legant.
            </a>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#!' className='nav__link'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <button className='nav__link'>
                  Shop
                  <img src={arrowDown} alt='arrow-down' />
                </button>
              </li>
              <li className='nav__item'>
                <button className='nav__link'>
                  Product
                  <img src={arrowDown} alt='arrow-down' loading='lazy'/>
                </button>
              </li>
              <li className='nav__item'>
                <a href='#!' className='nav__link'>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className='nav__btns'>
              <button className='nav__btn'>
                <img src={search} alt='search' loading='lazy'/>
              </button>
              <button className='nav__btn'>
                <img src={profile} alt='profile' loading='lazy'/>
              </button>
              <button className='nav__btn'>
                <img src={bag} alt='bag' loading='lazy'/>
                <span className='nav__btn-count'>2</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
