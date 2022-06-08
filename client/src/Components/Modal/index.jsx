import clsx from 'clsx';
import { WrapContainer } from 'Hooks/useContext';
import React, { useContext } from 'react';

export default function Modal({ isModal, setModal, children, isBackground }) {
  return (
    <>
      <div
        className={clsx(
          'fixed inset-0 z-50 cursor-pointer',
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
