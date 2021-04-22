import React, { Component } from 'react';
import NavBar from "../shared/navbar"

class Accueil extends Component {
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
            <div className="MainAccueil">
                <NavBar path={"/home/"+this.props.match.params.id} title={this.state.nomAgence}/>
            </div>
        );
    }
}

export default Accueil;