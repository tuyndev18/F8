import clsx from 'clsx';
import Modal from 'Components/Modal';
import NavBar from 'Components/NavBar';
import React, { useEffect, useState } from 'react';
import { FacebookSelector } from '@charkour/react-reactions';

export default function PostsPage() {
  const [isModal, setModal] = useState(false);
  return (<div>
    
   <h2 className='relative mt-24' onMouseEnter={()=> {
     setModal(true)
   }} onMouseLeave={()=> {
     setModal(false)
   }}>
     Thích
     <div className={clsx('absolute top-[-60px] overflow-hidden', {"h-0": !isModal}, {"h-auto": isModal})} >
    <FacebookSelector />
    </div>
   </h2>
   
  </div>)
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
