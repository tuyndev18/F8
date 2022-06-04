import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TypeLearning() {
  const location = useLocation();
  return (
    <>
      <main className='pl-8'>
        <section className='max-w-[840px] mb-7 md:mb-14 text-sm md:text-base font-medium md:font-normal'>
          <h1 className='text-xl md:text-2xl font-extrabold capitalize mb-4'>Lộ trình học Back-end</h1>
          <p className='text-justify mb-3'>
          Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.
          </p>
          <p className=' text-justify mb-3'>
            Tại Việt Nam, <span className='text-red-600 font-medium underline'>lương trung bình</span> cho lập trình viên Back-end vào khoảng <span className='text-gray-700 font-medium'>19.000.000đ / tháng.</span>
          </p>
          <p className='text-justify mb-3'>
            Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên
            Back-end.
          </p>
          <blockquote className='relative text-justify before:w-1 px-3 before:h-full ml-4 before:absolute before:top-0 before:left-0 before:bg-orange-400 before:content-[""]'>
           <p>Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong thời gian sớm nhất.</p>
          </blockquote>
        </section>
        <section className='max-w-[1140px] text-sm font-medium md:font-normal md:text-base'>
          <h1 className='text-xl font-bold mb-3 capitalize'>1. Tìm hiểu về ngành IT</h1>
          <p className='text-sm text-justify font-medium mb-4'>
            Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa?
            Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.
          </p>
          <div className='border-2 p-3 sm:p-4 rounded-xl sm:flex gap-5 items-start mb-4'>
            <div className='rounded-xl mb-3 sm:mb-0 sm:w-4/12 lg:w-3/12 flex-shrink-0'>
              <img className='rounded-xl w-full' src='https://files.fullstack.edu.vn/f8-prod/courses/7.png' alt='' />
            </div>
            <div>
              <h1 className='font-bold capitalize'>Kiến Thức Nhập Môn IT</h1>
              <p className='text-sm font-medium md:text-base md:font-normal py-3'>Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.</p>
              <button className='w-full sm:w-auto text-center text-white bg-orange-500 py-2 px-5 rounded-full font-medium'>Xem khóa học</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
