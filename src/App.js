import React from 'react';
import './global.scss';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import styled from 'styled-components'

const AppDiv = styled.div`

`;

function App() {
  return (
    <AppDiv className = "app">  
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </AppDiv>
  );
}
export default App;
