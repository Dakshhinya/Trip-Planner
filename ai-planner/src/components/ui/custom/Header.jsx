import React from 'react';
import { Button } from '../button';

function Header() {
  return (
    <>
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
        <img src="/logo.svg" alt="logo" />
        <span style={{ marginLeft: '10px', fontSize: '18px', fontWeight: 'bold' }}>RoamRight</span>
      </div>
      <Button>Sign In</Button>
    </>
  );
}
export default Header;
