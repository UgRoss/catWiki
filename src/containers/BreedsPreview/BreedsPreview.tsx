import React from 'react';
import { useQuery } from '@apollo/client';
import QUERY_GET_BREEDS from './Breeds.graphql';
import { BreedCard } from './components/BreedCard/BreedCard';
import { MoreLink } from '@components/MoreLink';

export const BreedsPreview = () => {
  const { loading, error, data } = useQuery(QUERY_GET_BREEDS);
  console.log(loading, error, data);

  return (
    <div className="p-10 bg-browny w-full rounded-b-3xl">
      <div className="mb-12">
        <h2 className="capitalize text-lg mb-1">Most searched breeds</h2>
        <div className="w-12 bg-black rounded h-1" />
      </div>
      <div className="grid grid-cols-2 gap-8 mb-12 items-end">
        <h3 className="text-5xl font-bold leading-tight">66+ Breeds For you to discover</h3>
        <div className="text-right">
          <MoreLink to="#" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {data &&
          data?.getPopularBreeds.map(({ name, _id, img_url }) => (
            <BreedCard name={name} image={img_url} key={_id} />
          ))}
      </div>
    </div>
  );
};
