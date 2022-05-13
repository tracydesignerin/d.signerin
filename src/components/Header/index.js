import React from 'react';
import styled from 'styled-components';
import LogoTracy from '../../assets/images/LogoThanhNguyen.svg';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Logo>
        <Link to="/">
          <img className="pageLogo" src={LogoTracy} alt="tracyd.signerin" />
        </Link>
      </Logo>

      <Nav>
        <NavItem isOpen={location.pathname === '/'}>
          <Link to="/">About Me</Link>
        </NavItem>
        <NavItem isOpen={location.pathname.includes('/projects')}>
          <Link to="/projects">My Projects</Link>
        </NavItem>
        <NavItem isOpen={location.pathname.includes('/contact')}>
          <a href="#contact">Contact Me</a>
        </NavItem>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem 2rem 3rem;

  @media (max-width: 1024px) {
    .pageLogo {
      width: 60%;
    }
  }
`;

const Logo = styled.div`
  img {
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 3rem;
`;

const NavItem = styled.div`
  a {
    font-family: 'Caudex';
    font-size: 24px;

    color: ${(p) => p.isOpen && '#9A6D36'};
  }

  @media (max-width: 1024px) {
    a {
      font-size: 20px;
    }
  }
`;
