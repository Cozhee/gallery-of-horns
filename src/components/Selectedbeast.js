import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Selectedbeast extends React.Component {
    render() {
        return (
            <>


                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ padding: 0 }}>
                    <img className="img-fluid w-100" alt={this.props.title} src={this.props.imgUrl} />
                    {this.props.description}
                </Modal.Body>

                <Modal.Footer className="justify-content-between">
                    <div>
                        <FontAwesomeIcon style={{ color: 'red', marginRight: 4 }} icon={faHeart} />
                        {this.props.votes}
                    </div>
                    <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
                </Modal.Footer>

            </>
        )
    }
}

export default Selectedbeast