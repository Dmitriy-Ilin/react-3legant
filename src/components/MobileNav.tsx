import React from 'react';
import search from 'src/assets/search.svg';
import arrowDown from 'src/assets/arrow-down.svg';
import instagramm from 'src/assets/instagram.svg';
import facebook from 'src/assets/facebook.svg';
import youtube from 'src/assets/youtube.svg';
import bag from 'src/assets/bag.svg';
import heart from 'src/assets/heart.svg';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
};

const MobileNav: React.FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div className='mobile-nav' onClick={(e) => e.stopPropagation()}>
        <div className='mobile-nav__top'>
          <div className='mobile-nav__header'>
            <a href='#!' className='nav__logo logo'>
              3legant.
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='mobile-nav__close'
            ></button>
          </div>
          <form className='mobile-nav__search'>
            <div className='mobile-nav__search-label'>
              <img src={search} alt='search' />
              <input
                type='text'
                className='mobile-nav__search-input'
                placeholder='Search'
              />
            </div>
          </form>

          <ul className='mobile-nav__list'>
            <li className='mobile-nav__item'>
              <a href='#!' className='mobile-nav__link'>
                Home
              </a>
            </li>
            <li className='mobile-nav__item'>
              <button className='mobile-nav__link'>
                Shop
                <img src={arrowDown} alt='arrow-down' loading='lazy' />
              </button>
            </li>
            <li className='mobile-nav__item'>
              <button className='mobile-nav__link'>
                Product
                <img src={arrowDown} alt='arrow-down' loading='lazy' />
              </button>
            </li>
            <li className='mobile-nav__item'>
              <a href='#!' className='mobile-nav__link'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='mobile-nav__bottom'>
          <div className='mobile-nav__links'>
            <ul className='mobile-nav__list'>
              <li className='mobile-nav__item mobile-nav__item--gray'>
                <a
                  href='#!'
                  className='mobile-nav__link mobile-nav__link--gray'
                >
                  Cart
                  <button className='nav__btn nav__btn--bag'>
                    <img
                      src={bag}
                      alt='bag'
                      loading='lazy'
                      className='mobile-nav-bag'
                    />
                    <span className='nav__btn-count nav__btn-count--white'>
                      2
                    </span>
                  </button>
                </a>
              </li>
              <li className='mobile-nav__item mobile-nav__item--gray'>
                <a
                  href='#!'
                  className='mobile-nav__link mobile-nav__link--gray'
                >
                  Wishlist
                  <button className='nav__btn nav__btn--bag'>
                    <img
                      src={heart}
                      alt='bag'
                      loading='lazy'
                      className='mobile-nav-bag'
                    />
                    <span className='nav__btn-count nav__btn-count--white'>
                      2
                    </span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div className='mobile-nav__sign-in'>
            <a href='#!' className='btn btn--wide'>
              Sign in
            </a>
          </div>
          <div className='mobile-nav__socials'>
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
      <div className='mobile-nav-fade'></div>
    </>
  );
};

export default MobileNav;
