import React from 'react';
import styled from 'styled-components';

export const MyProjects = () => {
  return (
    <Wrapper>
      <Greeting>Projects</Greeting>

      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.p`
  font-family: 'Caveat';
  font-size: 56px;
`;
