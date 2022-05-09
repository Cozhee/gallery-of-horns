import React from 'react';

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img style={{ width: 200 }} title="horned" alt="text for it" src={this.props.imageUrl}></img>
                <p>{this.props.description}</p>
                <hr></hr>
            </>
        )
    }
}

export default HornedBeast