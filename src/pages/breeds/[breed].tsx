import { Layout } from 'components/Layout';
import { LevelBar } from 'components/LevelBar';
import { BreedsPreview } from '@containers/BreedsPreview/BreedsPreview';

function CatPage() {
  return (
    <Layout>
      <div>Welcome to Next.js!</div>
      <div style={{ maxWidth: '240px' }}>
        <LevelBar level={4} />
      </div>
      <BreedsPreview />
    </Layout>
  );
}

export default CatPage;
