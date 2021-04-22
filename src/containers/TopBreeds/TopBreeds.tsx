import React from 'react';
import { useQuery } from '@apollo/client';
import { BreedPreview } from './components/BreedPreview';
import { BreedPreviewSkeleton } from './components/BreedPreviewSkeleton';
import TOP_BREEDS_QUERY from './TopBreeds.graphql';

export const TopBreeds = () => {
  const { data, loading } = useQuery(TOP_BREEDS_QUERY);
  const numOfSkeletonsToShow = 3;

  if (loading) {
    return (
      <div>
        <BreedPreviewSkeleton />
        <BreedPreviewSkeleton />
        <BreedPreviewSkeleton />
      </div>
    );
  }

  return (
    <div>
      {data?.getPopularBreeds.map(({ img_url, name, description, _id }, index) => (
        <BreedPreview
          img={img_url}
          title={`${index + 1}. ${name}`}
          description={description}
          breedId={_id}
          key={_id}
        />
      ))}
    </div>
  );
};
