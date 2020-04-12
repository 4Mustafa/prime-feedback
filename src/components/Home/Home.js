import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {

    handleClick = (event) => {
        event.preventDefault();
        console.log('Button clicked.');
        this.props.history.push('/Feelings')
    };

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <button onClick={this.handleClick}>New Feedback</button>
            </div>
        );
    }
}


export default connect()(Home);
