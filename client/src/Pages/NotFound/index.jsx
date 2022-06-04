import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className='w-full h-screen flex flex-col justify-between gap-8 items-center py-5 px-6'>
      <div className='flex items-center gap-3 self-start'>
        <Link to='/'>
          <img
            className='h-12 w-12 object-contain'
            src='https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png'
            alt=''
          />
        </Link>
        <h3 className='text-md font-bold'>Học lập trình để đi làm</h3>
      </div>

      <div className='max-w-[686px] mt-[-100px]'>
        <h1 className='text-[100px] sm:text-[150px] text-center text-transparent font-extrabold bg-[url("https://static.fullstack.edu.vn/static/media/ccgradient.24a9b0fc1e10582a3f3d.jpg")] bg-clip-text bg-cover bg-right'>
          404
        </h1>
        <h2 className='text-2xl sm:text-4xl text-center font-extrabold mb-5 animate-bounce break-words whitespace-pre-wrap'>
          Không tìm thấy nội dung 😓
        </h2>
        <p className='text-xs md:text-sm text-center font-medium mb-3'>
          URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.
        </p>
        <p className='text-xs md:text-sm text-center font-medium mb-8'>
          Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay vì dùng URL đã lưu.
        </p>
        <div className='flex justify-center'>
          <Link to='/'>
            <button className='py-3 px-5 mx-auto bg-orange-500 rounded-full text-center text-white font-bold'>
              Quay lại trang chủ
            </button>
          </Link>
        </div>
      </div>
      <p className='font-bold text-gray-500'>© 2018 - 2022 F8. All rights reserved.</p>
    </main>
  );
}
