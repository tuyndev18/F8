import clsx from 'clsx';
import Modal from 'Components/Modal';
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const Lessons = () => {
  const [menu, setMenu] = useState([
    { id: 0, isExpened: true },
    { id: 1, isExpened: false },
    { id: 2, isExpened: false },
  ]);
  const Lesson = ({ lesson, ShowLesson }) => {
    return (
      <div className='mb-3'>
        <div
          onClick={() => {
            ShowLesson(lesson);
          }}
          className='flex items-center justify-between border-[1px border-slate-200 bg-[rgb(245,245,245)] rounded-md px-4 py-2 cursor-pointer'
        >
          <p className='w-9/12 truncate'>1. Khái niệm kỹ thuật cần biết</p>
          <p className='text-sm'>3 bài học</p>
        </div>
        <div className={clsx('px-4 ', { hidden: !lesson.isExpened }, { block: lesson.isExpened })}>
          <div className='flex items-center justify-between py-3'>
            <p className='text-sm w-9/12 truncate'>1. Mô hình Client - Server là gì?</p>
            <p className='text-sm'>11:35</p>
          </div>
          <div className='flex items-center justify-between py-3'>
            <p className='text-sm w-9/12 truncate'>1. Mô hình Client - Server là gì?</p>
            <p className='text-sm'>11:35</p>
          </div>
          <div className='flex items-center justify-between py-3'>
            <p className='text-sm w-9/12 truncate'>1. Mô hình Client - Server là gì?</p>
            <p className='text-sm'>11:35</p>
          </div>
        </div>
      </div>
    );
  };
  const ShowLesson = (lesson) => {
    const newShow = menu.map((val) => {
      if (val.id == lesson.id) {
        return {
          id: lesson.id,
          isExpened: !lesson.isExpened,
        };
      }
      return val;
    });
    setMenu(newShow);
  };

  const ShowAll = () => {
    const show = menu.map((val) => ({
      ...val,
      isExpened: true,
    }));
    setMenu(show);
  };

  const HiddenAll = () => {
    const show = menu.map((val) => ({
      ...val,
      isExpened: false,
    }));
    setMenu(show);
  };

  return (
    <>
      <div className='mb-3'>
        <h2 className='text-xl font-bold mb-3'>Nội dung khóa học</h2>
        <div className='sm:flex justify-between'>
          <div className='mb-2'>
            <span className='text-sm mr-3'>4 chương</span>
            <span className='text-sm mr-3'>12 bài học</span>
            <span className='text-sm mr-3'>Thời lượng 03 giờ 26 phút</span>
          </div>
          {menu.every((val) => val.isExpened === true) ? (
            <button className='text-orange-400 font-bold text-sm' onClick={HiddenAll}>
              Thu nhỏ tất cả
            </button>
          ) : (
            <button className='text-orange-400 font-bold text-sm' onClick={ShowAll}>
              Mở rộng tất cả
            </button>
          )}
        </div>
        {menu.map((lesson, index) => (
          <Lesson key={index} lesson={lesson} ShowLesson={ShowLesson} />
        ))}
      </div>
    </>
  );
};

export default function Details() {
  const [isModal, setModal] = useState(true);
  return (
    <>
      {/* <Modal setModal={setModal} isModal={isModal}>
        <div className='fixed z-50 w-6/12 bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5 rounded-xl'>
              <h1 className='font-bold text-xl'>Giới thiệu khóa học</h1>
             <div className=' w-full'>
             <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} />
             </div>
        </div>
      </Modal> */}
      <main className='md:flex gap-5 lg:px-12'>
        <section className='border-2 md:border-0 p-4 md:p-2 rounded-lg sm:flex md:block order-2 md:w-4/12'>
          <div className='rounded-lg sm:w-1/2 md:w-full'>
            <img className='rounded-lg w-full' src='https://files.fullstack.edu.vn/f8-prod/courses/7.png' alt='' />
          </div>
          <div className='flex items-center flex-col mt-3 sm:w-1/2 md:w-full'>
            <h1 className='text-2xl text-orange-400 mb-3'>Miễn phí </h1>
            <button className='hidden sm:block px-8 py-2 mb-3 text-sm capitalize font-bold bg-orange-500 text-white rounded-full'>
              ĐĂNG KÝ HỌC
            </button>
            <div className=' fixed w-full bg-white fixed bottom-0 left-0 py-2 px-3 sm:hidden'>
              <button className='w-full py-2 text-sm capitalize font-bold bg-orange-500 text-white rounded-full'>
                ĐĂNG KÝ HỌC MIỄN PHÍ
              </button>
            </div>
            <div>
              <div className='flex gap-3 items-center mb-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-sm'>Trình độ cơ bản</p>
              </div>
              <div className='flex gap-3 items-center mb-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-sm'>Trình độ cơ bản</p>
              </div>
            </div>
          </div>
        </section>
        <section className='md:w-8/12 mt-5'>
          <h1 className='text-xl lg:text-3xl font-bold mb-4'>Lập Trình JavaScript Nâng Cao</h1>
          <p className='text-sm mb-7'>
            Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind,
            call, apply, prototype, ...
          </p>
          <div className='mb-5'>
            <h2 className='text-xl font-bold mb-3 md:mb-5 gap-2'>Bạn sẽ học được gì?</h2>
            <div className='sm:flex flex-wrap gap-2'>
              <div className='flex mb-4 gap-2 sm:w-[calc(50%-4px)]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='orange'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-sm'>
                  Nâng cao cơ hội thành công khi phỏng vấn xin việc nhờ kiến thức chuyên môn vững chắc
                </p>
              </div>
              <div className='flex  mb-4 gap-2 sm:w-[calc(50%-4px)]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='orange'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-sm'>
                  Nâng cao cơ hội thành công khi phỏng vấn xin việc nhờ kiến thức chuyên môn vững chắc
                </p>
              </div>
              <div className='flex  mb-4 gap-2 sm:w-[calc(50%-4px)]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='orange'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-sm'>
                  Nâng cao cơ hội thành công khi phỏng vấn xin việc nhờ kiến thức chuyên môn vững chắc
                </p>
              </div>
              <div className='flex mb-4 gap-2 sm:w-[calc(50%-4px)]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 flex-shrink-0'
                  viewBox='0 0 20 20'
                  fill='orange'
                >
                  <path
                    fillRule='evenodd'
                    d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-sm'>Các kiến thức cơ bản, nền móng của ngành IT</p>
              </div>
            </div>
          </div>
          <Lessons />
          <div className='mb-8 lg:mb-20 mt-2 lg:mt-5'>
            <h2 className='text-xl font-bold mb-4'>Yêu cầu</h2>
            <div className='flex gap-3 items-center mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 flex-shrink-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='orange'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              <p className='text-sm'>Hoàn thành khóa học Javascript cơ bản tại F8 hoặc đã nắm chắc Javascript cơ bản</p>
            </div>
            <div className='flex gap-3 items-center mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 flex-shrink-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='orange'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              <p className='text-sm'>Hoàn thành khóa học Javascript cơ bản tại F8 hoặc đã nắm chắc Javascript cơ bản</p>
            </div>
            <div className='flex gap-3 items-center mb-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 flex-shrink-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='orange'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
              <p className='text-sm'>Hoàn thành khóa học Javascript cơ bản tại F8 hoặc đã nắm chắc Javascript cơ bản</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
