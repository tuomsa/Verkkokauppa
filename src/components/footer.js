import React from "react";
import "./styles/footer.css"
import logo1 from "../components/imgVid/scott.png"
import logo2 from "../components/imgVid/specialized.png"
import logo3 from "../components/imgVid/Trek.png"
import logo4 from "../components/imgVid/Orbea2.png"


export default function Footer() {

    return (

        <div className="up">
            <div className="main-footer">
                <div className="container">


                    {/* Logot Footerissa  */}

                <div className="row">
                <div className="logoz">
                <p className="col-sm">
                <img className="logo1"src={logo1}  />
                <img className="logo1" src={logo2}  />
                <img className="logo1" src={logo3}  />
                <img className="logo1" src={logo4}  />
                </p>
                </div>
               
                    </div>

                    <div className="row">
                        {/*column1 vasen*/}
                        <div className="col">
                            <h1>Otsikko</h1>
                            <ul className="list-unstyled">
                                <li> Eka teksti</li>
                                <li> Eka teksti</li>
                                <li> Eka teksti</li>
                            </ul>
                        </div>
                        {/*column2 keski*/}
                        <div className="col">
                            <h1>Otsikko</h1>
                            <ul className="list-unstyled">
                                <li> Eka toka teksti</li>
                                <li> Eka toka teksti</li>
                                <li> Eka toka teksti</li>
                            </ul>
                        </div>
                        {/*column3oikea*/}
                        <div className="col">
                            <h1>Otsikko</h1>
                            <ul className="list-unstyled">
                                <li> Eka toka teksti</li>
                                <li> Eka toka teksti</li>
                                <li> Eka toka teksti</li>
                            </ul>
                        </div>
                    </div>
                    <hl />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} FIUKE | YLEISET EHDOT | TIETOSUOJA | YRITYSINFO | EVÄSTEASETUKSET
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}