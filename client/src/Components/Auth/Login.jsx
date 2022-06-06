import { AuthApi } from 'Apis/AuthApi';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  email: yup.string().email('Nhập vào dạng email').required('Không được để trống'),
  password: yup.string().required('Không được để trống'),
});
export default function Login() {
  const [isMenu, setMenu] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  
  const client = useQueryClient();  
  const navigate = useNavigate();

  const submitForm = async (data) => {
    try {
      const user = await AuthApi.login(data);
      client.setQueryData('current_user', user);
      localStorage.setItem('current_user', JSON.stringify(user));
      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      toast.error(error);
    }
  };

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
          <form onSubmit={handleSubmit(submitForm)} className='w-full flex flex-col items-center'>
            <input
              type='text'
              className='w-full sm:w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
              placeholder='Nhập vào email của bạn'
              {...register('email')}
            />
            <p className='sm:ml-[-35%] pb-2 text-sm text-right text-red-500 font-medium'>{errors.email?.message}</p>

            <input
              type='password'
              className='w-full sm:w-8/12 px-4 py-2 rounded-full bg-slate-200 mb-4 focus:outline-orange-400'
              placeholder='Nhập vào mật khẩu'
              {...register('password')}
            />
            <p className='sm:ml-[-35%] pb-2 text-sm text-right text-red-500 font-medium'>{errors.password?.message}</p>

            <button
              className='w-full sm:w-8/12 text-center py-2 bg-gradient-to-tr from-[#2cccff] to-[#22dfbf] text-white rounded-md font-semibold'
              type='submit'
            >
              Đăng nhập
            </button>
          </form>
          <div
            className='top-9 left-10 absolute cursor-pointer'
            onClick={() => {
              setMenu(false);
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-9 w-9' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
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
