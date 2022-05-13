import React from 'react';
import styled from 'styled-components';
import { CustomLink } from '../../../styles/globalStyles';
import DesignSprint from '../../../assets/images/projects/DesignSprint.png';
import Persona1 from '../../../assets/images/projects/persona.png';
import Persona2 from '../../../assets/images/projects/persona2.png';
import UserJourney from '../../../assets/images/projects/userJourney.png';
import APFlow from '../../../assets/images/projects/apUserFlow.png';

export const APLogistic = () => {
  return (
    <Wrapper>
      <h3 style={{ fontWeight: 700, fontSize: '32px' }}>“AP LOGISTICS” PROJECT</h3>
      <Brief>
        <Title>UX/UI</Title>
        <span>
          As a learner of Google UX Course on Coursera, I built my own project called “Design a
          service summary app for a secure logistics company”
        </span>
      </Brief>
      <Project>
        <Up>
          <Brief className="indented">
            <Title>Project Overview</Title>
            <span style={{ fontStyle: 'normal' }}>
              AP Logistics Company was established in 2013. Till now they had their website already
              but not mobile app. They intend to spread their service introduction to customers
              through a friendly and usefull app. Customers can update latest news about market
              trend, book their new shipments and track their departed shipment also.
            </span>
          </Brief>
          <br />

          <Brief className="indented">
            <Title>Scope of work</Title>
            <span style={{ fontStyle: 'normal' }}>
              Since It’s a self-project, I have to investigate from the very first step and plan to
              do all things as a UX design according to what I’ve learned from the Google Course.
            </span>
          </Brief>
        </Up>

        <Down>
          <Brief className="indented" style={{ width: '100%' }}>
            <Title>GOAL STATEMENT</Title>
            <span style={{ fontStyle: 'normal' }}>
              Our logistics service summary app will let users check the specific routing and price
              for their shipments which will affect users who have their cargo needed to delivered
              over the world by letting users had an overview about their shipments' solution and
              choose the best one before arrange meeting with salesman or placing booking with that
              logistics company. We will measure effectiveness by tracking the recent visitor access
              time per the time they successfully placing order online.
            </span>
          </Brief>
        </Down>
      </Project>
      <Brief className="indented" style={{ margin: '2rem' }}>
        <CustomLink
          style={{ textDecoration: 'underline' }}
          href="https://www.figma.com/file/On7DjP8pjZU2fhpKY9J0xg/AP-Logistics-App?node-id=0%3A1"
          target="_blank"
          rel="noopen noreferrer"
        >
          CHECK THE WIREFRAME HERE!
        </CustomLink>
      </Brief>
      <Brief className="indented design-sprint" style={{ width: 'unset', marginTop: '1rem' }}>
        <Title>Design Sprint</Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img style={{ margin: '1rem 0' }} src={DesignSprint} alt="ap-sprint" />
        </div>
      </Brief>

      <Brief className="indented" style={{ width: 'unset', marginTop: '1rem' }}>
        <Title>Personas</Title>
        <Personas>
          <Persona>
            <img src={Persona1} alt="persona-1" />
          </Persona>
          <Persona>
            <img src={Persona2} alt="persona-2" />
          </Persona>
        </Personas>
      </Brief>

      <Brief className="indented" style={{ width: 'unset', marginTop: '1rem' }}>
        <Title>USER JOURNEY MAP</Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={UserJourney} alt="ap-sprint" />
        </div>
      </Brief>

      <Brief className="indented user-flow" style={{ width: 'unset', marginTop: '1rem' }}>
        <Title>USER FLOW</Title>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={APFlow} alt="ap-flow" />
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

  @media (max-width: 1024px) {
    .design-sprint,
    .user-flow {
      img {
        width: 100%;
      }
    }
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
  justify-content: space-evenly;
  gap: 1rem;

  margin-top: 2rem;
`;

const Up = styled.div`
  display: flex;
  width: 100%;
  gap: 10%;
`;

const Down = styled.div``;

const Personas = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Persona = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
