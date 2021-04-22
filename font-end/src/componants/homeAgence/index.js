import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import acc from "../../asset/accueil/accueil.png"
import pay from "../../asset/accueil/paiament.png"
import Navbar from "../shared/navbar"

class HomeAgence extends Component {
    data = [
        {
            id:1,
            nom:"Redal agence Hassan",
            distance:"5 Km",
            att:4,
        },{
            id:2,
            nom:"Redal agence Agdal",
            distance:"10 Km",
            att:8,
        },{
            id:3,
            nom:"Redal agence Hay Salam",
            distance:"15 Km",
            att:3,
        },{
            id:4,
            nom:"Redal agence Harhoura",
            distance:"17 Km",
            att:11,
        },{
            id:5,
            nom:"Redal agence Témara",
            distance:"20 Km",
            att:2,
        }
    ]
    state={
        AgenceName:"",
        id:0
    }
    componentDidMount(){
        this.setState({
            id:this.props.match.params.id
        })
        this.data.map((ele,index)=>{
            if(ele.id===parseInt(this.props.match.params.id)){
                this.setState({
                    AgenceName:ele.nom
                })
            }
        })
    }
    render() {
        return (
            <div className="MainHomeAgence">
                <Navbar path={"/home"} title={this.state.AgenceName} />
                <div className="content">
                    <div className="Accueil">
                        <Link to={"/accueil/"+this.state.id} className="left">
                            <img alt="Accueil" src={acc}/>
                            <p className="title">Accueil</p>
                        </Link>
                        <div className="right">
                            <div className="nbr_Icon">
                                <p className="nbr">2</p>
                                <SupervisorAccountIcon className="icon"/>
                            </div>
                            <p className="text">En file d'attente</p>
                        </div>
                    </div>
                    <div className="pay">
                        <Link to={"/paiement/"+this.state.id} className="left">
                            <img alt="Accueil" src={pay}/>
                            <p className="title">Paiement</p>
                        </Link>
                        <div className="right">
                            <div className="nbr_Icon">
                                <p className="nbr">2</p>
                                <SupervisorAccountIcon className="icon"/>
                            </div>
                            <p className="text">En file d'attente</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeAgence;