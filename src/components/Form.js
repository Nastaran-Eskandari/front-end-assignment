import React, { Component } from 'react';

class Form extends Component{
    handleSubmit = (e)=>{
        e.preventDefault();
        const workerId = e.target.workerId.value;
        this.props.handleFilter(workerId)
    }
    render() {

    return(
        <form className="form" onSubmit={this.handleSubmit} style={{margin:"2rem"}}>
            <input className="form__input" type="text" name="workerId" />
            <button className="form__button">Search</button>
        </form>
    )}
}
export default Form;