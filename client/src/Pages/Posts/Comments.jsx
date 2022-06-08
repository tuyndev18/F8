import ParentComment from 'Components/Blog/ParentComment';
import React from 'react';

function Comments() {

  return (
    <>
      <h1 className='font-semibold py-4'>6 bình luận</h1>
      <p className='text-gray-500 text-sm mb-12'>(Nếu thấy các bình luận spam, các bạn bấm report giúp admin nhé)</p>
      <div className='flex gap-4 mb-12'>
        <img src='https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compress=85' alt='' className='h-10 w-10 rounded-full object-cover' />
        <div className='flex-1'>
          <input type='text' placeholder='Viết bình luận của bạn...' className='outline-none border-b-[1px] w-full placeholder:text-sm' />
        </div>
      </div>
      <ParentComment/>
      <ParentComment/>
      <ParentComment/>
    </>
  );
}

export default Comments;

