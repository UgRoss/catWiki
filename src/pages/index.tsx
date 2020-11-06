import { Layout } from '@components/Layout';
import { BreedsPreview } from '@containers/BreedsPreview/BreedsPreview';
import { SearchBlock } from '@containers/SearchBlock/SearchBlock';
import { ArticlePreview } from '@components/ArticlePreview';

function HomePage() {
  return (
    <Layout>
      <SearchBlock />
      <BreedsPreview />
      <ArticlePreview />
    </Layout>
  );
}

export default HomePage;
