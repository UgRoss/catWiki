import React from 'react';
import Link from 'next/link';

interface BreedPreviewProps {
  img: string;
  title: string;
  description: string;
  breedId: string;
}

export const BreedPreview: React.FunctionComponent<BreedPreviewProps> = ({
  img,
  title,
  description,
  breedId,
}) => {
  const breedUrl = `/breeds/${breedId}`;

  return (
    <div className="flex flex-col md:flex-row mb-10">
      <div className="mr-10 mb-5" style={{ maxWidth: '10rem' }}>
        <Link href={breedUrl}>
          <a>
            <img src={img} alt={title} className="object-cover rounded-3xl" />
          </a>
        </Link>
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          <Link href={breedUrl}>
            <a>{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
