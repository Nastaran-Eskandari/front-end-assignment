import React, { Component } from 'react';
import Order from './components/Order';
import Form from './components/Form'
import './App.css';



class App extends Component {
  
  state = {
    ordersData: {orders:[]},
   
}

  // fetch for the first time page loads
  componentDidMount() {
    
    fetch("https://www.hatchways.io/api/assessment/work_orders")
      .then(response => response.json())
      .then(data => {
        this.setState({
          ordersData: data,
          });
          console.log(this.state.ordersData.orders);
        })
      .catch(err => {
        console.log(err)
      }); 
      // this.showWorker();
      
      
  }


  render() {
    let allOrders = this.state.ordersData.orders;
    console.log(allOrders);
 
    return (
      <div>
        
        <div>
        <Form />
          </div>  
        <div className = 'main-wrapper'> 
          {allOrders.map((order) => (
              <Order key = {order.id} 
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
