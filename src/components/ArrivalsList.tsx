// import { Suspense, lazy } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import mock from 'src/mockData/data.json';
// import Loading from 'src/components/Loading';
// import { Pagination } from 'swiper/modules';
// const ArrivalsItem = lazy(() => import('src/components/ArrivalsItem'));

// const ArrivalsList = () => {

//   return (
//     <>
//       {/* <div className='arrivals__slider'>
//         <Swiper
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 16
//             },
//             768: {
//               slidesPerView: 'auto',
//               spaceBetween: 20
//             },
//             1200: {
//               slidesPerView: 'auto',
//               spaceBetween: 24
//             }
//           }}
//           modules={[Pagination]}
//           loop={true}
//           autoplay
//         >
//           {mock.data.map((item) => 
//             item.id <= 5 && 
//               <SwiperSlide key={item.id} style={{maxWidth: 262}}>
//                 <Suspense fallback={<Loading />}>
//                   <ArrivalsItem {...item}/>
//                 </Suspense> 
//               </SwiperSlide>    
//           )}
//         </Swiper>
//       </div> */}
//     </>
//   );
// };

// export default ArrivalsList;
