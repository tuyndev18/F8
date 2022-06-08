import { FacebookCounter, FacebookSelector, ReactionCounter } from '@charkour/react-reactions';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import ChildComment from './ChildComment';

export default function ParentComment() {
  const [isShow, setShow] = useState(false);
  const [isModal, setModal] = useState(false);
  const isMove = useRef(false);
  const buildNode = (emoji) => <div>{emoji}</div>;
  const [reaction, setReaction] = useState([
    {
      emoji: 'like', // String name of reaction
    },
    {
      emoji: 'love', // String name of reaction
    },
    {
      emoji: 'haha', // String name of reaction
    },
    {
      emoji: 'wow', // String name of reaction
    },
    {
      emoji: 'sad', // String name of reaction
    },
    {
      emoji: 'angry', // String name of reaction
    },
  ]);
  return (
    <div className='flex gap-3'>
      <img
        src='https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compress=85'
        alt=''
        className='h-10 w-10 rounded-full object-cover'
      />
      <div className='flex-1'>
        <div className='bg-gray-100 p-4 rounded-lg relative'>
          <h3 className='text-sm font-bold mb-1'>Phương Linh</h3>
          <p className='text-sm'>
            Bài chia sẻ rất hay, bạn có thể giới thiệu thêm về các extension hỗ trợ Typescript trên VS code và so sánh
            cú pháp 2 framework ReactJS vs TypeScript được ko ?
          </p>
          <div className='tuyn-wrap-reactions bg-white rounded-full py-1 px-3 shadow-sm flex gap-2 absolute bottom-0 translate-y-[50%] right-4'>
            <FacebookCounter counters={reaction} />
            <span className='font-medium text-sm text-gray-500'>{reaction.length}</span>
          </div>
        </div>
        <div className='py-2'>
          <button
            className='text-xs text-orange-600 mr-3 pt-3 font-medium relative cursor-pointer'
            onMouseMove={() => {
              if (!isMove.current) {
                setModal(true);
                isMove.current = true;
              }
            }}
            onMouseLeave={() => {
              if (isMove.current) {
                isMove.current = false;
                setModal(false);
              }
            }}
          >
            Thích
            <div
              className={clsx(
                'absolute top-0 translate-y-[-90%] left-[-10px] tuyn-reactions',
                { hidden: !isModal },
                { block: isModal },
              )}
            >
              <FacebookSelector
                onSelect={(data) => {
                  setReaction([...reaction, { emoji: data }]);
                  setModal(false);
                }}
              />
            </div>
          </button>
          <span className='text-xs text-orange-600 mr-3 font-medium'>Trả Lời</span>
          <span className='text-xs mr-3 text-gray-500 font-medium'>16 ngày trước</span>
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
