import React, { Component } from 'react';
import NavBar from "../shared/navbar"
import online from "../../asset/pay/online.png"
import jiwar from "../../asset/pay/jiwar.png"
import prendreTicket from "../../asset/pay/prendreTicket.png"
import autre from "../../asset/pay/autre.png"
import CardPay from "../shared/cardPay"
import "./style.css"

class Paiement extends Component {
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
        nomAgence:""
    }
    componentDidMount(){
        this.data.map(ele=>{
            if(ele.id=== parseInt(this.props.match.params.id)){
                this.setState({
                    nomAgence:ele.nom
                })
            }
        })
    }
    render() {
        return (
            <div className="MainPaiement">
                <NavBar path={"/home/"+this.props.match.params.id} title={this.state.nomAgence}/>
                <div className="content">
                    <CardPay img={online} ext={true}  path={"https://www.redalclient.ma/#/paiements"} title={"En Ligne"} />
                    <CardPay img={jiwar}  ext={false} path={"/jiwar"} title={"Dans Nos Espaces JIWAR"} />
                    <CardPay img={autre}  ext={true}  path={"https://www.redal.ma/fr/votre-agence-ligne/vos-services-distance/solutions-alternatives-paiement"} title={"Autres Solutions"} />
                    <CardPay img={prendreTicket} ext={false} path={"/accueil/"+this.props.match.params.id} title={"Prendre Un Ticket"} />
                </div>
            </div>
        );
    }
}

export default Paiement;