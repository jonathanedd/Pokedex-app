import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import React from 'react';
import Pokedex from './components/Pokedex';
import PokedexInfo from './components/PokedexInfo';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <div className="App">
      
      <h1 className='logo-pokedex'>
        
      </h1>
        <Routes>
          
          <Route path='/' element={<Login />}/>


          {/* Ruta anidada para rutas protegidas */}
          <Route element={<ProtectedRoutes />}> 
            <Route path='/pokedex' element={<Pokedex />}/>
            <Route path='/pokedex/:id' element={<PokedexInfo />}/>
          </Route>


        </Routes>
      
      </div>
    </HashRouter>
  );
}

export default App;
