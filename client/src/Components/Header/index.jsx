import clsx from 'clsx';
import Modal from 'Components/Modal';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 bg-white w-full z-40'>
      <Modal isModal={isMenu} setModal={setMenu}>
        <div
          className={clsx(
            'fixed top-0 left-0 h-screen w-10/12 bg-white shadow-xl z-50 transition-transform duration-500',
            {
              'translate-x-0': isMenu,
              'translate-x-[-100%]': !isMenu,
            },
          )}
        ></div>
      </Modal>

      <header className='px-5 lg:px-7 py-4 flex justify-between items-center border-b-[1px]'>
        <section
          className='lg:hidden'
          onClick={() => {
            setMenu(true);
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </section>

        <section className='gap-3 items-center hidden lg:flex'>
          <Link to='/'>
            <img
              className='h-9 w-9'
              src='https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png'
              alt=''
            />
          </Link>
          {!!location.pathname.split('/')[1] ? (
            <div className='flex items-center text-gray-500 hover:animate-pulse'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
              </svg>
              <p
                className='font-semibold text-sm cursor-pointer'
                onClick={() => {
                  navigate(-1);
                }}
              >
                Quay Lại
              </p>
            </div>
          ) : (
            <h3 className='font-bold text-sm'>Học lập trình để đi làm</h3>
          )}
        </section>

        <section className='max-w-[420px] w-full hidden md:flex gap-2 items-center border-2 rounded-full h-9 focus-within:border-black'>
          <div className='pl-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              color='gray'
              className='h-5 w-5'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <input
            className='w-full outline-0 border-0 rounded-r-[inherit] text-sm'
            type='text'
            placeholder='Tìm kiếm khóa học, bài viết, video, ...'
          />
        </section>
        <section className='flex gap-5 items-center'>
          <div className='md:hidden'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <Link to='/auth/login'>
            <button className='px-4 py-2 rounded-full bg-orange-500 text-white'>Đăng nhập</button>
          </Link>
        </section>
      </header>
    </div>
  );
}
