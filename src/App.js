import React from 'react';
import { Header } from './components/header'
import { Content } from './components/content'
import { Footer } from './components/footer'

import { Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Content page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
