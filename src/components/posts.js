import React from 'react';
import styled from 'styled-components';
import Post from './post';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 660px;
  padding: 10px;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`
const Posts = props => {
  return (
    <Container>
      {props.data.map(data => {
        return <Post data={data}/>
      })}
    </Container>
  )
}

export default Posts;
