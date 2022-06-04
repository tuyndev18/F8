import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AuthPage() {
  return (
    <main className='px-5 h-screen w-full bg-[url(https://accounts.fullstack.edu.vn/static/media/f8_bg_auth_1920.b517075e98f3051de678.png)] bg-cover flex justify-center items-center'>
      <div className='relative max-w-[640px] w-full h-[600px] rounded-xl bg-white py-12 px-4 sm:px-6 flex flex-col items-center'>
        <Link to="/">
          <img className='w-10 h-10 mb-5' src='https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png' alt='' />
        </Link>
        <Outlet />
      </div>
    </main>
  );
}
