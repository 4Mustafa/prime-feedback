import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
    state = {
        Understanding: 0,
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            Understanding: Number(event.target.value)

        })
        console.log(event.target.value);

    }
    handleSubmit = (event) => {
        if (this.state.Understanding === 0) {
            alert('Please fill out the answer')
        } else {
            event.preventDefault();
            console.log(this.state.Understanding);
            this.props.dispatch({ type: 'UnderstandingQ', payload: this.state.Understanding })
            this.props.history.push('/Support');
        }
    }


    render() {
        return (

            <div className="App">
                <header>How well are you understanding the content?</header>

                <select onChange={this.handleChange} value={this.state.Understanding}>
                    <option value='' >Select</option>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </select>
                <button onClick={this.handleSubmit}>NEXT QUESTION </button>
            </div>
        );
    }
}


export default connect()(Understanding);



