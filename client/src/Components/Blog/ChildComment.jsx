import React from 'react';

export default function ChildComment() {
  return (
    <div className='flex gap-3'>
    <img
      src='https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compress=85'
      alt=''
      className='h-10 w-10 rounded-full object-cover'
    />
    <div className='flex-1'>
      <div className='bg-gray-100 p-4 rounded-lg'>
        <h3 className='text-sm font-bold mb-1'>Phương Linh</h3>
        <p className='text-sm'>
          Bài chia sẻ rất hay, bạn có thể giới thiệu thêm về các extension hỗ trợ Typescript trên VS code và so sánh
          cú pháp 2 framework ReactJS vs TypeScript được ko ?
        </p>
      </div>
      <div className='py-2'>
        <span className='text-xs text-orange-600 mr-3 font-medium'>Thích</span>
        <span className='text-xs text-orange-600 mr-3 font-medium'>Trả Lời</span>
        <span className='text-xs mr-3 text-gray-500 font-medium'>16 ngày trước</span>
      </div>
    </div>
  </div>
  );
}
