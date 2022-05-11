import React from 'react';
import HornedBeast from './HornedBeast';
import { Container, Row } from 'react-bootstrap';


class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row style={{ justifyContent: 'center' }} xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                        {this.props.data.map(animal => {
                            return (
                                <HornedBeast
                                    changeModalBehavior={this.props.changeModalBehavior}
                                    key={animal._id}
                                    title={animal.title}
                                    imgUrl={animal.image_url}
                                    description={animal.description}
                                />
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Main