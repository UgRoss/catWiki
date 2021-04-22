import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="px-5 my-5">
      <Link href="/">
        <a>
          <img src="/CatwikiLogo.svg" alt="Logo" />
        </a>
      </Link>
    </header>
  );
};
