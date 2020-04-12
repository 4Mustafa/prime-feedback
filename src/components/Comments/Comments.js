import React, { Component } from 'react';
import { connect } from 'react-redux';
import './comments.css';

class Comments extends Component {
    state = {
        Comments: '',
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            Comments: event.target.value

        })
        console.log(event.target.value);

    }
    handleSubmit = (event) => {
        if (this.state.Comments === '') {
            alert('Please fill out the answer')
        } else {
            event.preventDefault();
            console.log(this.state.Comments);
            this.props.dispatch({ type: 'CommentsQ', payload: this.state.Comments })
            this.props.history.push('/Review');
        }
    }


    render() {
        return (

            <div className="App">
                <header><h1>  Any comments you want to leave? </h1>
                    <h4>Comments</h4>
                </header>
                <input type='text'
                    value={this.state.Comments}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>NEXT QUESTION </button>
            </div>
        );
    }
}

export default connect()(Comments);


