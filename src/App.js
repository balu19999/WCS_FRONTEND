import React,{ Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import LoginContainer from './container/LoginContainer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/login" element={<LoginContainer />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
