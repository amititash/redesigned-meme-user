import React , { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Idea extends Component {
    render() {
        return (
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item>
                    <h3>Title: {this.props.title}</h3>
                    <h4>Details: {this.props.details}</h4>
                    <h4>Type:{this.props.type}</h4>
                </ListGroup.Item>
            </ListGroup>
        )
        
    }
}

export default Idea;