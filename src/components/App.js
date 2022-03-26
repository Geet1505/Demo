import Users from './Usercard.js';
import './App.css';

import React, { Component } from 'react'
 

class App extends Component {
  constructor(props){
    super(props)

    this.state = {starting: true,users_data :[],loading :false}

  this.updateState = this.updateState.bind(this)
}


updateState(){
  this.setState({starting:false,loading:true})
  const link="https://reqres.in/api/users?page=1";
  fetch(link)
  .then(response => response.json())
  .then((users) => {

    setTimeout(()=>{
      this.setState({starting:false, users_data :users.data, loading:false})
    },2000
    )


  })
  .catch((error) => {
    console.error(error)
  })
  }

  render(){
    return (<>
    <div className='container'>
     
        <div className='div-logo'>
          <h1 className='"logo-text' style={{display:"flex", margin:"50px 200px"}} 
> Tours And Travels</h1>
      
        <nav className='Travel nav'>
        <button type="button" className="btn btn-primary btn-lg" style={{display:"flex", margin:"-75px 600px"}} onClick={this.updateState}>Get users</button>


        </nav>
        </div>
    
    </div>
    
    <div
        class="bg_image"
      >
         
      </div>
      <div className="container">
        {
          this.state.starting? (<h2 className="Container"> </h2>
          ): <Users loading ={this.state.loading} users={this.state.users_data}/>
        }
      </div>
      </>
      )
  }

}

export default App;
