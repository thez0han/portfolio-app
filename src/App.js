import logo from './logo.svg';
import './App.css';
import NavbarComponent from './Components/NabarComponent';
import {
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom'
import { Classes } from '@blueprintjs/core';
import EssayComponent from './Components/EssayComponent';
import ProjectComponent from './Components/ProjectsComponent';


function App() {
  return (
    <div className= {Classes.DARK} 
      style= {{ 
        paddingLeft: 45, 
        paddingRight: 45,
        paddingTop: 30
      }}
      >
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/philosophy" element={<EssayComponent/>}/>
          <Route path="/projects" element={<ProjectComponent/>}  />
        </Routes>      
      </BrowserRouter>


    </div>
  );
}

export default App;
