import { PostApi } from 'Apis/PostApi';
import Posts from 'Components/Blog/Posts';
import React, { useEffect, useRef } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

export default function Blog() {
  const RefInView = useRef();
  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery(
    'posts_all',
    PostApi.getAllPost,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page * 3 < lastPage.total) {
          return lastPage.page + 1;
        }
      },
    },
  );
  useEffect(() => {
    const follow = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    follow.observe(RefInView.current);
  }, []);

  return (
    <main className='lg:px-8'>
      <h2 className='text-3xl font-extrabold mb-4'>Bài viết nổi bật</h2>
      <p className='text-sm mb-8 lg:mb-16'>
        Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
      </p>
      <section className='flex gap-8 justify-between flex-wrap lg:flex-nowrap'>
        <div className='w-full order-2 lg:order-1 lg:w-8/12'>
          {data?.pages.map((posts, index) => (
            <div key={index}>
              {posts?.list.map((post, index) => (
                <Posts posts={post} key={index} />
              ))}
            </div>
          ))}
          <div className='scroll-call-api' ref={RefInView}></div>
          {!hasNextPage && (
            <p className='text-center text-orange-500 animate-bounce py-4'>Không còn kết quả nào để hiển thị nữa ^_^</p>
          )}
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
