import React from "react";
import "./footer.css"




export default function Footer() {
    return (
<div className="main-footer">
    <div className="container">
        <div className="row">
            {/*column1 vasen*/}
            <div className="col-1">
                <h1>Otsikko</h1>
                <ul className="list-unstyled">
                <li> Eka teksti</li>
                <li> Eka teksti</li>
                <li> Eka teksti</li>
                </ul>
            </div>
            {/*column2 keski*/}
            <div className="col-2">
                <h1>Otsikko</h1>
                <ul className="list-unstyled">
                <li> Eka toka teksti</li>
                <li> Eka toka teksti</li>
                <li> Eka toka teksti</li>
                </ul>
            </div>
                {/*column3oikea*/}
                <div className="col-3">
                <h1>Otsikko</h1>
                <ul className="list-unstyled">
                <li> Eka toka teksti</li>
                <li> Eka toka teksti</li>
                <li> Eka toka teksti</li>
                </ul>
            </div>
            </div>
            <hl/>
                <div className="row">
                    <p className="col-sm">
                &copy;{new Date().getFullYear()} FIUKE | YLEISET EHDOT | TIETOSUOJA | YRITYSINFO | EVÄSTEASETUKSET
                    </p>

                </div>
    </div>



    
  </div>
    )
  }