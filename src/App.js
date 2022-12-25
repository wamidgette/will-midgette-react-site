import React from 'react';
import './global.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
const AppDiv = styled.div`
`;

function App() {
  return (
    <AppDiv className = "app">  
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="title" property="og:title" content="Will Midgette"/>
        <meta name="image" property="og:image" content="https://willmidgette.com/images/header-logo.png"/>      
        <title>Will Midgette</title>
      </Helmet>
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
