import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    state = {
        Support: 0,
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            Support: Number(event.target.value)
        })
        console.log(event.target.value);

    }
    handleSubmit = (event) => {
        if (this.state.Support === 0) {
            alert('Please fill out the answer')
        } else {
            event.preventDefault();
            console.log(this.state.Support);
            this.props.dispatch({ type: 'SupportQ', payload: this.state.Support })
            this.props.history.push('/Comments');
        }
    }


    render() {
        return (

            <div className="App">
                <header> How well are you being supported?  </header>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <select onChange={this.handleChange} value={this.state.Support}>
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


export default connect()(Support);



