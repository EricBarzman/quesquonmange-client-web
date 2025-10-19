"use client";

import { logout } from '@/hooks/auth.hooks';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

function Navbar() {

  const router = useRouter();

  async function handleSignout() {
    try {
      await logout();
      router.push('');
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='bg-white p-10'>
      <nav className='flex items-center justify-between'>
        <ul className='font-bold'>
          <Link href="/">Home</Link>
        </ul>
        <ul>Options</ul>
        <ul>
          <button className='hover:bg-amber-300 cursor-pointer p-2' onClick={handleSignout}>Signout</button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar