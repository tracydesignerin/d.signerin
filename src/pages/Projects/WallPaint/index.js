import React from 'react';
import styled from 'styled-components';
import DesignProcess from '../../../assets/images/projects/designProcess.png';

export const WallPaint = () => {
  return (
    <Wrapper>
      <h3 style={{ fontWeight: 700, fontSize: '32px' }}>“IRL WALL PAINTING” PROJECT</h3>
      <Brief>
        <Title>DIY PROJECT</Title>
        <span>
          Being an aesthetic and creative person, I came up with ideas and painted the wall in my
          working area at my home which I called “my cave”.
        </span>
      </Brief>
      <Project>
        <Up>
          <Brief className="indented">
            <Title>Project Overview</Title>
            <span style={{ fontStyle: 'normal' }}>
              In 2021, we decided to create a "creative working space" in our home, which my husband
              and I will spend time working here for the next 5 year. Prior to this, the room was
              only a storage unit. The paint style was inspired by “geometric art” and we finished
              the whole thing after 3 days.
            </span>
          </Brief>
          <br />

          <Brief className="indented">
            <Title>Scope of work</Title>
            <span style={{ fontStyle: 'normal' }}>
              With my husband, we agreed about the style, color, type and brand of paint and paiting
              tools also.
            </span>
          </Brief>
        </Up>

        <Down>
          <Brief className="indented" style={{ width: '100%' }}>
            <Title>GOAL STATEMENT</Title>
            <span style={{ fontStyle: 'normal' }}>
              My self-painting wall will let anyone (include me) who came to this room feel like a
              galery which will inspire their creative ability by a nature way.
            </span>
          </Brief>
        </Down>
      </Project>

      <Brief className="indented" style={{ marginTop: '2rem', marginLeft: '2rem', width: 'unset' }}>
        <Title>Design Process</Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ margin: '1rem 0' }} src={DesignProcess} alt="ap-sprint" />
        </div>
      </Brief>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: 'Krub';

  .indented {
    margin-left: 2rem;
    width: 450px;
  }
`;

const Brief = styled.div`
  margin-top: 0.5rem;
  width: 700px;

  span {
    font-size: 20px;
    letter-spacing: 0.1px;
    font-style: italic;
  }
`;

const Title = styled.p`
  margin: 0.5rem 0;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Project = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  margin-top: 2rem;
`;

const Up = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Down = styled.div``;
