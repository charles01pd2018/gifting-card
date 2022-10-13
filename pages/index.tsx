// dependencies
import Head from 'next/head';
// layout
import { DisplayLayout } from 'layout';
// components
import { Headings, Paragraphs, Container } from 'components';
// types
import type { HeadingsContent, ParagraphsContent } from 'components/types';
import type { GetStaticProps } from 'next';


/* TYPES */
interface Content {
  pageTitle: string;
  headingsContent: HeadingsContent
  paragraphsContent: ParagraphsContent;
};

interface Props {
  content: Content;
};

const Home = ( {
  content,
}: Props ) => {
  /* CONTENT */
  const { pageTitle,
    headingsContent,
    paragraphsContent } = content;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout>
        <Container id='header-container'>
          <Headings id='headings-component' content={headingsContent} />
        </Container>
        <Container id='paragraphs-container' className='paragraphs-container'>
          <Paragraphs id='paragraphs-component' content={paragraphsContent} />
        </Container>
      </DisplayLayout>
    </>
  
  );
}

const HomeContent: Content = {
  pageTitle: 'Next.JS Starting Template',
  headingsContent: {
    text: 'Welcome!'
  },
  paragraphsContent: {
    text: 'Paragraph',
  }
};

export const getStaticProps: GetStaticProps = () => {
  const props: Props = {
    content: HomeContent,
  }

  return {
    props,
  }
}

export default Home;