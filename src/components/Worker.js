import React, { Component } from 'react';

class Worker extends Component{
  render()
  {
      return(
            <div className = "worker">
              <div className = "worker-img">
                <img src = {this.props.image} />
              </div>
              <div className = "worker-info">
                <p > <span className = 'bold'>Name : </span> {this.props.name}</p>
                <p > <span className = 'bold'>Email : </span>{this.props.email}</p>
                <p > <span className = 'bold'>CompanyName : </span>{this.props.companyName}</p>
              </div>
              
            </div>
    )
  }

}
export default Worker;
