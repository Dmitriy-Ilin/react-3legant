

const Promotion = () => {
  return (
    <section className='promotion'>
      <div className='container'>
        <div className='promotion__content'>
          <div className='promotion__desc'>
            <p className='promotion__tagline'>PROMOTION</p>
            <h2 className='promotion__title'>Hurry up! 40% OFF</h2>
            <div className='promotion__text'>
              <p>Thousands of high tech are waiting for you</p>
            </div>
          </div>
          <div className='promotion__timer'>
            <p className='promotion__expires'>Offer expires in:</p>
            <div className='timer'>time</div>
          </div>
          <div className='promotion__btn'>
            <a href=''>Shop now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
