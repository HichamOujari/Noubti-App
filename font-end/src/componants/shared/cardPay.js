import React, { Component } from 'react';
import "./style.css"
import {Link} from "react-router-dom"

const Lien = ({props}) =>{
    if(props.ext===true) return <a rel="noreferrer" href={props.path}>{props.title}</a>
    else return <Link to={props.path}>{props.title}</Link>
}

//img={jiwar}  ext={false} path={"/jiwar"} title
class CardPay extends Component {
    render() {
        return (
            <div className="CardPayComp">
                <img alt="..." src={this.props.img}/>
                <Lien props={this.props} />
            </div>
        );
    }
}

export default CardPay;