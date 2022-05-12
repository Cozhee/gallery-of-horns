import React from 'react';
import HornedBeast from './HornedBeast.js';
import FormForHorns from './FormForHorns'
import { Container, Row } from 'react-bootstrap';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            horns: null,
            data: this.props.data
        };
    }

    hornFilterFunction = (e) => {

        if (isNaN(e.target.value)) {
            this.setState({
                data: this.props.data
            })
        } else {
            const amount = parseInt(e.target.value)
            const newData = this.props.data.filter(animal => animal.horns === amount)
            console.log(newData)
            this.setState({
                data: newData
            })
        }
    }

    render() {
        return (
            <>
                <Container>
                    <FormForHorns hornFilterFunction={this.hornFilterFunction} data={this.props.data} />
                    <Row style={{ justifyContent: 'center' }} xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                        {this.state.data.map(animal => {
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