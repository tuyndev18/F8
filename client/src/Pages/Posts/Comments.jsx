import { PostApi } from 'Apis/PostApi';
import FormSubmit from 'Components/Blog/FormSubmit';
import ParentComment from 'Components/Blog/ParentComment';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

function Comments({ posts }) {
  const client = useQueryClient();
  const current_user = client.getQueryData('current_user');
  const { data } = useQuery(['comments', posts?._id], () => PostApi.getComments(posts?._id), {
    enabled: !!posts,
  });
  const [listComment, setListComment] = useState([]);
  useEffect(() => {  
   if(data) {
    setListComment(data)
   }
  }, [data])
  
  const pushComment = (data) => {
    let arr = [...listComment]
    arr.push(data)
    setListComment(arr)
  }

  return (
    <>
      <h1 className='font-semibold py-4'>{listComment?.length} bình luận</h1>
      <p className='text-gray-500 text-sm mb-12'>(Nếu thấy các bình luận spam, các bạn bấm report giúp admin nhé)</p>
      <div className='flex gap-4 mb-12'>
        <img src={current_user.avatar} alt='' className='h-10 w-10 rounded-full object-cover' />
        <div className='flex-1'>
          <FormSubmit posts={posts} pushComment={pushComment} />
        </div>
      </div>
      {listComment?.map((comments) => (
        <ParentComment key={comments._id} initial={comments} />
      ))}
    </>
  );
}

export default Comments;
