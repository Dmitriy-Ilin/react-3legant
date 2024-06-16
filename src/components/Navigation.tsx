import React from 'react';
import arrowDown from 'src/assets/arrow-down.svg';
import search from 'src/assets/search.svg';
import profile from 'src/assets/profile.svg';
import bag from 'src/assets/bag.svg';
import menu from 'src/assets/menu.svg';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
};

const Navigation: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <nav className='nav' onClick={(e) => e.stopPropagation()}>
        <div className='container'>
          <div className='nav__row'>
            <div>
              <button
                className='nav__menu'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <img src={menu} alt='menu' loading='lazy' />
              </button>
              <a href='#!' className='nav__logo logo'>
                3legant.
              </a>
            </div>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#!' className='nav__link'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <button className='nav__link'>
                  Shop
                  <img src={arrowDown} alt='arrow-down' loading='lazy' />
                </button>
              </li>
              <li className='nav__item'>
                <button className='nav__link'>
                  Product
                  <img src={arrowDown} alt='arrow-down' loading='lazy' />
                </button>
              </li>
              <li className='nav__item'>
                <a href='#!' className='nav__link'>
                  Contact Us
                </a>
              </li>
            </ul>
            <div className='nav__btns'>
              <button className='nav__btn nav__btn--search'>
                <img src={search} alt='search' loading='lazy' />
              </button>
              <button className='nav__btn nav__btn--profile'>
                <img src={profile} alt='profile' loading='lazy' />
              </button>
              <button className='nav__btn nav__btn--bag'>
                <img src={bag} alt='bag' loading='lazy' />
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
