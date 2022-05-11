import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/Caudex/Caudex-Bold.ttf';
import '../assets/fonts/Caudex/Caudex-BoldItalic.ttf';
import '../assets/fonts/Caudex/Caudex-Italic.ttf';
import '../assets/fonts/Caudex/Caudex-Regular.ttf';
import '../assets/fonts/Caveat/Caveat-Bold.ttf';
import '../assets/fonts/Caveat/Caveat-Medium.ttf';
import '../assets/fonts/Caveat/Caveat-Regular.ttf';
import '../assets/fonts/Caveat/Caveat-SemiBold.ttf';
import backgroundWEBP from '../assets/images/background.webp';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body {

    margin: 0 3rem;
    min-height: 100vh;

    @font-face {
        font-family: 'Caudex';
        src: local('Caudex'), url('../assets/fonts/Caudex/Caudex-Regular.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'Caveat';
        src: local('Caveat'), url('../assets/fonts/Caveat/Caveat-Regular.ttf') format('truetype');
    }

    font-family: 'Caveat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
