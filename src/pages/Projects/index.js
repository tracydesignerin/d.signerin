import React from 'react';
import styled from 'styled-components';
import LogisticShip from '../../assets/images/projects/logisticsShip.png';
import Sappchat from '../../assets/images/projects/sappchat.png';
import WallPainting from '../../assets/images/projects/wallPainting.png';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

const Projects = () => {
  const PROJECTS = [
    {
      id: 0,
      image: LogisticShip,
      projectName: 'AP Logistics',
      projectType: 'Logistics Service App',
      projectDescription: 'MOBILE APP FOR AP LOGISTICS SERVICE',
    },
    {
      id: 1,
      image: Sappchat,
      projectName: 'S-Chat',
      projectType: 'Mobile Chat App',
      projectDescription: 'NEW CONFIGURATION OF S-CHAT',
    },
    {
      id: 2,
      image: WallPainting,
      projectName: 'Wall Painting',
      projectDescription: 'IRL WALL PAITING',
    },
  ];

  return (
    <>
      <Wrapper>
        <Greeting>Project Collection</Greeting>

        <ProjectWrapper>
          {PROJECTS.map((i) => (
            <>
              <Project key={i.id} image={i.image}>
              <span className="mobile">{i.projectName}</span>
                <Link to={`/projects/${i.id}`}>
                  <img src={i.image} alt={i.projectName} />
                  <div className="overlay">
                    <div className="text">
                      <span>{i.projectDescription}</span>
                    </div>
                  </div>
                </Link>
              </Project>
            </>
          ))}
        </ProjectWrapper>
      </Wrapper>

      <Outlet />
    </>
  );
};

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 0 3rem 3rem 3rem;

  .mobile {
    display: none;

    @media (max-width: 768px) {
      display: block
    }
  }
`;

const Greeting = styled.p`
  font-family: 'Caveat';
  font-size: 56px;
`;

const ProjectWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Project = styled.div`
  border-radius: 1rem;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    width: 1258px;
    height: 448px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(16, 101, 96, 0.7);
    border-radius: 1rem;
  }

  &:hover .overlay {
    opacity: 0.7;

    @media (max-width: 768px) {
      opacity: 0;
    }
  }

  .text {
    color: white;
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;

    span {
      opacity: 1;
    }
  }
`;
