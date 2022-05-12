import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogisticsIcon } from '../../../assets/icons/logisticShip.svg';
import { ReactComponent as SChat } from '../../../assets/icons/sappchat.svg';
import { ReactComponent as WallPaint } from '../../../assets/icons/wallPaint.svg';
import { ProjectCard } from '../../../common/ProjectCard';

export const MyProjects = () => {
  const PROJECTS = [
    {
      id: 0,
      icon: <LogisticsIcon width={128} height={128} />,
      projectName: 'AP Logistics',
      projectType: 'Logistics Service App',
      projectDescription: 'Wireframe',
      background: 'rgba(239, 209, 182, 0.7)',
    },
    {
      id: 1,
      icon: <SChat width={128} height={128} />,
      projectName: 'S-Chat',
      projectType: 'Mobile Chat App',
      projectDescription: 'System Configuration',
      background: 'rgba(213, 172, 112, 0.9)',
    },
    {
      id: 2,
      icon: <WallPaint width={128} height={128} />,
      projectName: 'Wall Painting',
      projectType: 'IRL Home Decoration',
      projectDescription: 'Self Painting',
      background: 'rgba(125, 83, 40, 0.7)',
    },
  ];

  return (
    <Wrapper>
      <Greeting>Projects</Greeting>

      <Projects>
        {PROJECTS.map((i) => (
          <ProjectCard
            id={i.id}
            icon={i.icon}
            projectName={i.projectName}
            projectType={i.projectType}
            projectDescription={i.projectDescription}
            background={i.background}
          />
        ))}
      </Projects>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 8rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.p`
  font-family: 'Caveat';
  font-size: 56px;
`;

const Projects = styled.div`
  display: flex;

  .projectCard-0,
  .projectCard-2 {
    position: relative;
  }

  .projectCard-0 {
    left: 1.5rem;

    &:hover{
        left: -0.5rem;
    }
  }

  .projectCard-2 {
    right: 1.5rem;

    &:hover{
        right: -0.5rem;
    }
  }

  .projectCard-1 {
    z-index: 2;
    position: relative;
    top: 250px;
    
    &:hover{
        top: 234px;
    }
  }
`;
