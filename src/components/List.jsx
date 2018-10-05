import React, { Component } from 'react'
import '../App.css'
import Axios from 'axios';

export default class List extends Component {

    state = {
        users:[]
    }


    componentWillMount(){
        this.getList()
    }

    getList = () => {
        Axios.get('http://localhost:5000/users/')
        .catch(error=>console.log(error))
        .then(res=> {
            this.setState({users:res.data})
            console.log(res)
        })
    }

    handleClick = (id) =>{
        Axios.post('http://localhost:5000/users/delete',{id:id})
        .then(res=> this.getList())
    }

  render() {

    const {users} = this.state

    return (
      <div>
        
            {users.map(n=>
                <div className="about-user" key={n.id}>
                    <div onClick={()=>this.handleClick(n.id)}>User: {n.username}</div>
                    <div>Password Hash: {n.password_hash}</div>
                </div>
                )}
 
      </div>
    )
  }
}
