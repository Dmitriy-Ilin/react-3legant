import arrowRight from 'src/assets/arrow-right-black.svg';

const Collection = () => {
  return (
    <section className='collection'>
      <div className='container'>
        <div className='collection__title'>
          <h2 className='headline-4'>Shop Collection</h2>
        </div>
        <div className='collection__grid'>
          <div className='plate plate--tall'>
            <div className='plate__content'>
              <h3 className='plate__title'>Headband</h3>
              <a href='#!' className='plate__link'>Collection <img src={arrowRight} alt='arrow-right'/></a>
            </div>   
          </div>
          <div className='plate'>
            <div className='plate__content'>
              <h3 className='plate__title'>Earbuds</h3>
              <a href='#!' className='plate__link'>Collection <img src={arrowRight} alt='arrow-right'/></a>
            </div>
          </div>
          <div className='plate'>
            <div className='plate__content'>
              <h3 className='plate__title'>Accessories</h3>
              <a href='#!' className='plate__link'>Collection <img src={arrowRight} alt='arrow-right' loading='lazy'/></a>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
