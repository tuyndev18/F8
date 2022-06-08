import DefaultLayout from 'Layouts/DefaultLayout';
import React, { useRef, useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import clsx from 'clsx';
import CreatableSelect from 'react-select/creatable';
import { toast } from 'react-toastify';
import { UploadApi } from 'Apis/UploadApi';
import axios from 'axios';
import { UserApi } from 'Apis/UserApi';
import { useNavigate } from 'react-router-dom';

const mdParser = new MarkdownIt();

const options = [
  { value: 'javascript', label: 'javascript' },
  { value: 'reactjs', label: 'reactjs' },
  { value: 'nodejs', label: 'nodejs' },
];

export default function CreatePostPage() {
  const navigation = useNavigate();
  const [preview, setPreview] = useState();
  const [isShow, setShow] = useState(false);
  const formData = useRef({
    title: '',
    content: '',
    banner: '',
    tags: [],
    descriptions: '',
    heading: '',
  });

  const handlePreview = async (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    formData.current.banner = e.target.files[0];
  };

  const handleEditorChange = ({ html, text }) => {
    console.log(text);
    formData.current.content = text;
  };

  const handleChange = (newValue, actionMeta) => {
    formData.current.tags = newValue.map((val) => {
    return { label: val.label };
    });
  };
  const submitForm = async () => {
    try {
      const body = new FormData();
      body.append('image', formData.current.banner);
      const image = await UploadApi.single(body);
      formData.current.banner = image.urlImage;
      const result = await UserApi.addPost(formData.current);
      toast.success('Tạo mới bài viết thành công !');
      setTimeout(() => {
        navigation('/');
      }, 1000);
    } catch (error) {
      toast.error(error);
    }
  };
  const onImageUpload = async (file) => {
    return new Promise(async (resolve, reject) => {
      try {
        const body = new FormData();
        body.append('image', file);
        const result = await UploadApi.single(body);
        resolve(result.urlImage);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <DefaultLayout>
      <section className={clsx('fixed inset-0 bg-white z-50 transition-all duration-700', { hidden: !isShow })}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 absolute right-5 top-4 cursor-pointer'
          viewBox='0 0 20 20'
          fill='gray'
          onClick={() => {
            setShow(false);
          }}
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
        <div className='container w-full h-full place-content-center mx-auto grid  sm:grid-cols-2 sm:gap-10 lg:gap-20 px-5 lg:px-10'>
          <input type='file' accept='image/*' name='' id='upload_image' onChange={handlePreview} className='hidden' />
          <div>
            <h2 className='font-semibold text-lg pb-4'>Xem trước</h2>
            <label htmlFor='upload_image'>
              <div
                className='bg-gray-100 px-10 pt-10 cursor-pointer bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(${preview})` }}
              >
                {/* <img src={preview} alt='' /> */}
                <p className='text-base text-center pb-5'>
                  Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn hút hơn với độc giả.
                </p>
                <p className='text-center text-orange-500 pb-20'>Bấm để chọn ảnh hiển thị</p>
              </div>
            </label>
            <input
              onChange={(e) => {
                formData.current.heading = e.target.value;
              }}
              className='block outline-none border-b-[1px] w-full text-xl py-3 font-semibold'
              type='text'
              placeholder='Tiêu đề khi tin được hiển thị'
            />
            <input
              className='block outline-none border-b-[1px] w-full py-3'
              onChange={(e) => {
                formData.current.descriptions = e.target.value;
              }}
              type='text'
              placeholder='Mô tả khi tin được hiển thị'
            />
            <p className='mt-7 text-gray-400'>
              <span className='text-gray-700'>Lưu ý:</span> Chỉnh sửa tại đây sẽ thay đổi cách bài viết được hiển thị
              tại trang chủ, tin nổi bật - Chứ không ảnh hưởng đến nội dung bài viết của bạn.
            </p>
          </div>
          <div>
            <p className='pb-3'>Thêm tối đa 5 thẻ để độc giả biết bài viết của bạn đang đề cập đến vấn đề gì.</p>
            <div>
              <CreatableSelect isMulti onChange={handleChange} options={options} />
            </div>
            <button className='text-white rounded-lg bg-green-600 py-2 px-4 mt-7' onClick={submitForm}>
              Xuất bản ngay
            </button>
          </div>
        </div>
      </section>
      <section className={clsx({ hidden: isShow })}>
        <div className='w-full flex justify-end pr-8 translate-y-3 sticky top-[57px] p-2 bg-white z-30'>
          <button
            className='px-4 p-1 bg-orange-500 text-white font-medium rounded-full'
            onClick={() => {
              setShow(true);
            }}
          >
            Xuất bản
          </button>
        </div>
        <input
          type='text'
          onChange={(e) => {
            formData.current.title = e.target.value;
          }}
          className='w-full text-2xl font-medium p-7 outline-0'
          placeholder='Tiêu đề'
        />
        <section className='tuyn-editor px-2 lg:px-6'>
          <MdEditor
            style={{ minHeight: '780px', border: 'none', position: 'relative' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
            onImageUpload={onImageUpload}
            imageAccept='.jpg,.png'
            placeholder='Viết điều gì mà bạn thích...'
          />
        </section>
      </section>
    </DefaultLayout>
  );
}
