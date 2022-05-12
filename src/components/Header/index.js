import React from 'react';
import styled from 'styled-components';
import LogoTracy from '../../assets/images/LogoThanhNguyen.svg';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <Logo>
        <img src={LogoTracy} alt="tracyd.signerin" />
      </Logo>

      <Nav>
        <NavItem isOpen={location.pathname === '/'}>
          <Link to="/">
            About Me
          </Link>
        </NavItem>
        <NavItem isOpen={location.pathname === '/projects'}>
          <Link to="/projects">
            My Projects
          </Link>
        </NavItem>
        <NavItem isOpen={location.pathname === '/contact'}>
          <Link to="/contact">
            Contact Me
          </Link>
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
`;
