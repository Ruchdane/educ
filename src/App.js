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
import Enseignant from "./views/Enseignant/Enseignant";
import { Login } from './views/Auth/Login';
import { Register } from './views/Auth/Register';
import { Abonnement } from "./views/Abonnement/Abonnement";


function App() {
    return (
        <Router>
            <Layout>
                <NavBar />
                <Routes>
                    <Route exact path="/educ" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/abonnement" element={<Abonnement />} />
                    <Route exact path="/students" element={<Student current={0} />} />
                    <Route path="/students/messages/repondre" element={<Student current={0} />} />
                    <Route path="/students/messages/actif" element={<Student current={1} />} />
                    <Route path="/students/messages/non-lues" element={<Student current={2} />} />
                    <Route path="/students/messages/sans-reponses" element={<Student current={3} />} />
                    <Route path="/students/notifications" element={<Student current={4} />} />
                    <Route path="/students/cour" element={<Student current={5} />} />
                    <Route exact path="/enseignants" element={<Enseignant current={0} />} />
                    <Route path="/enseignants/messages/repondre" element={<Enseignant current={0} />} />
                    <Route path="/enseignants/messages/actif" element={<Enseignant current={1} />} />
                    <Route path="/enseignants/messages/non-lues" element={<Enseignant current={2} />} />
                    <Route path="/enseignants/messages/sans-reponses" element={<Enseignant current={3} />} />
                    <Route path="/enseignants/notifications" element={<Enseignant current={4} />} />
                    <Route path="/enseignants/cour" element={<Enseignant current={5} />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
