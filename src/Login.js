import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
//import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    let login = 'stop';
    this.state = {
      email : '',
      phone: '',
      login,
      token: {
        status: 'dd',
        data:{
          token: 'ttttggdvd',
          id: 'id'
        },
      },
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/signin/'+this.state.email)
    .then(res => {
      //  alert(res.data[0].phone)
        
      if (res.data[0].phone === this.state.phone) {
       // return < Redirect to="/home"/>
      // alert('youre in')
       this.setState({
         login: 'pass',
         token:  res,
        });
        localStorage.setItem('login', this.state.login);
        localStorage.setItem('token', 'res.data.token');

       // return < Redirect to="/home"/>
              // this.props.history.push('/home');
      } else {
        localStorage.setItem('login', 'stop');
        const error = new Error(res.error);
        throw error;
        alert('not in')
      }
    }
    )
    .catch(err => {
      console.error(err);
       localStorage.setItem('login', 'stop');
     // return <Redirect to='/home'> </Redirect>
       alert('Error logging in  please try again');
    });
    
  }

  render() {
   
    if (this.state.login === 'pass'){
   return <Redirect to='/home'> </Redirect>
 }
  

    
      
   
    
    return (
      <div >
      <form className="Container" onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <div className="table">
<table align="center" ><tr><td>        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        /></td></tr>
       
       <tr><td> <input
          type="phone no"
          name="phone"
          placeholder="Phone no."
          value={this.state.phone}
          onChange={this.handleInputChange}
          required
        /></td></tr>
<tr><td>        <input type="submit" value="Submit"/>
    </td></tr></table></div>  </form>
  </div>
    );
  }
}