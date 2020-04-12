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
                    <h4><>Don't forget it!</></h4>
                    <button onClick={this.handleClick}>New Feedback</button>

                </header>
            </div>
        );
    }
}


export default connect()(Home);
