import { Layout } from '@components/Layout';
import { BreedsPreview } from '@containers/BreedsPreview/BreedsPreview';
import {SearchBlock} from '@containers/SearchBlock/SearchBlock';

function HomePage() {
  return (
    <Layout>
      <SearchBlock/>
      <BreedsPreview />
      <div>Welcome to Next.js!</div>
    </Layout>
  );
}

export default HomePage;
