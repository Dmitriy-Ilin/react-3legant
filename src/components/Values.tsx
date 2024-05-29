import delivery from 'src/assets/delivery.svg';
import cashback from 'src/assets/cashback.png';
import lock from 'src/assets/lock.svg';
import phone from 'src/assets/phone.svg';

const Values = () => {
  return (
    <section className='values'>
      <div className='container'>
        <div className='values__row'>
          <div className='value'>
            <img className='value__img' src={delivery} alt='delivery' loading='lazy'/>
            <h4 className='value__title'>Free Shipping</h4>   
            <p className='value__desc'>Order above $200</p>
          </div>
          <div className='value'>
            <img className='value__img' src={cashback} alt='cashback' loading='lazy'/>
            <h4 className='value__title'>Money-back</h4>   
            <p className='value__desc'>30 days guarantee</p>
          </div>
          <div className='value'>
            <img className='value__img' src={lock} alt='lock' loading='lazy'/>
            <h4 className='value__title'>Secure Payments</h4>   
            <p className='value__desc'>Secured by Stripe</p>
          </div>
          <div className='value'>
            <img className='value__img' src={phone} alt='phone' loading='lazy'/>
            <h4 className='value__title'>24/7 Support</h4>   
            <p className='value__desc'>Phone and Email support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;