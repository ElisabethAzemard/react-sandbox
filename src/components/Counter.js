import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleClick = (step) => {
        this.setState( (prevState) => ({ counter: prevState.counter + step }) );
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.handleClick(-1) }>-</button>
                <span>{ this.state.counter }</span>
                <button onClick={ () => this.handleClick(1) }>+</button>
            </div>
        )
    }

}

export default Counter;
