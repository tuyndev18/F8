import { PostApi } from 'Apis/PostApi';
import Posts from 'Components/Blog/Posts';
import React from 'react';
import { useQuery } from 'react-query';

export default function Blog() {
  const { data: listPosts, isLoading, isFetching } = useQuery('posts_all', PostApi.getAllPost);
  return (
    <main className='lg:px-8'>
      <h2 className='text-3xl font-extrabold mb-4'>Bài viết nổi bật</h2>
      <p className='text-sm mb-8 lg:mb-16'>
        Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
      </p>
      <section className='flex gap-8 justify-between flex-wrap lg:flex-nowrap'>
        <div className='w-full order-2 lg:order-1 lg:w-8/12'>
          {listPosts?.map((item, index) => (
            <Posts posts={item} key={index} />
          ))}
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
