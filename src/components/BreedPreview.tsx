import React from 'react';

interface BreedPreviewProps {
  img: string;
  title: string;
  description: string;
}

export const BreedPreview: React.FunctionComponent<BreedPreviewProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="flex">
      <div>
        <img src={img} alt={title} />
      </div>
      <div className="flex-grow">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
