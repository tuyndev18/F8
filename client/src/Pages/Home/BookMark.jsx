import { UserApi } from 'Apis/UserApi';
import clsx from 'clsx';
import Modal from 'Components/Modal';
import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import DayJs from 'Utils/DayJs';

const Posts = ({ posts }) => {
  const [isModal, setModal] = useState(false);
  const client = useQueryClient();
  const mutation = useMutation(UserApi.archivePost, {
    onSuccess: (data, variables, context) => {
      client.invalidateQueries('book_mark');
    },
  });
  return (
    <div className='p-4 border-[1px] rounded-md mb-3'>
      <div className='flex justify-between items-start mb-2 gap-3 relative'>
        <Link to={`/blog/${posts?.postId.slug}`}>
          <h2 className='text-sm font-bold md:text-lg cursor-pointer break-words whitespace-pre-wrap w-9/12 line-clamp-2'>
            {posts?.postId?.title}
          </h2>
        </Link>
        <svg
          onClick={() => {
            setModal(true);
          }}
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 flex-shrink-0 cursor-pointer'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
        </svg>
        <Modal isModal={isModal} setModal={setModal}>
          <div
            className={clsx(
              'fixed z-50 bg-white left-5 right-5 sm:right-0 top-1/2 sm:left-1/2 sm:translate-x-[-50%] translate-y-[-50%] px-10 py-8 border-b-4 border-orange-500 rounded-md',
              { hidden: !isModal },
              { block: isModal },
            )}
          >
            <h2 className='font-medium pb-4'>Bạn có muốn xóa bài viết khỏi danh sách lưu không ?</h2>
            <div className='flex gap-5'>
              <button
                className='text-xs px-3 py-2 rounded-md font-bold shadow-sm bg-gradient-to-tr from-[#2cccff] to-[#22dfbf] text-white shadow-[#22dfbf] z-50'
                onClick={() => {
                  setModal(false);
                  mutation.mutate({ id: posts?.postId?._id, body: { type: false } });
                }}
              >
                Chắc chắn
              </button>
              <button
                className='text-xs px-3 py-2 rounded-md font-bold shadow-sm bg-gradient-to-tr from-[#2cccff] to-[#22dfbf] text-white shadow-[#22dfbf] z-50'
                onClick={() => {
                  setModal(false);
                }}
              >
                À , không
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <span className='text-orange-400 text-sm mr-3'>Đã lưu {DayJs.from(posts.createdAt)}</span>
      <span className='text-gray-500 text-sm'>
        Tác giả: <span className='text-black capitalize'>{posts.postId?.userId?.fullName}</span>
      </span>
    </div>
  );
};

export default function BookMark() {
  const { data: bookMark } = useQuery('book_mark', UserApi.postSaved);

  return (
    <>
      <h2 className='text-2xl font-extrabold pb-8'>Bài viết đã lưu</h2>
      <div className='container'>
        <div className='border-b-[1px] mb-4'>
          <h3 className='font-bold py-4 px-2 inline-block border-b-2 border-b-black'>
            Bài viết ({bookMark?.length || 0})
          </h3>
        </div>
        {bookMark?.map((posts, index) => (
          <Posts posts={posts} key={posts?._id} />
        ))}
      </div>
    </>
  );
}
