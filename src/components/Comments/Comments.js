import React, { Component } from 'react';
import { connect } from 'react-redux';

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

        event.preventDefault();
        console.log(this.state.Comments);
        this.props.dispatch({ type: 'CommentsQ', payload: this.state.Comments })
        this.props.history.push('/Review');

    }


    render() {
        return (

            <div className="App">
                <header>Do you want to leave any comments? </header>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
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


