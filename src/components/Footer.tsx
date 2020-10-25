import React from 'react';
import CatwikiLogo from '../assets/CatwikiLogo.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center p-10 px-16 bg-black rounded-t-3xl text-white">
      <div>
        <a href="#">
          <CatwikiLogo className="fill-white" />
        </a>
      </div>
      <div>
        <span>© Ross - devchallenge.io {currentYear}</span>
      </div>
    </footer>
  );
};
