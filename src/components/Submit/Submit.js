import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";




class Submit extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'Reset' })
        this.props.history.push('/Feelings')
        console.log('in submmit');

    }

    render() {
        return (
            <>
                <h1>submmit another survey</h1>
                <button onClick={this.handleClick}>SEND ME BACK</button>
            </>


        );
    }
}




const putReduxStateOnProps = (reduxStore) => ({
    reduxStore

})

export default connect(putReduxStateOnProps)(withRouter(Submit));
