import { Suspense, lazy, useEffect, useState } from 'react';
import Navigation from 'src/components/Navigation';
import Tagline from 'src/components/Tagline';
import Loading from 'src/components/Loading';
import Values from 'src/components/Values';
const Hero = lazy(() => import('src/components/Hero'));
const Logos = lazy(() => import('src/components/Logos'));
const Arrivals = lazy(() => import('src/components/Arrivals'));
const Collection = lazy(() => import('src/components/Collection'));
const BestSeller = lazy(() => import('src/components/BestSeller'));
const Promotion = lazy(() => import('src/components/Promotion'));
const Feed = lazy(() => import('src/components/Feed'));
const Newsletter = lazy(() => import('src/components/Newsletter'));
const Footer = lazy(() => import('src/components/Footer'));
const MobileNav = lazy(() => import('src/components/MobileNav'));

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = '3legant';
  }, []);

  return (
    <div
      className={`main ${isMenuOpen && 'main--mobile'}`}
      onClick={() => setIsMenuOpen(false)}
    >
      <Tagline />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <Suspense fallback={<Loading />}>
          <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Suspense>
      )}
      <Suspense fallback={<Loading />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Logos />
      </Suspense>
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
      <Suspense fallback={<Loading />}>
        <Values />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Feed />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Newsletter />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Main;
