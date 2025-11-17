import {
  useEffect
} from 'react';
import { Outlet, useLocation } from 'react-router';

import Navigation from './Navigation';
import Footer from './Footer';

function Layout() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    let scrollTo = 0;
    if (hash && document.querySelector(hash)) {
      const hashTarget = document.querySelector(hash) as HTMLElement
      if (hashTarget) {
        scrollTo = hashTarget.offsetTop
      }
    }
    window.scrollTo({ top: scrollTo, left: 0, behavior: "smooth" }); // router fix on navigation
  }, [pathname, hash])

  return (
    <>
      <main>
        <Navigation />
        <Outlet /> {/* This is where nested routes will render */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;