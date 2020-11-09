import { Layout } from '@components/Layout';
import { BreedsPreview } from '@containers/BreedsPreview/BreedsPreview';
import { SearchBlock } from '@containers/SearchBlock/SearchBlock';
import { WhyHaveCatSection } from '@components/WhyHaveCatSection';

function HomePage() {
  return (
    <Layout>
      <SearchBlock />
      <BreedsPreview />
      <WhyHaveCatSection />
    </Layout>
  );
}

export default HomePage;
