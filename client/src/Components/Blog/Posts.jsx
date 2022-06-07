import React from 'react';
import { Link } from 'react-router-dom';
import DayJs from 'Utils/DayJs';

export default function Posts({ posts }) {
  return (
    <Link to={`/blog/${posts.slug}`}>
      <div className='rounded-xl border-2 p-4 mb-4'>
        <div className='flex justify-between mb-4'>
          <div className='flex items-center gap-2'>
            <img className='w-8 h-8 object-cover rounded-full' src={posts.userId?.avatar} alt='' />
            <h3 className='text-sm font-medium'>{posts.userId?.fullName}</h3>
          </div>
          <div className='flex gap-3'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
            </svg>
          </div>
        </div>
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
      </div>
    </Link>
  );
}
