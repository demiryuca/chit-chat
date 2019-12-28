import React, { Component } from 'react';
import Chat from "./Chat"
import Login from "./Login"
import fire from './firebase/base';



class App extends Component {
constructor(props){
  super(props);
  this.state = {
      user: {}
  };
  this.authListener = this.authListener.bind(this);
}

componentDidMount(){
  this.authListener();
}
    
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
    console.log(user);
      if (user) {
        this.setState({ user });
      // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
      //  localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
  <div>{this.state.user ? ( <Chat />) : (<Login/> )}</div>  
    );
  }
}

export default App;