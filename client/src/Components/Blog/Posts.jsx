import { UserApi } from 'Apis/UserApi';
import clsx from 'clsx';
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import DayJs from 'Utils/DayJs';

export default function Posts({ posts }) {
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');
  const [isSave, setSave] = useState(posts.saver.includes(current_user?._id));
  const handleBookMark = async () => {
    if (isSave) {
      await UserApi.unsavePost(posts?._id);
      setSave(false);
    } else {
      await UserApi.savePost(posts?._id);
      setSave(true);
    }
  };
  return (
    <div className='rounded-xl border-2 p-4 mb-4'>
      <div className='flex justify-between mb-4'>
        <div className='flex items-center gap-2'>
          <img className='w-8 h-8 object-cover rounded-full' src={posts.userId?.avatar} alt='' />
          <h3 className='text-sm font-medium capitalize'>{posts.userId?.fullName}</h3>
        </div>
        <div className='flex gap-3'>
          <svg
            onClick={handleBookMark}
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 cursor-pointer'
            fill={clsx({ none: !isSave }, { orange: isSave })}
            viewBox='0 0 24 24'
            stroke={clsx({ currentColor: !isSave }, { orange: isSave })}
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' />
          </svg>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
          </svg>
        </div>
      </div>
      <Link to={`/blog/${posts.slug}`}>
        <div className='flex justify-between gap-4 items-center flex-wrap sm:flex-nowrap'>
          <div className='order-2 sm:order-1'>
            <h1 className='text-xl font-bold mb-3'>{posts?.heading}</h1>
            <p className='text-sm text-slate-600 mb-3'>{posts?.descriptions}</p>
            <span className='text-sm mr-3'>{DayJs.from(posts?.createdAt)}</span>{' '}
            <span className='text-sm'>2 phút đọc</span>
          </div>
          <div className='order-1 sm:order-2 w-full sm:w-52 flex-shrink-0'>
            <img className='object-cover rounded-xl w-full aspect-video' src={posts?.banner} alt='' />
          </div>
        </div>
      </Link>
    </div>
  );
}
