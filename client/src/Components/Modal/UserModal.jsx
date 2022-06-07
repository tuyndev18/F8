import { AuthApi } from 'Apis/AuthApi';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './index';

export default function UserModal() {
  const [isModal, setModal] = useState(false);
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await AuthApi.logout();
      localStorage.removeItem('current_user');
      localStorage.removeItem('access_token');
      client.removeQueries('current_user');
      toast.success("Đăng xuất thành công")
      setTimeout(() => {
        navigate('/auth/login');
      }, 1000);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className='relative ww-auto h-auto'>
        <img
          src={current_user?.avatar}
          onClick={() => {
            setModal(true);
          }}
          className='w-9 h-9 rounded-full hidden lg:block cursor-pointer'
          alt=''
        />
        <div
          className={clsx(
            'p-4 absolute bottom-0 right-0 translate-y-[calc(100%+8px)] z-[100] transition-all duration-700 bg-white w-72 shadow-2xl border-[1px] rounded-lg',
            {
              hidden: !isModal,
              block: isModal,
            },
          )}
        >
          <div className='flex items-center gap-3 pb-3 border-b-[1px]'>
            <img src={current_user?.avatar} className='h-14 w-14 rounded-full' alt='' />
            <div>
              <h2 className='font-semibold'>{current_user?.fullName}</h2>
              <h3 className='text-sm font-light'>@{current_user?.fullName}</h3>
            </div>
          </div>
          <Link to={`/@${current_user.userName}`}>
            <h3 className='cursor-pointer text-[14px] p-2 text-gray-700'>Trang cá nhân</h3>
          </Link>
          <Link to={`/new-post`}>
            <h3 className='cursor-pointer text-[14px] p-2 text-gray-700'>Viết Blog</h3>
          </Link>
          <h3 className='cursor-pointer text-[14px] p-2 text-gray-700' onClick={logOut}>Đăng xuất</h3>
        </div>
      </div>
      <Modal isModal={isModal} setModal={setModal} isBackground></Modal>
    </>
  );
}
