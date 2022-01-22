import React from 'react'
import "./Home.css";
import Header from "../../components/Header/Header";

import {Link} from "react-router-dom";
import burger from '../../images/wepik.png';
import Footers from '../../components/Footer/Footers';


function Home() {
    return <>
            <Header/>
            <section className="container-fluid first-section-home">
                <div className="row">
                    <div className="col-md first-section-home-img">
                        <img src={burger} alt="" className="first-section-home-img-burger"/>
                    </div>
                    <div className="col-md first-section-home-div">
                        <span className="first-section-home-div-preH2">À propos d'Educmod</span>
                        <h2 className="first-section-title">
                        La plateforme 100% sûre
                        </h2>

                        <p className="first-section-paragraphe">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, odit fuga consectetur quidem omnis sapiente possimus, rem impedit quaerat porro nesciunt dolorem atque ullam cum accusamus dicta et. Quaerat rerum, sit quo quis accusantium quibusdam! Est neque nesciunt rerum repudiandae commodi vitae? Vitae saepe alias ad, fuga error placeat nesciunt?
                        </p>

                        <button type="button" className="btn btn-outline-primary btn-lg">Abonnes-toi</button>
                    </div>
                </div>
            </section>
            <section className="card-list-homepage justify-content-center">
                <div className="container ">
                    <div className="row card-list">
                    <h3 className="card-list-title">Educmod vous propose </h3>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Correction de TDs</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="#" className="btn btn-primary">En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm ">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Cours de maison</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="#" className="btn btn-primary">En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Préparation aux examens</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="#" className="btn btn-primary">En savoir plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footers/>
        </>
}


export default Home;
