import React, { Suspense } from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<>...</>}>
              <Projects />
            </Suspense>
          }
        />
      </Routes>

      <GlobalStyles />
    </>
  );
}

export default App;
