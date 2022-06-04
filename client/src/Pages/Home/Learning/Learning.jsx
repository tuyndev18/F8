import React from 'react';
import { Link } from 'react-router-dom';

export default function Learning() {
  return (
    <>
      <div className=' lg:px-8 xl:px-14 pt-7 pb-10'>
        <h1 className='text-3xl font-extrabold mb-3'>Lộ trình học</h1>
        <p className='max-w-[840px] text-gray-700 mb-6 lg:mb-14'>
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí “Lập trình
          viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.
        </p>
        <section className='flex gap-8 flex-wrap lg:flex-nowrap'>
          <div className='flex justify-between lg:justify-start p-5 gap-6 rounded-xl border-2 w-full lg:w-auto'>
            <div className='w-auto lg:max-w-[320px]'>
              <h2 className='text-2xl font-extrabold mb-4'>Lộ trình học Front-end</h2>
              <p className='text-gray-700 mb-4 text-justify'>
                Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn
                lộ trình để trở thành lập trình viên Front-end nhé.
              </p>
              <Link to='front-end-development'>
                <button className='text-white py-2 px-4  w-full text-center sm:w-auto rounded-full font-semibold bg-orange-500'>
                  Xem chi tiết
                </button>
              </Link>
            </div>
            <div className='w-[125px] h-[125px] hidden sm:block rounded-full border-4 border-orange-500 flex-shrink-0'>
              <img
                className='object-cover rounded-full w-full h-full'
                src='https://files.fullstack.edu.vn/f8-prod/learning-paths/2/61a0439062b82.png'
                alt=''
              />
            </div>
          </div>
          <div className='flex justify-between  lg:justify-start p-5 gap-6 rounded-xl border-2 w-full lg:w-auto'>
            <div className='w-auto lg:max-w-[320px]'>
              <h2 className='text-2xl font-extrabold mb-4'>Lộ trình học Front-end</h2>
              <p className='text-gray-700 mb-4 text-justify'>
                Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn
                lộ trình để trở thành lập trình viên Front-end nhé.
              </p>
              <Link to='back-end-development'>
              <button className='text-white w-full text-center sm:w-auto py-2 px-4 rounded-full font-semibold bg-orange-500'>
                Xem chi tiết
              </button>
              </Link>
            </div>
            <div className='w-[125px] h-[125px] hidden sm:block  rounded-full border-4 border-orange-500 flex-shrink-0'>
              <img
                className='object-cover rounded-full w-full h-full'
                src='https://files.fullstack.edu.vn/f8-prod/learning-paths/2/61a0439062b82.png'
                alt=''
              />
            </div>
          </div>
        </section>
        <section className='flex justify-between items-center'>
          <div className='w-10/12 md:max-w-[400px] py-7'>
            <h1 className='text-2xl font-extrabold mb-4'>Tham gia cộng đồng học viên F8 trên Facebook</h1>
            <p className='text-sm text-justify mb-4'>
              Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong
              quá trình học nhé.
            </p>
            <button className='py-2 px-5 rounded-full border-2 border-black'>Tham gia nhóm</button>
          </div>
          <div className='hidden md:block'>
            <img
              className='max-w-[420px] w-full'
              src='https://static.fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png'
              alt=''
            />
          </div>
        </section>
      </div>
    </>
  );
}
