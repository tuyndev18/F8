import { UserApi } from 'Apis/UserApi';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import DayJs from 'Utils/DayJs';

export default function BookMark() {
  const { data: bookMark } = useQuery('book_mark', UserApi.postSaved);
  return (
    <>
      <h2 className='text-2xl font-extrabold pb-8'>Bài viết đã lưu</h2>
      <div className='container'>
        <div className='border-b-[1px] mb-4'>
          <h3 className='font-bold py-4 px-2 inline-block border-b-2 border-b-black'>Bài viết ({bookMark?.length})</h3>
        </div>
        {bookMark?.map((posts, index) => (
          <div className='p-4 border-[1px] rounded-md mb-3' key={index}>
            <div className='flex justify-between items-center mb-2'>
              <Link to={`/blog/${posts?.postId.slug}`}>
                <h2 className='text-sm font-bold truncate md:text-lg cursor-pointer'>{posts?.postId?.title}</h2>
              </Link>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
              </svg>
            </div>
            <span className='text-orange-400 text-sm mr-3'>Đã lưu {DayJs.from(posts.createdAt)}</span>
            <span className='text-gray-500 text-sm'>
              Tác giả: <span className='text-black capitalize'>{posts.postId?.userId?.fullName}</span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
