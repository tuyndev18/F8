import { PostApi } from 'Apis/PostApi';
import clsx from 'clsx';
import Modal from 'Components/Modal';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

export default function ActionPosts() {
  const [isModal, setModal] = useState(false);
  const [Posts, setPosts] = useState([]);
  const { slug } = useParams();

  const { data } = useQuery(['posts', slug], async () => PostApi.getPostsBySlug(slug));
  const updateReactions = useMutation(PostApi.reactionPosts, {
    onSuccess: (data) => {
      setPosts(data);
    },
  });

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleReactions = () => {
    if (Posts?.isReactions) {
      updateReactions.mutate({ id: Posts?._id, body: { isReaction: false } });
      return;
    }
    updateReactions.mutate({ id: Posts?._id, body: { isReaction: true } });
  };

  return (
    <>
      <div className='sticky top-[70px]'>
        <div className='pb-3 border-b-[1px]'>
          <h1 className='font-semibold pt-5'>{Posts?.userId?.fullName}</h1>
          <p className='text-sm text-gray-500'>{Posts?.userId?.description}</p>
        </div>
        <div className='fixed  w-1/3 bottom-4 left-1/2 rounded-lg shadow-xl translate-x-[-50%] justify-evenly bg-white h-12 flex items-center md:static md:translate-x-0 md:shadow-none md:justify-start md:w-full sm:gap-5 md:pl-2'>
          <div className='flex gap-2 cursor-pointer' onClick={handleReactions}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill={clsx({ none: !Posts?.isReactions }, { red: Posts?.isReactions })}
              viewBox='0 0 24 24'
              stroke={clsx({ currentColor: !Posts?.isReactions }, { red: Posts?.isReactions })}
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              />
            </svg>
            <span>{Posts?.likes?.length}</span>
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
      {/* <Modal isModal={isModal} setModal={setModal}>
        <div
          className={clsx(
            'bg-white fixed w-[90%] h-[calc(100vh-150px)] top-10 md:w-2/3 lg:w-1/2 2xl:w-1/3 md:h-screen md:top-0 right-0 z-50 transition-transform p-5 duration-700 overflow-y-auto',
            { 'translate-x-[-5%] md:translate-x-0': isModal, 'translate-x-[100%]': !isModal },
          )}
        >
          <div
            onClick={() => {
              setModal(false);
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <Comments posts={posts} />
        </div>
      </Modal> */}
    </>
  );
}
