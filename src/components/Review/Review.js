import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import Axios from 'axios';




class Review extends Component {

    submitFeedback = () => {
        Axios.post('/feedback', this.props.reduxStore.feedBack)
            .then(response => {
                console.log('added feedback');

            }).catch(error => {
                console.log('got an error');
            })
        this.props.history.push('/submit')
    }

    render() {
        const feedBack = this.props.reduxStore.feedBack
        return (
            <div className='review'>
                <header>Review your feedBack</header>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>feelings:   {feedBack.Feeling} </p>
                <p>understanding:   {feedBack.Understanding} </p>
                <p>support:   {feedBack.Support}</p>
                <p>comments:   {feedBack.Comments} </p>
                <button onClick={this.submitFeedback}>SUBMIT</button>

            </div>
        );
    }
}




const putReduxStateOnProps = (reduxStore) => ({
    reduxStore

})

export default connect(putReduxStateOnProps)(withRouter(Review));
