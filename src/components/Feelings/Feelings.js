import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feelings extends Component {
    state = {
        Feelings: 0,
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            Feelings: Number(event.target.value)

        })
        console.log(event.target.value);

    }
    handleSubmit = (event) => {
        if (this.state.Feelings === 0) {
            alert('Please fill out the answer')
        } else {
            event.preventDefault();
            console.log(this.state.feeling);
            this.props.dispatch({ type: 'FeelingsQ', payload: this.state.Feelings })
            this.props.history.push('/Understanding');
        }
    }


    render() {
        return (

            <div className="App">
                <header>how are you feeling today?</header>
                <h4>Feelings</h4>

                <select onChange={this.handleChange} value={this.state.Feelings}>
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


export default connect()(Feelings);

