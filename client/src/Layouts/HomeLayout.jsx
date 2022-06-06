import { AuthApi } from 'Apis/AuthApi';
import Footer from 'Components/Footer';
import Header from 'Components/Header';
import NavBar from 'Components/NavBar';
import { useQueryClient } from 'react-query';

export default function HomeLayout({ children }) {
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
          <section className='w-full lg:w-[calc(100%-100px)]'>
            {children}
          </section>
        </main>
        <Footer />
      </>
    </>
  );
}
