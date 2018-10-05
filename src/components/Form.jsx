import React, { Component } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom'

class App extends Component {

  state={
    username:'',
    email:'',
    password:'',
    sended:false
  }

  handleChange = name => event => {
    this.setState({
      [name]:event.target.value
    })
    console.log(event.target.value);
    
  }

  handleClick = () => {
    Axios.post('http://localhost:5000/users/register',
    {username:this.state.username,
    email:this.state.email,
    password:this.state.password
    })
    .then(res=> 
      console.log(res),
      this.setState({sended:true}))
    .catch(error=>this.setState({sended:false}))
  }
  
  render() {
    const {username,email,sended,password} = this.state
    return (
      <div className="App">

      <form action="POST">
        <input 
        type="text" 
        name='username' 
        id='username' 
        onChange={this.handleChange('username')}
        value={username}
        />
        <input 
        type="text" 
        name='email' 
        id='email' 
        onChange={this.handleChange('email')}
        value={email}
        />
        <input 
        type="password" 
        name='password' 
        id='password' 
        onChange={this.handleChange('password')}
        value={password}
        />
      </form>

      <button onClick={this.handleClick}>Enviar</button>
      {sended && <Redirect to='/'/>}
      
      </div>
    );
  }
}

export default App;
