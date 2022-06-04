import React from 'react';
import Course from './Course';

export default function Courses({ title, lessons, isShow }) {
  return (
    <>
      <section>
        <div className='flex justify-between items-center py-4'>
          <div className='flex gap-3 items-center'>
            <h2 className='text-xl sm:text-2xl font-black'>{title}</h2>
            {!!isShow && <p className='text-white bg-blue-500 font-medium p-1 uppercase text-sm rounded-md'>mới</p>}
          </div>
          {!!isShow && <p className='hidden sm:block text-orange-600 font-bold'>Xem chi tiết</p>}
        </div>
        <div className='grid grid-flow-col auto-cols-[60%] snap-x overflow-y-auto md:grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-6 pb-5'>
          {lessons.map((lesson, index) => (
            <Course key={index} lesson={lesson} />
          ))}
        </div>
      </section>
    </>
  );
}
