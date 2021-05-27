import {Client} from '@notionhq/client';

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// get pages and their blocks from db

export const getPagesFromDb = async (db) => {
  if (!db) {
    // if an empty obj
    return [];
  }
  const pages = await Promise.all((db.map( async (pageObj) => {
    const page = await getBlocks(pageObj.id);
    return page;
  })));
  
  return pages;
}
// get the properties associated with a page
export const getPagePropsFromDb = async (db) => {
  
  if (!db) {
    return [];
  }
  const pageProperties = await Promise.all((db.map(async (pageObj) => {
    const page = await getPage(pageObj.id);
    const content = page.properties.Daily.title[0].plain_text;
    const date = [page.properties.Date.date.start, page.properties.Date.date.end || page.properties.Date.date.start];
    return {id:page.id,content,date};
  })));
  return pageProperties;
}


// get db

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id:databaseId
  });
  return response.results;
}

// get page
export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({
    page_id:pageId
  })
  return response;
}

// get blocks from page
export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id:blockId,
    page_size: 50
  });
  return response.results;
}


