import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { FacebookSelector } from '@charkour/react-reactions';

export default function PostsPage() {
  const [isModal, setModal] = useState(false);
  const isMove = useRef(false);

  return (
    <>
      <main></main>
    </>
  );
}

{
  /* <button
  onClick={() => {
    setModal(true);
  }}
>
  show modal
</button>
<Modal isModal={isModal} setModal={setModal}>
  <div
    className={clsx(
      'text-center bg-white fixed w-1/2 h-screen top-0 right-0 z-30 transition-transform duration-700',
      { 'translate-x-0': isModal, 'translate-x-[100%]': !isModal },
    )}
  >
    <h4
      className='text-center'
      onClick={() => {
        setModal(false);
      }}
    >
      close
    </h4>
  </div>
</Modal> */
}

{
  /* <h2
className='relative mt-24 cursor-pointer tuyn-wrap py-3 hover:first:block inline-block mb-10'
onMouseMove={() => {
  if (!isMove.current) {
    setModal(true);
    isMove.current = true;
  }
}}
onMouseLeave={() => {
  if (isMove.current) {
    isMove.current = false;
    setModal(false);
  }
}}
>
Thích
<div className={clsx('absolute top-[-50px] tuyn-reactions', { hidden: !isModal }, { block: isModal })}>
  <FacebookSelector
    onSelect={(data) => {
      console.log(data);
      setModal(false);
    }}
  />
</div>
</h2>
/> */
}
