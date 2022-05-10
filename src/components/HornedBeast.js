import React from 'react';
import Card from 'react-bootstrap/Card'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: Math.floor(Math.random() * 101)
        };
    }

    addLikeCounter = () => {
        this.setState({
            votes: this.state.votes + 1
        });
        console.log(this.state.votes)
    }

    render() {
        return (
            <>
                <Card style={{ width: '15rem' }}>
                    <Card.Img onClick={this.addLikeCounter} variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"><FontAwesomeIcon style={{ color: 'red' }} icon={faHeart} /> {this.state.votes}</Card.Footer>
                </Card>
            </>
        )
    }
}

export default HornedBeast