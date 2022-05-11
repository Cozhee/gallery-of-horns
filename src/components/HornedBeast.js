import React from 'react';
import { Card, Col } from 'react-bootstrap'
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
    }

    selectedBeast = () => {
        this.props.changeModalBehavior(this.props.title, this.props.description, this.props.imgUrl, this.state.votes)
    }

    render() {
        return (
            <Col>
                <Card className="h-100 mx-auto" style={{ maxWidth: '20rem' }}>
                    <Card.Img onClick={this.selectedBeast} variant="top" src={this.props.imgUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer><FontAwesomeIcon onClick={this.addLikeCounter} style={{ color: 'red' }} icon={faHeart} /> {this.state.votes}</Card.Footer>
                </Card>
            </Col>
        )
    }
}

export default HornedBeast