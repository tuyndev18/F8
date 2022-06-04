import React from 'react';

export default function Trending({ data }) {
  return (
    <div className='snap-center snap-always'>
      <div className='relative'>
        <div className='absolute bottom-3 flex justify-between items-center w-full px-3'>
          <div className=' w-9 h-9  flex justify-center items-center rounded-xl bg-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
          </div>
          <p className='px-2 py-1 rounded-full border-2 border-white text-white text-xs'>{data.duration}</p>
        </div>
        <img className='rounded-xl' src={data.image} alt='' />
      </div>
      <h2 className='font-semibold py-2 text-sm truncate'>{data.title}</h2>
      <div className='flex gap-2 xl:gap-4'>
        <div className='flex gap-1 items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
            <path
              fillRule='evenodd'
              d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-sm text-[#757575]'>{data.yt_view_count}</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
            <path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' />
          </svg>
          <p className='text-sm text-[#757575]'>{data.yt_like_count}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
              clipRule='evenodd'
            />
          </svg>
          <p className='text-sm text-[#757575]'>{data.yt_comment_count}</p>
        </div>
      </div>
    </div>
  );
}
