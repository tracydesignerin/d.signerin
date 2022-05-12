import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProjectCard = (props) => {
  const { id, icon, projectName, projectType, projectDescription, background } = props;

  return (
    <CustomLink to={`/projects/${id}`}>
      <Wrapper className={`projectCard-${id}`} style={{ backgroundColor: background }}>
        <ProjectIcon>
          {icon}
          <ProjectName>{projectName}</ProjectName>
        </ProjectIcon>

        <ProjectBrief>
          <Type>{projectType}</Type>
          <Description>{projectDescription}</Description>
        </ProjectBrief>
      </Wrapper>
    </CustomLink>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  min-height: 500px;
  min-width: 350px;

  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 275ms;
  cursor: pointer;

  &:hover {
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
    z-index: 3;
  }
`;

const ProjectIcon = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectName = styled.div`
  font-family: 'Inria Sans';
  font-weight: 600;
  text-align: center;
`;

const ProjectBrief = styled.div`
  margin-top: 2.5rem;
`;

const Type = styled.p`
  font-family: 'Caudex';
  text-align: center;
  font-size: 1.5rem;
`;

const Description = styled.p`
  font-family: 'Caudex';
  text-align: center;
  font-size: 1.25rem;
`;

const CustomLink = styled(Link)`
  color: inherit !important;

  &:hover {
    color: inherit !important;
  }
`;
