import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class Navbar extends Component {
    render() {
        return (
            <Link to={this.props.path} className="NavbarComp">
                    <ArrowBackIcon className="icon"/>
                    <p className="title">{this.props.title}</p>
                </Link>
        );
    }
}

export default Navbar;