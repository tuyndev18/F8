import { AxiosConfig } from 'Apis/AxiosConfig';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  const [isMenu, setMenu] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <h3 className='text-2xl md:text-3xl font-bold mb-10'>Đăng nhập vào F8</h3>
      {!isMenu && (
        <>
          <div
            onClick={() => {
              setMenu(true);
            }}
            className='border-2 rounded-full py-3 px-6 flex items-center cursor-pointer justify-center gap-3 max-w-[320px] w-full mb-4'
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
          <form
            onSubmit={handleSubmit(data => console.log(data))}
            className='w-full flex flex-col items-center'
          >
            <input
              type='text'
              className='w-full sm:w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
              placeholder='Nhập vào email của bạn'
              {...register('email')}
            />
            <input
              type='text'
              className='w-full sm:w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
              placeholder='Nhập vào mật khẩu'
              {...register('password')}
            />
            <button
              className='w-full sm:w-8/12 text-center py-2 bg-gradient-to-tr from-[#2cccff] to-[#22dfbf] text-white rounded-md font-semibold'
              type='submit'
            >
              Đăng nhập
            </button>
          </form>
          <button onClick={async () => {
           const  data = await AxiosConfig.post("/posts/all")
           console.log(data)
          }}>auth</button>
          <div
            className='top-9 left-10 absolute'
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
        Bạn chưa có tài khoản?
        <Link className='pl-3 text-orange-400 font-bold' to='/auth/register'>
          Đăng Ký
        </Link>
      </p>
    </>
  );
}
