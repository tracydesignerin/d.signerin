import styled, { createGlobalStyle } from 'styled-components';
import CaudexRegular from '../assets/fonts/Caudex/Caudex-Regular.ttf';
import CaveatRegular from '../assets/fonts/Caveat/Caveat-Regular.ttf';
import InriaSansRegular from '../assets/fonts/Inria_Sans/InriaSans-Regular.ttf';
import KrubRegular from '../assets/fonts/Krub/Krub-Regular.ttf';
import backgroundWEBP from '../assets/images/background.webp';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;

    @font-face {
        font-family: 'Caudex';
        src:  url(${CaudexRegular}) format('truetype');
    }
    
    @font-face {
        font-family: 'Caveat';
        src:  url(${CaveatRegular}) format('truetype');
    }
    
    @font-face {
        font-family: 'Inria Sans';
        src:  url(${InriaSansRegular}) format('truetype');
    }
    
    @font-face {
        font-family: 'Krub';
        src:  url(${KrubRegular}) format('truetype');
    }

    font-family: 'Caudex', 'Caveat', 'Inria Sans', 'Krub', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 28px;

    background-image: url(${backgroundWEBP});
    background-repeat: no-repeat;
    background-size: cover;

    color: ${(p) => p.theme.text}
  }

  a {
    text-decoration: none;
    transition: 275ms;
    color: #4A2E0C;

    &:hover {
        transition: 275ms;
        text-decoration: none;
        color: #9A6D36;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  p {
      margin: 0;
  }
  `;

export const CustomLink = styled.a`
  text-decoration: none;
  transition: 275ms;
  color: #328ce0 !important;

  &:hover {
    transition: 275ms;
    text-decoration: none;
    color: #389af4 !important;
  }
`;
