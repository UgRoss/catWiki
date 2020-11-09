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
    <div className="flex mb-20">
      <div className="mr-10" style={{ maxWidth: '10rem' }}>
        <Link href={breedUrl}>
          <a>
            <img src={img} alt={title} className="object-cover rounded-3xl" />
          </a>
        </Link>
      </div>
      <div className="flex-grow">
        <Link href={breedUrl}>
          <a>
            <h2 className="text-4xl font-bold mb-5">{title}</h2>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};
