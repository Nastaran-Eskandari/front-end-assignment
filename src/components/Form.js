import React, { Component } from 'react';

class Form extends Component{
      
    render() {

    return(
        <form className="form" onSubmit={this.props.submit} style={{margin:"2rem"}}>
            <input className="form__input" type="text" name="workerId" />
            <button className="form__button">Search</button>
        </form>
    )}
}



export default Form;