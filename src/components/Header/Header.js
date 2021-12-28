import React from 'react'
import student2 from "../../images/people-success.png";
import "./Header.css";


function Header() {
    return (
        <header>
         <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div className="row justify-content-between">
                    <div className="col-sm header-txt">
                        <h5 className="header-title">Educmod propose la première plateforme africaine de classe en ligne</h5>
                        <p className="header-p">Pour tout comprendre, de chez toi.Gain de temps et garantie de résultats: connecte-toi facilement au meilleur de la pédagogie en ligne.</p>
                        <div className="header-content-price mb-3 mt-4">
                            <button type="button" className="btn btn-outline-primary btn-lg header-button">Commence ton essai gratuit</button>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img src={student2} alt="" className="header-img-container"/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;
