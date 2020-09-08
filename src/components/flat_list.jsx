import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

    renderList = () => {
        return this.props.flats.map((flat, index) => {
            return (
                <Flat 
                    flat={flat}
                    key={flat.lat}
                    selected={flat.lat === this.props.selectedFlat.lat}
                    index={index}
                    selectFlat={this.props.selectFlat}
                    // key={flat.name}
                    // name={this.props.name} 
                    // imageUrl={this.props.imageUrl} 
                    // price={this.props.price}
                    // priceCurrency={this.props.priceCurrency}
                />
            );
        });
    };

    render() {
        return (
            <div className="flat-list">
                {this.renderList()}
            </div>
        );
    }
}


export default FlatList;