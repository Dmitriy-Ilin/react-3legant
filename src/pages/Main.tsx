import { Suspense, lazy } from 'react';
import Hero from 'src/components/Hero';
import Navigation from 'src/components/Navigation';
import Tagline from 'src/components/Tagline';
import Loading from 'src/components/Loading';
const Logos = lazy(() => import('src/components/Logos'));
const Arrivals = lazy(() => import('src/components/Arrivals'));
const Collection = lazy(() => import('src/components/Collection'));
const BestSeller = lazy(() => import('src/components/BestSeller')); 
const Promotion = lazy(() => import('src/components/Promotion'));

const Main = () => {
  return (
    <>
      <Tagline />
      <Navigation />
      <Hero />
      {/* <Suspense fallback={<Loading />}>
        <Logos />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <Arrivals />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Collection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <BestSeller />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Promotion />
      </Suspense>
    </>
  );
};

export default Main;
