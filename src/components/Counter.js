import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    counterAdd = () => {
        this.setState( (prevState) => ({ counter: prevState.counter + 1 }) );
    }

    counterRemove = () => {
        if ( this.state.counter > 0 ) {
            this.setState( (prevState) => ({ counter: prevState.counter - 1 }) );
        }
    }

    render() {
        return (
            <div>
                <button onClick={ this.counterRemove }>-</button>
                <span>{ this.state.counter }</span>
                <button onClick={this.counterAdd }>+</button>
            </div>
        )
    }

}

export default Counter;
