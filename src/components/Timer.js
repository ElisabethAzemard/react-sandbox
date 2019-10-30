import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.buttonState = "Start";
        this.state = {
            timerLabel: props.label,
            timeSet: props.time,
            timeLeft: props.time,
            timerRunning: false,
        };
    }

    tick() {
        this.setState((prevState) => ({ timeLeft: prevState.timeLeft - 1 }));

        if (this.state.timeLeft == 0) {
            clearInterval(this.timerID);
            this.buttonState = "Finished";
        }

    }

    handleTimerClick = () => {
        if (!this.state.timerRunning) {
            this.setState((prevState) => ({ timerRunning: true }));
            this.buttonState = "Stop";

                this.timerID = setInterval(() => this.tick(), 1000);

        } else {
            clearInterval(this.timerID);
            this.setState((prevState) => ({ timerRunning: false }));
            this.buttonState = "Start";
        }
    }

    resetTimer = () => {
        this.setState((prevState) => ({ timeLeft: prevState.timeSet }));
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h2>{ this.state.timerLabel }</h2>
                <p>{ this.state.timeLeft }</p>
                {this.state.timeLeft == 0 && <p>Finished!</p> }
                <button onClick={ this.handleTimerClick }>{ this.buttonState }</button>
                <button onClick={this.resetTimer}>Reset</button>
            </div>
        )
    }

}

export default Timer;
