import React,{Fragment} from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';

function App() {
  return (
      <Fragment>
        <header>
          <h1>Mi Blog Personal</h1>
          <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/'>Acerca de</Link>
          </nav>
        </header>

        <main>
        <Routes>
          <Route path="/" element={<Inicio />} exact={true}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
        </main>
      </Fragment>
  );
}

export default App;
