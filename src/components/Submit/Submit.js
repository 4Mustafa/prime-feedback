import React, { Component } from 'react';
import { connect } from 'react-redux';




class Submit extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'Reset' })
        this.props.history.push('/Feelings')
        console.log('in submmit');

    }

    render() {
        return (
            <>
                <header> Tnak you for your feedback</header>
                <h1>click the button below to submit more feedback</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={this.handleClick}>Submit feedback </button>

            </>


        );
    }
}






export default connect()(Submit);
