import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Mega from "./pages/Mega";
import Quina from "./pages/Quina";
import Timemania from "./pages/Timemania";
import { megaTheme, quinaTheme, timemaniaTheme } from "./theme";

const App: React.FC = () => {
  return (
    <Router>
      <Nav>
        <Link to="/megasena">Mega-Sena</Link>
        <Link to="/quina">Quina</Link>
        <Link to="/timemania">Timemania</Link>
      </Nav>
      <Routes>
        <Route
          path="/megasena"
          element={
            <ThemeProvider theme={megaTheme}>
              <Mega />
            </ThemeProvider>
          }
        />
        <Route
          path="/quina"
          element={
            <ThemeProvider theme={quinaTheme}>
              <Quina />
            </ThemeProvider>
          }
        />
        <Route
          path="/timemania"
          element={
            <ThemeProvider theme={timemaniaTheme}>
              <Timemania />
            </ThemeProvider>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

// Estilização para a barra de navegação
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f4f4f4;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 1.2rem;

    &:hover {
      color: #0056b3;
    }
  }
`;