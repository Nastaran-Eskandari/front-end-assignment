import React, { Component } from 'react';
import Order from './components/Order';
import Form from './components/Form'
import './App.css';


class App extends Component {

constructor(props) {
  super(props);
  this.state={
    ordersData: []
  }
} 

  // fetch for the first time page loads
  componentDidMount() {
    
    fetch("https://www.hatchways.io/api/assessment/work_orders")
      .then(response => response.json())
      .then(data => {
        this.setState({
          ordersData: data.orders
          });
        })
      .catch(err => {
        console.log(err)
      }); 
  }


  filterState = (workerId)=>{

    this.setState(prevState=>{
        const newOrdersData = prevState.ordersData.filter(order => order.workerId ===  parseInt(workerId))
        return {ordersData:newOrdersData}
    })
}

  render() {
    let allOrders = this.state.ordersData;
    
    return (
      <div>
        
        <div>
        <Form handleFilter={this.filterState}/>
          </div>  
        <div className = 'main-wrapper'> 
          { allOrders.map((order) => (
              <Order 
              key = {order.id} 
              orderName = {order.name}
              description = {order.description} 
              workerId = {order.workerId}
              deadline = {order.deadline}
              />
            ))
          }            
      
          </div>
        </div>  
        )
      }
    }

export default App;