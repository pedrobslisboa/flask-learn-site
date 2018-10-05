import React, { Component } from 'react'
import Axios from 'axios';

export default class Auth extends Component {

    state = {
        username:'',
        password:''
    }

    validate = () => {
        Axios.post('http://localhost:5000/users/validate',
        {username:this.state.username,
        password:this.state.password
        })
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }

    handleChange = name => e =>{
        this.setState({
            [name]:e.target.value
        })
    }

    render() {
        const { username, password} = this.state

        return (
        <div>
            <form>
                <input type="text" onChange={this.handleChange('username')} value={username} placeholder="Username"/>
                <input type="text" onChange={this.handleChange('password')} value={password} placeholder="Password"/>
                
            </form>
            <button onClick={this.validate}>Validate</button>
        </div>
        )
    }
}
