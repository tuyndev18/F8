import { PostApi } from 'Apis/PostApi';
import clsx from 'clsx';
import Modal from 'Components/Modal';
import React, { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

export default function ActionPosts({ posts }) {
  const [isModal, setModal] = useState(false);
  const [isLiked, setLiked] = useState();
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');
  const totalLike = useRef(0);

  useEffect(() => {
    setLiked(posts?.likes.includes(current_user?._id));
    totalLike.current = posts?.likes.length;
  }, [posts]);

  const handleLike = async () => {
    if (isLiked) {
      await PostApi.unlikePosts(posts._id);
      totalLike.current = totalLike.current - 1;
      setLiked(false);
    } else {
      await PostApi.likePosts(posts._id);
      totalLike.current = totalLike.current + 1;
      setLiked(true);
    }
  };

  return (
    <>
      <div className='sticky top-[70px]'>
        <div className='pb-3 border-b-[1px]'>
          <h1 className='font-semibold pt-5'>Phạm Thành Long</h1>
          <p className='text-sm text-gray-500'>đây là mô tả nhé</p>
        </div>
        <div className='fixed md:static bottom-0 left-0 bg-white h-12 w-full flex items-center gap-10 sm:gap-5 pl-7 md:pl-2'>
          <div className='flex gap-2 cursor-pointer' onClick={handleLike}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill={clsx({ none: !isLiked }, { red: isLiked })}
              viewBox='0 0 24 24'
              stroke={clsx({ currentColor: !isLiked }, { red: isLiked })}
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            <span>{totalLike.current}</span>
          </div>
          <div
            className='flex gap-2 cursor-pointer'
            onClick={() => {
              setModal(true);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
              />
            </svg>
            <span>0</span>
          </div>
        </div>
      </div>
      <Modal isModal={isModal} setModal={setModal}>
        <div
          className={clsx(
            'text-center bg-white fixed w-1/3 h-screen top-0 right-0 z-50 transition-transform duration-700',
            { 'translate-x-0': isModal, 'translate-x-[100%]': !isModal },
          )}
        >
        
        </div>
      </Modal>
    </>
  );
}
