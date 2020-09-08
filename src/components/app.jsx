import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Flat from './flat';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            selectedFlat: flats[0],
            flats
        }
    }

    selectFlat = (index) => {
        this.setState({
            selectedFlat: flats[index]
        });
    }

    render() {
        return (
            <div>
                <div className="flat-list">
                    <FlatList 
                        flats={flats} 
                        selectFlat={this.selectFlat}
                        selectedFlat={this.state.selectedFlat}
                    />
                </div>
                {/* <div className="map-container">
                    <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                        
                    </GoogleMapReact>  
                </div> */}
            </div>
        );
    }
}

export default App;