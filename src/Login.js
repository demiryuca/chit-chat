import React, { Component, useState } from 'react';
import fire from './firebase/base';


class Login extends Component {
constructor(props){
  super(props);
  this.login = this.login.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.signup = this.signup.bind(this);
  this.state = {
    email:'',
    password:''
  }
}




login(e) {
  e.preventDefault();
  fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).catch((error) => {
      console.log(error);
    });
}


signup(e){
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).then((u)=>{console.log(u)})
  .catch((error) => {
      console.log(error);
    })
}

handleChange(e) {

  this.setState({ [e.target.name]: e.target.value });
}



  render() {

    return (
    <div>
     <div className="col-md-6">
    <form>
      <div className="form-group">
       <label for="exampleInputEmail1">Email adresi</label>
       <input required value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
       <small id="emailHelp" className="form-text text-muted">Email adresinizi başkalarıyla asla paylaşmayacağız.</small>
      </div>
       <div className="form-group">
      <label for="exampleInputPassword1">Şifre</label>
      <input required value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Şifre" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Giriş Yap</button>
      <button type="submit" onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success form-control">Kaydol</button>
    </form>
 
 </div>
    </div>
    );
  }
}

export default Login;

   


    

      





