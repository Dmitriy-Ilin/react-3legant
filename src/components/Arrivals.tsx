import { Suspense, lazy } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import mock from 'src/mockData/data.json';
import Loading from 'src/components/Loading';
import { Pagination } from 'swiper/modules';
const ArrivalsItem = lazy(() => import('src/components/ArrivalsItem'));

const Arrivals = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<div class="' + className + '">' + '</div>';
    },
  };

  return (
    <section className='arrivals'>
      <div className='container'>
        <div className='arrivals__row'>
          <div className='arrivals__title'>
            <h2 className='headline-4'>New Arrivals</h2>
          </div>
          <div className='arrivals__dots'>
            <div className='dots'>
              {/* <div className='dot dot--active'></div>
              <div className='dot'></div>
              <div className='dot'></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='container-right'>
        {/* <ArrivalsList /> */}
        <div className='arrivals__slider'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={24}
            pagination={{
              el: '.dots',
              type: 'bullets',
              bulletClass: 'swiper-custom-bullet',
              bulletActiveClass: 'swiper-custom-bullet-active',
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
          >
            {mock.data.map((item) => 
              // item.id <= 5 && 
              <SwiperSlide key={item.id} style={{maxWidth: 262}}>
                <Suspense fallback={<Loading />}>
                  <ArrivalsItem {...item}/>
                </Suspense> 
              </SwiperSlide>    
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
