import DefaultLayout from 'Layouts/DefaultLayout';
import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}

export default function CreatePostPage() {

  return (
    <DefaultLayout>
      <input type="text" className='w-full text-3xl font-medium p-7 outline-0' placeholder='Tiêu đề' />
      <section className='tuyn-editor px-2 lg:px-6'>
        <MdEditor
          style={{ minHeight: '780px', border: "none", position: "relative"}}
          renderHTML={(text) => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </section>
    </DefaultLayout>
  );
}
