import React, { Component } from 'react';
import "./style.css"
import logo from "../../asset/noubti.png"
import {Link} from "react-router-dom"

export default class LoadingPage extends Component {
    render() {
        return (
        <div className="MainLoadingPage">
            <p data-aos="fade-up" className="title">BIENVENUE</p>
            <img data-aos="fade-up" className="logo" src={logo} alt=".." />
            <Link data-aos="fade-down" className="goFor" to="/login" >Connectez-vous</Link>
        </div>
        );
    }
}
