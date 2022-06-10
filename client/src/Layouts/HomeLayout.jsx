import Footer from 'Components/Footer';
import Header from 'Components/Header';
import NavBar from 'Components/NavBar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomeLayout({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <>
      <>
        <Header />
        <main className='px-4 lg:pr-8 lg:pl-4 mt-24 flex gap-7'>
          <section className='w-[72px] relative z-10 hidden lg:block'>
            <div className='sticky top-24'>
              <NavBar />
            </div>
          </section>
          <section className='w-full lg:w-[calc(100%-100px)] min-h-screen'>{children}</section>
        </main>
        <Footer />
      </>
    </>
  );
}
