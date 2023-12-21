import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
      <span className='font-bold'>
        <Link to='/online-store-react'>Online Store</Link>
      </span>
      <span>
        <Link to='/contacts' className='mr-2'>
          Contacts
        </Link>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  );
}
