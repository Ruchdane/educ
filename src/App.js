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
import Student from './views/Student/Student';



function App() {
    return (
        <Router>
            <Layout>
                <NavBar />
                <Routes>
                    <Route exact path="/educ" element={<Home />} />
                    <Route exact path="/students" element={<Student />} />
                    {/* <Route exact path="/students/Repondre a un message" element={<Student />} />
                    <Route exact path="/students/Sujet Actif" element={<Student />} />
                    <Route exact path="/students/Messages Non Lues" element={<Student />} />
                    <Route exact path="/students/Messages sans réponsee" element={<Student />} />
                    <Route exact path="/students/Notifications" element={<Student />} />
                    <Route exact path="/students/Mes cours" element={<Student />} /> */}
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
