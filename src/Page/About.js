import React, { useEffect, useState } from "react";
// import { statesData } from "../Data/jatimgeo2020.js";
import axios from "axios";
import "./About-Desain.css";
// import {
//     Navbar,
//     NavbarBrand,
//     NavbarToggler,
//     Collapse,
//     Nav,
//     NavLink,
//     NavItem,
//     CardTitle
// } from "reactstrap";

function About() {
  return (
    <div className="">
        <div className="about1">
            <div class="container">
                <div className="card-about-1">
                    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-2">
                        <div class="col col-citra">
                            <div className="card-1">
                                <div className="card-inside">
                                    <div className="month">
                                        <img 
                                            src={require("../Data/citra.jpg").default} 
                                            alt="logo thumbnail"
                                            className="ukuran" 
                                        />
                                    </div>
                                    <div className="get-started">
                                        Oktavia Citra Resmi Rachmawati
                                    </div>
                                    <div className="premium">
                                        2110171018
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div></div> */}
                        <div class="col col-intan">
                            <div className="card-2">
                                <div className="card-inside">
                                    <div className="month">
                                        <img 
                                            src={require("../Data/intan.jpg").default} 
                                            alt="logo thumbnail"
                                            className="ukuran" 
                                        />
                                    </div>
                                    <div className="get-started">
                                        Intan Fitri Rachmawati
                                    </div>
                                    <div className="premium">
                                        2110181005
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="about2">
            <div class="container">
                <div className="card-about-1">
                    <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-2">
                        <div class="col-sm-4 col-ilham">
                            <div className="card-1">
                                <div className="card-inside">
                                    <div className="month">
                                        <img 
                                            src={require("../Data/ilham.jpg").default} 
                                            alt="logo thumbnail"
                                            className="ukuran" 
                                        />
                                    </div>
                                    <div className="get-started">
                                        Ilham Dwi Kurniawan
                                    </div>
                                    <div className="premium">
                                        2110181007
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div></div> */}
                        <div class="col col-nisar">
                            <div className="card-1">
                                <div className="card-inside">
                                    <div className="month">
                                        <img 
                                            src={require("../Data/nisar.jpg").default} 
                                            alt="logo thumbnail"
                                            className="ukuran" 
                                        />
                                    </div>
                                    <div className="get-started">
                                        Muh Nisar Yanuar Utomo
                                    </div>
                                    <div className="premium">
                                        2110181013
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div></div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default About;
