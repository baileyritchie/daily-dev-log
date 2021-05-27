import Head from 'next/head'
import '../components/Header'
import MiniLog from '../components/MiniLog';
import {getDatabase,getPagePropsFromDb,getPagesFromDb} from '../lib/notion';
import Header from '../components/Header'

export default function Home({pages,pagesProps}) {
  return (
    <>
      <Head>
        <title>Daily Dev Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      {pages.map((page,idx) => <MiniLog page={page} pageProps={pagesProps[idx]}/>)}
      
    </>
  )
}

/*
TODO - modify the get database function withn the lib/notion file,
then add it to get the true results of the database and then populate as "props" here
*/
export const getStaticProps = async () => {
  const db = await getDatabase(process.env.NOTION_DATABASE_ID);
  const pagesProps = await getPagePropsFromDb(db);
  const pages = await getPagesFromDb(db);
  return {
    props: {pages,pagesProps}
  }

}


