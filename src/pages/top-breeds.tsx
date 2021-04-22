import React from 'react';
import { Layout } from '@components/Layout';
import { TopBreeds } from '@containers/TopBreeds/TopBreeds';

function TopBreedsPage() {
  return (
    <Layout>
      <div className="container mt-10 px-4">
        <h1 className="text-4xl font-bold mb-20">Top 10 most searched breeds</h1>
        <TopBreeds />
      </div>
    </Layout>
  );
}

export default TopBreedsPage;
