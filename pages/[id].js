import React from 'react'
import Log from '../components/Log';
import { getPagePropsFromDb,getDatabase,getBlocks } from '../lib/notion';
import styled from 'styled-components';
const getDescription = (pageData) => {
  const range = [];
  pageData.forEach((block,blockIdx) => {
    if (block.type === 'heading_1') {
      range.push(blockIdx);
    }
  });
  const description = 
    pageData
      .slice(range[0] +1, range[1])
      .map((block) => block.paragraph.text[0].text.content)
      .join(" ");
  return description;
}

const getTitle = (pageProps) => {
  return pageProps.content;
}
const getDate = (pageProps) => {
  return pageProps.date[0];
}
const Container = styled.div`
  width: 100vw;
  
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
`;
export default function Post ({blocks,pageProps}) {
  return (
    <Container>
      <Log title={getTitle(pageProps)} description={getDescription(blocks)} date={getDate(pageProps)} />
    </Container>
  )
}
// This function gets called at build time
export async function getStaticPaths() {
  // Make a call to notion api to get data

  const db = await getDatabase(process.env.NOTION_DATABASE_ID);
  const pagesProps = await getPagePropsFromDb(db);
  
  // Get the paths we want to pre-render based on posts
  const paths = pagesProps.map((page) => ({
    params: { id: page.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const blocks = await getBlocks(params.id);
  const db = await getDatabase(process.env.NOTION_DATABASE_ID);
  const pagesProps = await getPagePropsFromDb(db);

  console.log('Page you want:',pagesProps.filter(page => page.id === params.id));
  return { props: { blocks,pageProps: pagesProps.filter(page => page.id === params.id)[0]}};
}