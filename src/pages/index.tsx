import { Layout } from 'components/Layout';
import { BreedsPreview } from '@containers/BreedsPreview/BreedsPreview';

function HomePage() {
  return (
    <Layout>
      <div>Welcome to Next.js!</div>
      <BreedsPreview />
    </Layout>
  );
}

export default HomePage;
