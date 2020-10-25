import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container m-auto">
      <div className="flex justify-between flex-col h-screen">
        <Header />
        <div className="container flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
