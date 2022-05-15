import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { APLogistic } from './APLogistic';
import { Sappchat } from './Sappchat';
import { WallPaint } from './WallPaint';

export const Project = () => {
  const params = useParams();

  React.useEffect(() => {
    console.log(params);
  }, [params]);

  const renderProject = useMemo(() => {
    if (!params.id) return <p style={{ textAlign: 'center' }}>Loading...</p>;

    switch (params.id) {
      case '0':
        return <APLogistic />;

      case '1':
        return <Sappchat />;

      case '2':
        return <WallPaint />;

      default:
        return 'No project :c';
    }
  }, [params.id]);

  return <Wrapper>{renderProject}</Wrapper>;
};

const Wrapper = styled.div`
  min-height: calc(100vh - 300px);
  margin: 0 6rem 4rem 6rem;

  @media (max-width: 768px) {
    margin: 0 3rem 4rem 3rem;
  }
`;
