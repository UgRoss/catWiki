import React from 'react';
import Link from 'next/link';

interface MoreLinkProps {
  text?: string;
  to: string;
}

export const MoreLink = ({ text = 'See More', to }: MoreLinkProps) => {
  return (
    <Link href={to}>
      <a className="text-lg uppercase font-bold text-gray-600 hover:text-black transition-all duration-300">
        {text} {'→'}
      </a>
    </Link>
  );
};
