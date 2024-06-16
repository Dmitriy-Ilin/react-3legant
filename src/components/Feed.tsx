import feed1 from 'src/assets/news1.jpeg';
import feed2 from 'src/assets/news2.jpeg';
import feed3 from 'src/assets/news3.jpeg';
import feed4 from 'src/assets/news4.jpeg';

const Feed = () => {
  return (
    <section className='feed'>
      <div className='container'>
        <p className='feed__subtitle'>newsfeed</p>
        <h3 className='feed__title'>Instagram</h3>
        <p className='feed__undertitle'>
          Follow us on social media for more discount & promotions
        </p>
        <a className='feed__link' href='!#'>
          @3legant_official
        </a>
        <div className='feed__row'>
          <img
            className='feed__img'
            src={feed1}
            alt='feed-img'
            loading='lazy'
          />
          <img
            className='feed__img'
            src={feed2}
            alt='feed-img'
            loading='lazy'
          />
          <img
            className='feed__img'
            src={feed3}
            alt='feed-img'
            loading='lazy'
          />
          <img
            className='feed__img'
            src={feed4}
            alt='feed-img'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default Feed;
