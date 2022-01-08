//module
import React from 'react'
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//css
import 'antd/dist/antd.css';
import './App.scss';


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
                    <Route exact path="/educmod" element={<Home />} />
                    <Route exact path="/students"  element={<Student current={0}/>} >
                        
                    </Route>
                    <Route path="/students/messages/repondre" element={<Student current={0} />} />
                    <Route path="/students/messages/actif" element={<Student current={1} />} />
                    <Route path="/students/messages/non-lues" element={<Student current={2} />} />
                    <Route path="/students/messages/sans-reponses" element={<Student current={3} />} />
                    <Route path="/students/notifications" element={<Student current={4} />} />
                    <Route path="/students/cour" element={<Student current={5} />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
