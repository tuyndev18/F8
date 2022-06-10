import { PostApi } from 'Apis/PostApi';
import React, { useRef, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

export default function FormSubmit({ posts, pushComment }) {
  const [isShow, setShow] = useState(false);
  const [isCode, setCode] = useState(false);
  const client = useQueryClient();
  const formData = useRef({
    data: '',
    code: '',
  });
  const mutation = useMutation(PostApi.addComment, {
    onSuccess: (data, variables, context) => {
      pushComment(data);
    },
  });
  const handleSubmit = () => {
    mutation.mutate({ id: posts._id, content: formData.current });
  };
  return (
    <>
      <div
        onClick={() => {
          setShow(true);
        }}
        row={1}
        placeholder='Viết bình luận của bạn...'
        onChange={(e) => {
          formData.current.data = e.target.value;
        }}
        className='outline-none border-b-[1px] w-full placeholder:text-sm resize-none'
      />
      {isCode && (
        <textarea
          rows={1}
          onClick={() => {
            setShow(true);
          }}
          onChange={(e) => {
            formData.current.code = e.target.value;
          }}
          placeholder='Chèn code...'
          className='outline-none border-[1px] p-2 w-full placeholder:text-sm'
        />
      )}
      {isShow && (
        <div className='flex justify-between items-center py-2'>
          <button
            className='text-sm text-gray-400'
            onClick={() => {
              setCode(true);
            }}
          >
            Chèn Code
          </button>
          <div>
            <button
              onClick={() => {
                setShow(false);
                setCode(false);
              }}
              className='font-semibold uppercase mr-5'
            >
              HỦY
            </button>
            <button
              className='px-4 py-2 text-sm text-white bg-orange-500 rounded-full font-semibold'
              onClick={handleSubmit}
            >
              BÌNH LUẬN
            </button>
          </div>
        </div>
      )}
    </>
  );
}
