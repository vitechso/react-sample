import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/footer'
import Main from './components/Main'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer/>
      </div>
    )
  }
}
export default App
