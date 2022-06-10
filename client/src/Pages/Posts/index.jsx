import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { FacebookSelector } from '@charkour/react-reactions';
import DefaultLayout from 'Layouts/DefaultLayout';
import SyntaxHighlight from 'Components/SyntaxHighlight';
import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-query';
import { PostApi } from 'Apis/PostApi';
import { Link, useParams } from 'react-router-dom';
import DayJs from 'Utils/DayJs';
import ActionPosts from './ActionPosts';

export default function PostsPage() {
  const { slug } = useParams();
  const { data: Posts } = useQuery(['posts', slug], async () => PostApi.getPostsBySlug(slug));

  return (
    <>
      <DefaultLayout>
        <main className='container mx-auto px-4 lg:px-6 md:flex gap-10'>
          <section className='pb-5 md:w-3/12 lg:w-2/12 relative'>
            <ActionPosts />
          </section>
          <section className='pb-5 md:w-9/12 md:py-5 lg:w-10/12'>
            <h1 className='text-xl sm:text-2xl font-bold pb-4'>{Posts?.title}</h1>
            <div className='flex items-center justify-between'>
              <div className='flex gap-3 items-center'>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://res.cloudinary.com/tuyndev/image/upload/v1654309152/default/avatars-000424500066-nchc3n-t500x500_dwtmmw.jpg'
                  alt=''
                />
                <div>
                  <h3 className='font-semibold tex-sm capitalize'>{Posts?.userId?.fullName}</h3>
                  <p className='text-xs text-gray-500'>
                    <span className='pr-4'>{DayJs.from(Posts?.createdAt)}</span>
                    <span>1 phút đọc</span>
                  </p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                  />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
                </svg>
              </div>
            </div>
            <div className='flex gap-x-3 gap-y-2 pt-4 flex-wrap'>
              {Posts?.tags.map((tag, index) => (
                <p className='px-3 py-1 text-black text-sm cursor-pointer bg-gray-200' key={index}>
                  {tag.label}
                </p>
              ))}
            </div>
            <div className='tuyn-custom-markdown pt-4 pb-6 sm:pt-5 sm:pb-7'>
              <ReactMarkdown children={Posts?.content} components={SyntaxHighlight} />
            </div>
            <div className='border-b-2 border-red-500 pt-5 pb-7'>
              <h1 className='font-semibold text-lg pb-4'>Bài đăng cùng tác giả</h1>
              <ul className='pl-8 list-disc'>
                {Posts?.myPosts?.length > 0 ? (
                  Posts?.myPosts.map((post, index) => (
                    <Link to={`/blog/${post.slug}`} key={index}>
                      <li className='hover:underline cursor-pointer'>{post.title}</li>
                    </Link>
                  ))
                ) : (
                  <p className='text-orange-500'>Tác giả chưa có bài đăng nào khác.</p>
                )}
              </ul>
            </div>
            <div className='mt-7'>
              <h1 className='text-xl font-semibold pb-5'>Bài viết nổi bật</h1>
              <div className='border-b-[1px] pb-3'>
                <p className='text-sm text-gray-600q pb-3'>
                  <span className='pr-4'>
                    Đăng bởi <span className='text-black'>Sơn Đặng</span>
                  </span>
                  <span>9 tháng trước</span>
                </p>
                <h2 className='text-xl font-semibold'>Tổng hợp các sản phẩm của học viên F8</h2>
                <div className='rounded-xl py-3'>
                  <img
                    className='rounded-xl w-full aspect-[3/1] sm:aspect-[4/1] object-cover'
                    src='http://res.cloudinary.com/tuyndev/image/upload/v1654592594/images/ifhtjpaql7llxb8xa8dj.png'
                    alt=''
                  />
                </div>
                <p className='text-sm text-justify'>
                  Hí ae, tôi cũng tên Sơn nhưng mà là newbie còn ông Sơn kia thì trùm rồi :))). Tôi cũng vừa mới đến với
                  lập trình,tôi là sv năm 1. Sau khi nghe truyền thuyết thằng anh sinh năm 96 học cơ khí bách khoa, tôi
                  đã lao đầu ngay vào học code vì nghe bảo ngành được xã hội trọng dụng, nhắc đến là gái chảy nước( một
                  phần là sợ bị tụt hậu-nghe đồn là ngành IT đào thải nhanh lắm). Khoảng thời gian trước đó việc tìm
                  hiểu học về web tôi còn khá lơ mơ vì trên mạng người ta chỉ loạn cả lên ( không có lộ trình rõ ràng).
                  Đó là khi F8 của anh Sơn xuất hiện, với lộ trình rõ ràng, bài học được chia ra rạch ròi, course-mate
                  khá là tậm tâm giúp đỡ. Tôi đã có câu hỏi ngớ ngấn nhu bao anh em khác, đó là web này trả phí hả anh
                  Sơn. Tôi cũng khác bất ngờ về việc một người bỏ khác nhiều công sức, làm việc nghiệm túc nhưng lại
                  không thu phí. F8 cho ta một con đường rõ ràng, không lan man, có thế tiết kiệm được vài tháng đến cả
                  năm. Tôi hy vọng ae học và phát triển cộng đồng này nhiệt tình đề{' '}
                </p>
                <h3 className='text-red-500 text-sm font-medium pt-3'>Xem tiếp 1 phút đọc</h3>
              </div>
            </div>
            <div className='pt-5'>
              <h2 className='capitalize font-medium text-sm text-gray-500'>CÁC THẺ ĐƯỢC ĐỀ XUẤT</h2>
              <div className='flex gap-x-3 gap-y-2 p-3 flex-wrap'>
                {Posts?.tags.map((tag, index) => (
                  <p className='px-3 py-1 text-black text-sm rounded-full cursor-pointer bg-slate-200' key={index}>
                    {tag.label}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
}