import React, { Component } from 'react';

import UserInput from './IO/UserInput';
import UserOutput from './IO/UserOutput';
import './App.css';

class App extends Component {
  state={
    usernames:[
      {name:"Sanjog", username:"sanjogj43"},
      {name:"Rahul", username:"rahulsohan007"},
      {name:"Punita", username:"punita003"}
    ]
  };

  changeUsernameHandler=()=>{
    this.setState({
      usernames:[
        {name:"Sanjog", username:"sanjogj43"},
        {name:"Rahul", username:"rahulsohan007"},
        {name:"Punita", username:"punita003"}
      ]  
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.usernames[0].username}/>
        <UserI>
        <UserOutput username={this.state.usernames[1].username}/>
      </div>
    );
  }
};

export default App;
