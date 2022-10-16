// dependencies
import Head from 'next/head';
// layout
import { DisplayLayout } from 'layout';
// components
import { EditableGiftCard } from 'components';
// types
import type { GetStaticProps } from 'next';

import { useRef } from 'react';
import { Tooltip } from 'elements';

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
};

interface Props {
  content: Content;
};

const Home = ( {
  content,
}: Props ) => {
  /* CONTENT */
  const { pageTitle} = content;

  const ref = useRef<HTMLDivElement>( null );
  const id = 'har';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <DisplayLayout>
        <div ref={ref} className='wrapper' 
          aria-describedby={id} style={{
            position: 'relative',
            marginTop: '3rem',
            width: 'max-content',
            border: '2px solid red',
        }}>
          <p className='h6'>Ballocks</p>
          <Tooltip id={id} ref={ref}>
              har har h
          </Tooltip>
        </div>
      </DisplayLayout>
    </>
  
  );
}

const HomeContent: Content = {
  pageTitle: 'Build Gift Card',
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