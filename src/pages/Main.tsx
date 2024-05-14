import { Suspense, lazy } from 'react';
import Hero from 'src/components/Hero';
import Navigation from 'src/components/Navigation';
import Tagline from 'src/components/Tagline';
import Loading from 'src/components/Loading';
const Logos = lazy(() => import('src/components/Logos'));
const Arrivals = lazy(() => import('src/components/Arrivals'));
 
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
    </>
  );
};

export default Main;
