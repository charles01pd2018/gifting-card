// dependencies
import Head from 'next/head';
// layout
import { DisplayLayout } from 'layout';
// components
import { Headings, Paragraphs, Container } from 'components';
// types
import type { HeadingsContent, ParagraphsContent } from 'components/types';
import type { GetStaticProps } from 'next';

/**
 * TOGGABLE THINGS IN GIFT CARD
 * 
 * Sidebar
 * 1. Gift card color
 * 2. Background theme
 * 3. Gift card type (logos)
 * 
 * Gift card
 * 1. Title
 * 2. Code
 * 3. Message
 */

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

export const getServerSideProps: GetStaticProps = () => {
  const props: Props = {
    content: HomeContent,
  }

  return {
    props,
  }
}

export default Home;