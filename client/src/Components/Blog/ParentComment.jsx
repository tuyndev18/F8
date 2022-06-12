import { FacebookCounter, FacebookSelector } from '@charkour/react-reactions';
import { PostApi } from 'Apis/PostApi';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
import ChildComment from './ChildComment';

export default function ParentComment({ initial }) {
  const [isShow, setShow] = useState(false);
  const [isModal, setModal] = useState(false);
  const [comments, setComments] = useState(initial);
  const isMove = useRef(false);
  const delayModal = useRef();
  const client = useQueryClient();
  console.log(comments._id);
  const handleReactions = async (type) => {
    const result = await PostApi.reactionComments(comments._id, { emoji: type, isReaction: true });
    setComments(result);
    setModal(false);
  };
  const handleUnlike = async () => {
    if (!comments.typeReaction) {
      const result = await PostApi.reactionComments(comments._id, { emoji: 'like', isReaction: true });
      setComments(result);
      return;
    }
    const result = await PostApi.reactionComments(comments._id, { emoji: '', isReaction: false });
    setComments(result);
  };

  return (
    <div className='flex gap-3'>
      <img src={comments?.userId?.avatar} alt='' className='h-10 w-10 rounded-full object-cover' />
      <div className='flex-1'>
        <div className='bg-gray-100 p-4 rounded-lg relative'>
          <h3 className='text-sm font-bold mb-1'>{comments?.userId?.fullName}</h3>
          <p className='text-sm'>{comments?.content?.data}</p>
          {comments?.reactions.length > 0 && (
            <div className='tuyn-wrap-reactions bg-white rounded-full py-1 px-3 shadow-sm flex gap-2 items-center absolute bottom-0 translate-y-[50%] right-4'>
              <FacebookCounter counters={comments?.reactions} />
              <span className='font-semibold text-gray-400'>{comments?.reactions?.length}</span>
            </div>
          )}
        </div>
        <div className='py-2'>
          <div className='relative'>
            <button
              className='text-xs text-orange-600 relative mr-3 pt-1 font-medium cursor-pointer tuyn-hover-reaction'
              onClick={handleUnlike}
              onMouseOver={() => {
                console.log('first');
                delayModal.current = setTimeout(() => {
                  setModal(true);
                }, 1000);
              }}
            >
              {comments.typeReactions}
            </button>
            <span className='text-xs text-orange-600 mr-3 font-medium'>Trả Lời</span>
            <span className='text-xs mr-3 text-gray-500 font-medium'>16 ngày trước</span>
            <div
              className={clsx(
                'absolute top-0 translate-y-[-90%] left-[-10px] tuyn-reactions',
                { hidden: !isModal },
                { block: isModal },
              )}
              onMouseLeave={() => {
                clearTimeout(delayModal.current);
                delayModal.current = null;
                setModal(false);
              }}
            >
              <FacebookSelector onSelect={handleReactions} />
            </div>
          </div>
        </div>
        {!isShow ? (
          <div
            className='text-sm font-medium pb-4 flex items-center gap-2 cursor-pointer'
            onClick={() => {
              setShow((x) => !x);
            }}
          >
            Xem 1 câu trả lời
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        ) : (
          <div
            className='text-sm font-medium pb-4 flex items-center gap-2 cursor-pointer'
            onClick={() => {
              setShow((x) => !x);
            }}
          >
            Ẩn câu trả lời
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        )}
        <div className={clsx('border-l border-red-500 pl-3 mb-6', { block: isShow }, { hidden: !isShow })}>
          <ChildComment />
          <ChildComment />
          <ChildComment />
          <ChildComment />
        </div>
      </div>
    </div>
  );
}
