import React, { Component } from 'react';
import "./style.css"
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps"

function Map(){
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:34.020795,lng:-6.830915}}
        />
    )
}

const WrapperMap = withScriptjs(withGoogleMap(Map))

class Maps extends Component {
    render() {
        return (
            <div style={{position:"absolute",bottom:0, width:'100%',height:'100vh'}}>
                <WrapperMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key"}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}
                />
            </div>
        );
    }
}

export default Maps;