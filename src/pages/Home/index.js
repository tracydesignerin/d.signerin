import React from 'react';
import styled from 'styled-components';

import { Biography } from './Biography';
import { MyProjects } from './MyProjects';

const Home = () => {
  return (
    <Wrapper>
      <Biography />

      <MyProjects />
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: calc(250px + 3rem);
`;
