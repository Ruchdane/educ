//module
import React from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//css
import 'antd/dist/antd.css';
import './App.css';


//components
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home/Home';




function App() {
    return (
        <Router>
            <Layout>
                <NavBar/>
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                </Routes>
            </Layout>    
        </Router>
    )
}

export default App
