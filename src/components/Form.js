import React from 'react';


const Form = (props) =>(
    
    <form className="form" onSubmit={props.submit} style={{margin:"2rem"}}>
        <input className="form__input" type="text" name="workerId" />
        <button className="form__button">Search</button>
    </form>
)

export default Form;