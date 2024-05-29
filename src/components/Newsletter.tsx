import email from 'src/assets/email.svg';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <div className='newsletter__content'>
        <h2 className='newsletter__title headline-4'>Join Our Newsletter</h2>
        <p className='newsletter__desc'>Sign up for deals, new products and promotions</p>
        <form 
          action='' 
          className='newsletter-form'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <img src={email} alt='email' loading='lazy'/>
          <input className='newsletter-from__input' type='email' placeholder='Email address '/>
          <button type='submit' className='newsletter-form__btn'>Signup</button>
        </form>    
      </div>
    </section>
  );
};

export default Newsletter;