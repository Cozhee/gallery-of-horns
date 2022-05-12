import React from 'react';
import Form from 'react-bootstrap/Form'

class FormForHorns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableHorns: [],
        };
    }

    componentDidMount() {

        const newArr = []
        this.props.data.filter(item => !newArr.includes(item.horns) ? newArr.push(item.horns) : null)

        this.setState({
            availableHorns: newArr
        })
    }

    render() {
        return (
            <Form.Select onChange={this.props.hornFilterFunction} className="mb-5" aria-label="Default select example">
                <option value={'all'}>Choose the amount of horns</option>
                {this.state.availableHorns.map((horns, idx) => {
                    return (
                        <option key={idx} value={horns}>{horns}</option>
                    )
                })}
            </Form.Select>
        )
    }
}

export default FormForHorns