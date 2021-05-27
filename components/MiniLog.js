import React from 'react'
import styled from "styled-components";
import Link from 'next/link'
const Container = styled.div`
  margin: 20px 0px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
`;
const Title = styled.h1`
  font-size:18px;
`;

const Description = styled.p`
  font-size: 12px;
`;
const Date = styled.p`
  font-size: 12px;
  margin: -10px 0px;
`;
const Card = styled.div`
  background-color: #f2f2f2;
  border-radius: 12px;
  padding: 1rem;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  height:auto;
  width: 80%;
  @media (max-width: 768px) {
    width: 325px;
  }
`;

const ReadMore = styled.a`
  background: transparent;
  border: 0px;
  font-size: 14px;
  font-weight:700;
  margin:0px;
  padding:0px;
  color: #4c9bfc;
  text-decoration: none;
  position:relative;
  cursor:pointer;
  &:after {
    content: '';
    position: absolute;
    width: 0; height: 3px;
    display: block;
    margin-top: -2px;
    right: 0;
    background: #4c9bfc;
    transition: width .2s ease;
    -webkit-transition: width .2s ease;
  }
  &:hover:after{
    width: 100%;
    left: 0;
    background: #4c9bfc;
  } 
`;

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

export default function MiniLog({page,pageProps}) {
  return (
    <Container>
      <Card>
        <Title>{getTitle(pageProps)}</Title>
        <Date>{getDate(pageProps)}</Date>
        <Description>{getDescription(page)}</Description>
        <Link href={`/${pageProps.id}`}>
          <ReadMore >Read More</ReadMore>
        </Link>
        
      </Card>
    </Container>
  )
}
