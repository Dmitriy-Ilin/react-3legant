import React from 'react';
import star from 'src/assets/star.svg';
import { Card } from 'src/types/cardType';

const CardItem: React.FC<Card> = (cardItem) => {
  const avg = Math.floor(
    cardItem.rating.reduce((acc: number, sum: number) => acc + sum, 0) /
      cardItem.rating.length,
  );
  const [isFavActive, setIsFavActive] = React.useState(false);

  return (
    <>
      <article className='card'>
        <div className='card__picture'>
          <img src={cardItem.img} alt='headphones' loading='lazy' />
          <div className='card__new'>New</div>
          <div className='card__fav'>
            <button
              className={`btn-fav ${isFavActive ? 'btn-fav--active' : ''} `}
              onClick={() => setIsFavActive(!isFavActive)}
            >
              <svg
                className='btn-fav__svg'
                width='19.000000'
                height='15.000000'
                viewBox='0 0 19 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
              >
                <defs />
                <path
                  id='Shape'
                  d='M9.57 2.76C9.25 3.07 8.74 3.07 8.42 2.76L7.84 2.21C7.17 1.56 6.25 1.16 5.25 1.16C3.17 1.16 1.49 2.84 1.49 4.91C1.49 6.9 2.57 8.54 4.12 9.88C5.67 11.23 7.53 12.13 8.64 12.58C8.87 12.68 9.12 12.68 9.35 12.58C10.46 12.13 12.32 11.23 13.87 9.88C15.42 8.54 16.5 6.9 16.5 4.91C16.5 2.84 14.82 1.16 12.75 1.16C11.74 1.16 10.82 1.56 10.15 2.21L9.57 2.76ZM9 1C8.02 0.07 6.7 -0.5 5.25 -0.5C2.25 -0.5 -0.17 1.92 -0.17 4.91C-0.17 10.22 5.64 13.15 8.01 14.12C8.64 14.39 9.35 14.39 9.98 14.12C12.35 13.15 18.16 10.22 18.16 4.91C18.16 1.92 15.74 -0.5 12.75 -0.5C11.29 -0.5 9.97 0.07 9 1Z'
                  fillOpacity='1.000000'
                  fillRule='evenodd'
                />
              </svg>
            </button>
          </div>
          <div className='card__btn'>
            <button className='btn btn--small btn--wide'>Add to cart</button>
          </div>
        </div>
        <div className='card__desc'>
          <div className='card__rating'>
            {cardItem.rating.map((_, index) => {
              if (index < avg) {
                return (
                  <img key={index} src={star} alt='rating' loading='lazy' />
                );
              }
            })}
          </div>
          <div className='card__title'>{cardItem.description}</div>
          <div className='card__price'>${cardItem.price}</div>
        </div>
        <a href='#!' className='card__link'></a>
      </article>
    </>
  );
};

export default CardItem;
