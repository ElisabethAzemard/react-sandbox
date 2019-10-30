import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    render() {
        return (
            <p>{this.state.date.toLocaleTimeString()}</p>
        )
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState( (prevState) => { date: new Date() } );
    }
}

export default Clock;
