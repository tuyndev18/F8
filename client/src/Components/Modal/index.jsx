import clsx from 'clsx';
import React from 'react';

export default function Modal({ isModal, setModal, children, background }) {
  return (
    <>
      <div
        className={clsx(
          'bg-[#81818179] fixed inset-0 z-10 transition-all duration-1000',
          { hidden: !isModal },
          { block: isModal },
        )}
        onClick={() => {
          setModal(false);
        }}
      ></div>
      {children}
    </>
  );
}
