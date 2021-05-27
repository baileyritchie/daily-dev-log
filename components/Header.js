import React from 'react'
import styled from "styled-components";


const Container = styled.div`
  margin-top: 20px;
  width:100vw;
  display:flex;
  flex-direction:column;
  align-items: center;
  justtify-content:center;
`
const Title = styled.h1`
  font-size: 24px;
`;
const Description = styled.h4`
  margin-top: -5px;
  font-size: 18px;
  text-align:center;
  width: 600px;
  @media (max-width: 768px) {
    width: 350px;
  }
`
const Link = styled.a`
  font-size: 18px;
  color: #4c9bfc;
  display:inline-block;
  text-decoration: none;
  position:relative;
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
`

export default function Header() {
  return (
    <Container>
      <Title>Bailey's Dev Log</Title>
      <Description>
        Welcome to my development log. 
        Here you will find daily progress logs and information on 
        what I've accomplished each day. You can also find me on {"      "}
        <Link href="https://twitter.com/baileylritchie">{`${" "} twitter`}</Link>
        .
      </Description>
      
      
    </Container>
  )
}
