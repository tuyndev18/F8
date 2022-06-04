import { navLink } from 'Constants/NavLink';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Link to="/new-post">
        <div className='w-[44px] h-[44px] mx-auto bg-blue-500 rounded-full flex justify-center items-center cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 text-white hover:scale-110 duration-500 hover:rotate-90'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </Link>
      {navLink.map((val, index) => (
        <NavLink
          to={val.path}
          key={index}
          className={({ isActive }) =>
            isActive
              ? 'py-4 my-4 flex justify-center items-center rounded-xl flex-col w-full bg-[#e8ebed]'
              : 'py-4 my-4 flex justify-center items-center rounded-xl flex-col w-full'
          }
        >
          {val.icon}
          <p className='capitalize text-xs font-semibold'>{val.title}</p>
        </NavLink>
      ))}
    </>
  );
}
