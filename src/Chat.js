import React from 'react';
import io from 'socket.io-client';
import fire from './firebase/base';

class Chat extends React.Component {
  
constructor(props){
  
    super(props);
    this.logout = this.logout.bind(this);
     this.state = {
        username: "",
        message: "",
        email: this.user,
        alert: "",
        messages: []
     };

     var user = fire.auth().currentUser;
    
     if (user != null) {
       this.state.email = user.email;
     }

     this.socket = io('localhost:8080');
     
  this.sendMessage = ev => {
    
    ev.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
     
        author: this.state.email,
        message: this.state.message,
        
    });
    this.setState({message: ''});
   }


    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });

    const addMessage = data => {
  
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
      }
 

      
}

logout() {
  fire.auth().signOut();
}

    render() {
      return(
<div className="container">
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-title">Chit Chat</div>
          <button onClick={this.logout} className="btn btn-danger logout-button">Çıkış Yap</button>
          <hr/>

          <div className="messages">
        {this.state.messages.map(message => {
            return (
        <div>{message.author}: {message.message}</div>
            )
        })}
           </div>
         </div>

        <form onSubmit={this.sendMessage} className="card-footer">
           
           <input required type="text" placeholder="Mesaj" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})} className="form-control"/>
           <br/>
           <button className="btn btn-primary form-control">Gönder</button>
        </form>

      </div>
    </div>
  </div>
</div>
      )
    }
}

export default Chat;