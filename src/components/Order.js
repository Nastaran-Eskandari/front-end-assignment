import React, { Component } from 'react'
import Worker from './Worker'
import Form from './Form'
import Moment from 'react-moment';
import '../App.css'


class Order extends Component {
state={
    workersData :{worker:[]}
}

componentDidMount() {
    let workerId = this.props.workerId;
    fetch(`https://www.hatchways.io/api/assessment/workers/${workerId}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            workersData: data,
          });
          console.log(this.state.workersData);
        })
        .catch(err => {
          console.log(err)
        });  
    }

   
    

    render()
    
    {
        let workerId = this.props.workerId;
        console.log(workerId);

        return(
            
            <div className ='order-card'>
                <div >
                    <p>{this.props.orderName}</p>
                    <p>{this.props.description}</p>
                </div>
                <Worker name = {this.state.workersData.worker.name}
                        email = {this.state.workersData.worker.email}
                        companyName = {this.state.workersData.worker.companyName}
                        image = {this.state.workersData.worker.image}/>
                       <div className="order-card-time"><span className = 'bold'>Deadline :</span><Moment format="YYYY/MM/DD HH:mm">{this.props.deadline}</Moment></div> 
            </div>
        )
    }

}
export default Order;