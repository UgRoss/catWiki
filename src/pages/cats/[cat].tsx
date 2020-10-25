import { Layout } from 'components/Layout';
import { LevelBar } from 'components/LevelBar';

function CatPage() {
  return (
    <Layout>
      <div>Welcome to Next.js!</div>
      <div style={{ maxWidth: '240px' }}>
        <LevelBar level={4} />
      </div>
    </Layout>
  );
}

export default CatPage;
