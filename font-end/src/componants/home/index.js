import React, { Component } from 'react';
import Maps from "./maps"
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import "./style.css"

const Ele = ({title,distance,att,ID,path,IdAgence}) =>{
    return (<div key={ID} className="eleListAgence">
        <p onClick={()=>select(IdAgence,path)} className="title">{title}</p>
        <div>
            <p className="distance">{distance}</p>
            <div className="att">
                <p className="title">{att}</p>
                <SupervisorAccountIcon className="icon" />
            </div>
        </div>
    </div>)
}

const select = (IdAgence,path)=>{
    document.location.href=path+"/home/"+IdAgence
}

class Home extends Component {
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

    render() {
        return (
            <div className="MainHome">
                <Maps />
                <GpsFixedIcon  className="MyPositonIcon notdisplayListAgence"/>
                <div onClick={(e)=>{
                    e.target.classList.toggle("displayListAgence")
                }} className={"listOfAgence"}>
                    <p className="chrta"></p>
                    <div className="Eles">
                        {
                            this.data.map((ele,index)=>{
                                return (<Ele ID={index} IdAgence={ele.id} path={this.props.path} title={ele.nom} distance={ele.distance} att={ele.att} />)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;