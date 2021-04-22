import React from 'react';

/** BreedPreview component loading skeleton */
export const BreedPreviewSkeleton = () => {
  return (
    <div className="rounded-md p-4 w-full mb-10">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-3xl bg-gray-400 h-24 w-24" />
        <div className="flex-1 space-y-4 py-1">
          <div className="h-6 bg-gray-400 rounded w-1/5" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded w-3/4" />
            <div className="h-4 bg-gray-400 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
};
