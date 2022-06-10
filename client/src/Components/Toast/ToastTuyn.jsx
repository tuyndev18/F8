import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export default function ToastTuyn() {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <div
        className={clsx(
          'toast-tuyn fixed top-24 right-1/2 translate-x-[50%] bg-black rounded-sm',
          { block: isShow },
          { hidden: !isShow },
        )}
      >
        <p className='text-white px-5 py-2 capitalize'>đây là nội dung show nhé</p>
      </div>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>
    </>
  );
}
