import React from 'react';

interface BreedCardProps {
  image: string;
  name: string;
}

export const BreedCard = ({ image, name }: BreedCardProps) => {
  return (
    <figure>
      <a href="#" className="block">
        <img src={image} alt={name} className="w-full h-56 object-cover rounded-3xl m-auto" />
      </a>
      <figcaption className="mt-3">
        <a href="#" className="capitalize">
          {name}
        </a>
      </figcaption>
    </figure>
  );
};
