import React from 'react';

export default function Blog() {
  return (
    <main className='lg:px-8'>
      <h2 className='text-3xl font-extrabold mb-4'>Bài viết nổi bật</h2>
      <p className='text-sm mb-8 lg:mb-16'>
        Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
      </p>
      <section className='flex gap-8 justify-between flex-wrap lg:flex-nowrap'>
        <div className='w-full order-2 lg:order-1 lg:w-8/12'>
          <div className='rounded-xl border-2 p-4 mb-4'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2'>
                <img
                  className='w-5 h-5 object-cover rounded-full'
                  src='https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                  alt=''
                />
                <h3 className='text-sm font-medium'>Phương Nguyễn Văn</h3>
              </div>
              <div className='flex gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                </svg>
              </div>
            </div>
            <div className='flex justify-between gap-4 items-center flex-wrap sm:flex-nowrap'>
              <div className='order-2 sm:order-1'>
                <h1 className='text-xl font-bold mb-3'>Dành cho những người lười tải VS Code</h1>
                <p className='text-sm text-slate-600 mb-3'>Dành cho những người lười tải VS Code</p>
                <span className='text-sm mr-3'>9 tháng trước</span> <span className='text-sm'>2 phút đọc</span>
              </div>
              <div className='order-1 sm:order-2 w-full sm:w-52'>
                <img
                  className='object-cover w-full rounded-xl'
                  src='https://files.fullstack.edu.vn/f8-prod/blog_posts/247/613e1ce5d0341.png'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='rounded-xl border-2 p-4 mb-4'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2'>
                <img
                  className='w-5 h-5 object-cover rounded-full'
                  src='https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                  alt=''
                />
                <h3 className='text-sm font-medium'>Phương Nguyễn Văn</h3>
              </div>
              <div className='flex gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                </svg>
              </div>
            </div>
            <div className='flex justify-between gap-4 items-center flex-wrap sm:flex-nowrap'>
              <div className='order-2 sm:order-1'>
                <h1 className='text-xl font-bold mb-3'>Dành cho những người lười tải VS Code</h1>
                <p className='text-sm text-slate-600 mb-3'>Dành cho những người lười tải VS Code</p>
                <span className='text-sm mr-3'>9 tháng trước</span> <span className='text-sm'>2 phút đọc</span>
              </div>
              <div className='order-1 sm:order-2 w-full sm:w-52'>
                <img
                  className='object-cover w-full rounded-xl'
                  src='https://files.fullstack.edu.vn/f8-prod/blog_posts/247/613e1ce5d0341.png'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='rounded-xl border-2 p-4 mb-4'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2'>
                <img
                  className='w-5 h-5 object-cover rounded-full'
                  src='https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                  alt=''
                />
                <h3 className='text-sm font-medium'>Phương Nguyễn Văn</h3>
              </div>
              <div className='flex gap-3'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                </svg>
              </div>
            </div>
            <div className='flex justify-between gap-4 items-center flex-wrap sm:flex-nowrap'>
              <div className='order-2 sm:order-1'>
                <h1 className='text-xl font-bold mb-3'>Dành cho những người lười tải VS Code</h1>
                <p className='text-sm text-slate-600 mb-3'>Dành cho những người lười tải VS Code</p>
                <span className='text-sm mr-3'>9 tháng trước</span> <span className='text-sm'>2 phút đọc</span>
              </div>
              <div className='order-1 sm:order-2 w-full sm:w-52'>
                <img
                  className='object-cover w-full rounded-xl'
                  src='https://files.fullstack.edu.vn/f8-prod/blog_posts/247/613e1ce5d0341.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full order-1 lg:order-2  lg:w-4/12 lg:px-4'>
          <h3 className='text-gray-500 uppercase font-medium mb-5'>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</h3>
          <div className='flex gap-2 flex-wrap'>
            <p className='text-sm px-3 py-2 font-medium rounded-full bg-gray-200'>Front-end / Mobile apps</p>
            <p className='text-sm px-3 py-2 font-medium rounded-full bg-gray-200'>Back-end / Devops</p>
            <p className='text-sm px-3 py-2 font-medium rounded-full bg-gray-200'>UI / UX / Design</p>
            <p className='text-sm px-3 py-2 font-medium rounded-full bg-gray-200'>Others</p>  
          </div>
        </div>
      </section>
    </main>
  );
}
