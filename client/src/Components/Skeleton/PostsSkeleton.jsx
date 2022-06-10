import Posts from 'Components/Blog/Posts';
import React from 'react';

export default function PostsSkeleton() {
  return (
    <>
      {Array.from(new Array(3)).map((val, index) => (
        <div className='rounded-xl border-2 p-4 mb-4' key={index}>
          <div className='flex justify-between mb-4'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 object-cover rounded-full bg-gray-300'></div>
              <h3 className='text-sm font-medium capitalize px-12 py-2 bg-gray-300'></h3>
            </div>
            <div className='flex gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                />
              </svg>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
              </svg>
            </div>
          </div>
          <div className='flex justify-between gap-4 items-center flex-wrap sm:flex-nowrap'>
            <div className='order-2 sm:order-1'>
              <h1 className='text-xl font-bold mb-3 px-20 py-2 bg-gray-300'></h1>
              <p className='text-sm text-slate-600 mb-3 px-20 py-2 bg-gray-300'></p>
              <span className='text-sm mr-3 px-6  bg-gray-300'></span>
              <span className='text-sm px-6  bg-gray-300'></span>
            </div>
            <div className='order-1 sm:order-2 w-full sm:w-52 flex-shrink-0 bg-gray-300 aspect-video'></div>
          </div>
        </div>
      ))}
    </>
  );
}
