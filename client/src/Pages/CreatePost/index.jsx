import DefaultLayout from 'Layouts/DefaultLayout';
import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import clsx from 'clsx';

const mdParser = new MarkdownIt();
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}

export default function CreatePostPage() {
  const [isShow, setShow] = useState(false);
  return (
    <DefaultLayout>
      <section className={clsx('fixed inset-0 bg-white z-50 transition-all duration-700', { hidden: !isShow })}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 absolute right-5 top-4'
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
        <div className='container mx-auto flex gap-10'>

        </div>
      </section>
      <section className={clsx({ hidden: isShow })}>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Show
        </button>
        <input type='text' className='w-full text-3xl font-medium p-7 outline-0' placeholder='Tiêu đề' />
        <section className='tuyn-editor px-2 lg:px-6'>
          <MdEditor
            style={{ minHeight: '780px', border: 'none', position: 'relative' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
          />
        </section>
      </section>
    </DefaultLayout>
  );
}
