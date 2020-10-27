import React from 'react';

interface MoreLinkProps {
  text?: string;
  to: string;
}

export const MoreLink = ({ text = 'See More', to }: MoreLinkProps) => {
  return (
    <a href={to} className="text-lg uppercase font-bold text-gray-600 hover:text-black transition-all duration-300">
      {text} {'→'}
    </a>
  );
};
