import { NotificationApi } from 'Apis/NotificationApi';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import Modal from '.';
import DayJs from 'Utils/DayJs';
import { useQueryClient, useQuery } from 'react-query';

export default function NotificationModal() {
  const { data:listData } = useQuery('notification_all', NotificationApi.getAll);
  const [isModal, setModal] = useState(false);
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');

  return (
    <>
      <div className='relative ww-auto h-auto'>
        <div
          onClick={() => {
            setModal(true);
          }}
          className='cursor-pointer relative'
        >
          <div className='rounded-full absolute top-[-10px] right-[-8px] w-6 h-6 text-xs text-center leading-6 bg-red-500 text-white font-bold'>
            {listData?.length > 99 ? '99+' : listData?.length}
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
          </svg>
        </div>
        <div
          className={clsx(
            'p-3 absolute bottom-0 right-0 translate-y-[calc(100%+8px)] z-[100] transition-all duration-700 bg-white w-80 h-[550px] shadow-2xl border-[1px] rounded-lg',
            {
              hidden: !isModal,
              block: isModal,
            },
          )}
        >
          <div className='flex h-8 justify-between items-center'>
            <h1 className='text-sm font-semibold'>Thông báo</h1>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
            </svg>
          </div>
          <div className='h-[calc(100%-30px)] pt-3 overflow-y-auto'>
            {listData?.map((notification, index) => (
              <div className='flex items-center gap-3 mb-3 tuyn-notification' key={index}>
                <img src={notification?.cover} className='h-10 w-10 rounded-full flex-shrink-0' alt='' />
                <div>
                  <div
                    className='text-[13px]'
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notification?.content) }}
                  ></div>
                  <div className='flex justify-between items-center pt-1'>
                    <span className='text-[14px] font-medium text-orange-500'>
                      {DayJs.from(notification.createdAt)}
                    </span>
                    {!current_user.isWatched && <div className='w-3 h-3 mr-5 rounded-full bg-blue-500'></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isModal={isModal} setModal={setModal} isBackground />
    </>
  );
}
