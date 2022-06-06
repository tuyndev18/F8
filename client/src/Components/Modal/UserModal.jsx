import clsx from 'clsx';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import Modal from './index';

export default function UserModal() {
  const [isModal, setModal] = useState(false);
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');
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
        </div>
      </div>
      <Modal isModal={isModal} setModal={setModal} isBackground></Modal>
    </>
  );
}
