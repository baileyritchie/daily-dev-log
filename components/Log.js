import React from 'react'
import styled from "styled-components";
import Link from 'next/link';
import Header from '../components/Header'
const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
  width: 80%;
  @media (max-width: 768px) {
    width: 325px;
  }
`

const Title = styled.h1`
  font-size:18px;
`;
const Description = styled.p`
  font-size: 12px;
`;
const TextBody = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
`;

const Date = styled.p`
  font-size: 12px;
  margin: -10px 0px;
`;

const Back = styled.a`
  width:5%;
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
export default function Log({title,description,date}) {
  return (
    <>
    <Header/>
    <Container>
      <TextBody>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Description>{description}</Description>
      <Link href='/'><Back>Go Back</Back></Link>
      </TextBody>
      
    </Container>
    </>
  )
}
