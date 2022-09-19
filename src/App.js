import React from 'react'
import {Routes,Route,NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Inicio from './pages/Inicio';
import Blog from './pages/Blog';
import AcercaDe from './pages/AcercaDe';
import Post from './components/Post';
import Error404 from './components/Error404';
import Styles from './App.module.css';

function App() {
  return (
    <Div>
      <Header>
        <H1>Mi Blog Personal</H1>
        <Nav>
          <NavLink className={(navData) => navData.isActive? Styles.activa:''}to='/inicio'>Inicio</NavLink>
          <NavLink className={(navData) => navData.isActive? Styles.activa:''}to='/blog'>Blog</NavLink>
          <NavLink className={(navData) => navData.isActive? Styles.activa:''}to='/acerca-de'>Acerca de</NavLink>
        </Nav>
      </Header>
      <Main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} exact={true} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Main>
    </Div>
  );
}

export default App;



/* Styled Components */

const Div = styled.div`
  padding: 40px;
  //width: 90%;
  //max-width: 700px;
  width: 600px;
`;

const Nav = styled.nav`
  a{ //NavLink es un "a", podemos darle estilos
    text-decoration: none;
    color: #57B6DB;
    margin: 0 10px;
    &:hover{      
      border-bottom: 2px solid #57B6DB;
      padding-bottom: 3px;
    }
    &:active{ //Cuando le estamos dando click
      border-bottom: 2px solid #00FF00;
    }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const H1 = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Main = styled.main`
  background-color: #404040;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(129,129,129, .1);
`;

