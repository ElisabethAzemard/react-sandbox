import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    count = () => {
        this.setState( (prevState) => ({ counter: prevState.counter + 1 }) );
    }

    render() {
        return (
            <button onClick={ this.count }>You clicked me { this.state.counter } time(s)</button>
        )
    }

}

export default Counter;
