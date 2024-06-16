import { Suspense, lazy } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import mock from 'src/mockData/data.json';
import Loading from 'src/components/Loading';
import { Pagination } from 'swiper/modules';
const CardItem = lazy(() => import('src/components/CardItem'));

const Arrivals = () => {
  // const [cardItem, setCardItem] = useState<Card[]>([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch('http://localhost:3000/data');
  //     const json = await data.json();
  //     setCardItem(json);
  //   };

  //   getData();
  // }, []);

  return (
    <section className='arrivals'>
      <div className='container'>
        <div className='arrivals__row'>
          <div className='arrivals__title'>
            <h2 className='headline-4'>New Arrivals</h2>
          </div>
          <div className='arrivals__dots'>
            <div className='dots'></div>
          </div>
        </div>
      </div>
      <div className='container-right'>
        <div className='arrivals__slider'>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            pagination={{
              el: '.dots',
              type: 'bullets',
              bulletClass: 'swiper-custom-bullet',
              bulletActiveClass: 'swiper-custom-bullet-active',
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            breakpoints={{
              820: {
                spaceBetween: 24,
              },
            }}
          >
            {mock.data.map(
              (item) =>
                item.id <= 6 && (
                  <SwiperSlide key={item.id}>
                    <Suspense fallback={<Loading />}>
                      <CardItem {...item} />
                    </Suspense>
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
