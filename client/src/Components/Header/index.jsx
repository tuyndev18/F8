import { AuthApi } from 'Apis/AuthApi';
import clsx from 'clsx';
import Modal from 'Components/Modal';
import NotificationModal from 'Components/Modal/NotificationModal';
import UserModal from 'Components/Modal/UserModal';
import { navLink } from 'Constants/NavLink';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Header() {
  const [isMenu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');

  const logOut = async () => {
    try {
      await AuthApi.logout();
      localStorage.removeItem('current_user');
      localStorage.removeItem('access_token');
      client.removeQueries('current_user');
      setTimeout(() => {
        navigate('/auth/login');
      }, 1000);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className='fixed top-0 bg-white w-full z-40 '>
      <Modal isModal={isMenu} setModal={setMenu}>
        <div
          className={clsx(
            'fixed top-0 left-0 h-screen w-10/12 bg-white shadow-xl z-50 transition-transform duration-500 pl-4 pt-12',
            {
              'translate-x-0': isMenu,
              'translate-x-[-100%]': !isMenu,
            },
          )}
        >
          <div>
            {!current_user ? (
              <>
                <NavLink
                  to='/auth/login'
                  className={({ isActive }) =>
                    isActive
                      ? 'py-4 my-1 px-4 flex gap-4 w-auto bg-[#e8ebed] rounded-l-lg items-center'
                      : 'py-4 my-1 px-4 flex gap-4 w-auto items-center'
                  }
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <p className='capitalize text-xs font-semibold'>Đăng nhập</p>
                </NavLink>
              </>
            ) : (
              <>
                <img src={current_user?.avatar} alt='' className='w-24 h-24 rounded-full' />
                <h1 className='py-3 text-lg font-semibold capitalize'>{current_user?.fullName}</h1>
                <NavLink
                  to='/auth/login'
                  className={({ isActive }) =>
                    isActive
                      ? 'py-4 my-1 px-4 flex gap-4 w-auto bg-[#e8ebed] rounded-l-lg items-center'
                      : 'py-4 my-1 px-4 flex gap-4 w-auto items-center'
                  }
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                    <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
                  </svg>
                  <p className='capitalize text-xs font-semibold'>Khóa học của tôi</p>
                </NavLink>
              </>
            )}
          </div>
          <div className='border-y-[1px] py-3'>
            {navLink.map((val, index) => (
              <NavLink
                to={val.path}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? 'py-4 my-1 px-4 flex gap-4 w-auto items-center bg-[#e8ebed] rounded-l-lg'
                    : 'py-4 my-1 px-4 flex gap-4 items-center w-auto'
                }
              >
                {val.icon}
                <p className='capitalize text-xs font-semibold'>{val.title}</p>
              </NavLink>
            ))}
          </div>
          <div>
            {current_user && (
              <button className='flex gap-3 items-center py-3' onClick={logOut}>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                    clipRule='evenodd'
                  />
                </svg>
                <h2 className='text-xs font-semibold'>Đăng xuất</h2>
              </button>
            )}
          </div>
        </div>
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
          {!current_user ? (
            <Link to='/auth/login'>
              <button className='px-4 py-2 rounded-full bg-orange-500 text-white'>Đăng nhập</button>
            </Link>
          ) : (
            <>
              <div className='flex gap-6 items-center'>
                <h2 className='text-gray-600 text-sm font-semibold hidden lg:block'>Khóa học của tôi</h2>
                <NotificationModal />
                <UserModal />
              </div>
            </>
          )}
        </section>
      </header>
    </div>
  );
}
