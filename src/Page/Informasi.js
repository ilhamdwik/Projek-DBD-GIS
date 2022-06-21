import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Polygon, Popup, Marker } from "react-leaflet";
import { statesData } from "../Data/jatimgeo2020.js";
// import L from "leaflet";
import axios from "axios";
import "./Informasi-Desain.css";

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   Collapse,
//   Nav,
//   NavLink,
//   NavItem,
//   CardTitle
// } from "reactstrap";

function Informasi() {
  return (
    <div>
        <div className="news1">
            <div className="container">
                <div className="card-informasi-1">
                    <div class="row row-cols-2 row-cols-lg-8 g-2 g-lg-2">
                        <div class="col">
                            <h3>Penyakit Demam Berdarah</h3>
                            <p style={{textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div class="col">
                            <img
                                alt="..."
                                className="image"
                                style={{
                                transform:
                                    "scale(1) perspective(1040px) rotateY(20deg) rotateX(-2deg) rotate(-2deg)",
                                }}
                                src={require("../Data/nyamuk.jpg").default} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="news2">
            <div className="container">
                <div className="card-informasi-2">
                    {/* <div class="row row-cols-2 row-cols-lg-8 g-2 g-lg-2">
                        <div class="col"> */}
                            <h3>Penyebab Demam Berdarah</h3>
                            <p style={{textAlign: "justify"}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        {/* </div> */}
                        {/* <div class="col">
                            <img
                                alt="..."
                                className="image"
                                style={{
                                transform:
                                    "scale(1) perspective(1040px) rotateY(20deg) rotateX(-2deg) rotate(-2deg)",
                                }}
                                src={require("../Data/nyamuk_dbd.jpg").default} 
                            />
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
        <div className="news3">
            <div className="container">
                <div className="card-informasi-3">
                    {/* <div class="row row-cols-2 row-cols-lg-8 g-2 g-lg-2">
                        <div class="col"> */}
                            <h3>Faktor Resiko Demam Berdarah</h3>
                            <p style={{textAlign: "justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        {/* </div> */}
                        {/* <div class="col">
                            <img
                                alt="..."
                                className="image"
                                style={{
                                transform:
                                    "scale(1) perspective(1040px) rotateY(20deg) rotateX(-2deg) rotate(-2deg)",
                                }}
                                src={require("../Data/nyamuk_dbd.jpg").default} 
                            />
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    </div>
  );
}
export default Informasi;
