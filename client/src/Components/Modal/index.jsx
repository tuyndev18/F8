import clsx from 'clsx';
import React from 'react';

export default function Modal({ isModal, setModal, children, isBackground }) {
  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 z-10 transition-all duration-1000',
          { 'bg-[#81818179]': !isBackground },
          { 'bg-transparent': isBackground },
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
