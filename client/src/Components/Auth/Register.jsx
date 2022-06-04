import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      <h3 className='text-2xl md:text-3xl font-bold mb-10'>Đăng ký tài khoản F8</h3>
      {!isMenu && (
        <>
          <div
            onClick={() => {
              setMenu(true);
            }}
            className='border-2 rounded-full cursor-pointer py-3 px-6 flex items-center  justify-center gap-3 max-w-[320px] w-full mb-4'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clipRule='evenodd'
              />
            </svg>
            <p className='text-sm font-semibold'>Sử dụng email của bạn</p>
          </div>
          <div className='border-2 rounded-full py-3 px-6 flex items-center justify-center gap-3  max-w-[320px] w-full mb-4'>
            <img src='https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg' alt='' />
            <p className='text-sm font-semibold '>Tiếp tục với google</p>
          </div>
          <div className='border-2 rounded-full py-3 px-6 flex items-center justify-center gap-3  max-w-[320px] w-full mb-4'>
            <img src='https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg' alt='' />
            <p className='text-sm font-semibold '>Tiếp tục với facbook</p>
          </div>
          <div className='border-2 rounded-full py-3 px-6 flex items-center justify-center gap-3   max-w-[320px] w-full mb-4'>
            <img src='https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg' alt='' />
            <p className='text-sm font-semibold '>Tiếp tục với github</p>
          </div>
        </>
      )}
      {isMenu && (
        <>
          <input
            type='text'
            className='w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
            placeholder='Nhập họ tên'
          />
          <input
            type='text'
            className='w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
            placeholder='Nhập vào email'
          />
          <input
            type='text'
            className='w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
            placeholder='Nhập vào mật khẩu'
          />
          <input
            type='text'
            className='w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
            placeholder='Xác nhận mật khẩu'
          />
          <button className='w-8/12 text-center py-2 bg-gradient-to-tr from-[#2cccff] to-[#22dfbf] text-white rounded-md font-semibold '>
            Đăng ký
          </button>
          <div
            className='top-9 left-10 absolute cursor-pointer'
            onClick={() => {
              setMenu(false);
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </>
      )}
      <p className='pt-5 font-medium'>
        Bạn đã có tài khoản?
        <Link className='pl-3 text-orange-400 font-bold' to='/auth/login'>
          Đăng Nhập
        </Link>
      </p>
    </>
  );
}
