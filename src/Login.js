import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import ruwasa from './img/ruwasa.jpg'
import  Loader from 'react-loader-spinner'

//import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
   // let login = 'stop';
    this.state = {
      redirect: false,
      email : '',
      phone: '',
      acttype:'',
      loading: false,
      login: 'stop',
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



  onSubmit=(e)=>{
    e.preventDefault()
    this.setState({
      loading: true
    })
    let data={
      pword: this.state.phone,
      email: this.state.email
    }
    axios.post('https://ruwassa.herokuapp.com/api/v1/users/authsign',data)
    .then(res => {
      if (res.data['status'] === 'success') {
      localStorage.setItem('acttype', res.data['data'].type);
   //   localStorage.setItem('token', 'res.data.token');
     
      this.setState({
        login: 'pass',
        loading: false,
        redirect: true
       });
       localStorage.setItem('login', 'pass');
       return <Redirect to='/home'> </Redirect>

      }else{
        this.setState({
          loading:false
        })
        localStorage.setItem('login', 'stop');
        const error = new Error(res.error);
        throw error;
      }
    //  return < Redirect to="/home"/>
    //  alert(JSON.stringify(res.data['data'].userId))
    }).catch(e=>{
      console.error(e);
      this.setState({
        loading:false
      })
      localStorage.setItem('login', 'stop');
    // return <Redirect to='/home'> </Redirect>
      alert('Error logging in  please try again');
      alert(e)
    
    })
    
  }
  



  onSubmit1 = (event) => {
    this.setState({
      loading: true
    })
    event.preventDefault();
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/admin/'+this.state.email)
    .then(res => {
      // alert(res.data[0].phone)
  // alert(res.data[0].role)
        
      if (res.data[0].phone == this.state.phone & res.data[0].role=='admin') {
       // return < Redirect to="/home"/>
      // alert('youre in')
       this.setState({
         login: 'pass',
         token:  res,
         loading: false

        });
        this.componentDidMount()
        localStorage.setItem('login', this.state.login);
        localStorage.setItem('acttype', res.data[0].acttype);
        localStorage.setItem('token', 'res.data.token');
        return <Redirect to='/home'> </Redirect>
       // return < Redirect to="/home"/>
              // this.props.history.push('/home');
      } else {
        localStorage.setItem('login', 'stop');
        const error = new Error(res.error);
        throw error;
     //   alert('not in')
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
componentDidMount = ()=>{
  
 const acc = localStorage.getItem('login')
 if (acc == 'pass'){

   this.setState({
     login: 'pass'
   })
   return <Redirect to='/home'> </Redirect>

 }
}


  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/home'/>;
    }

    if (this.state.login === 'pass'){
    //  alert('ff')
   return <Redirect to='/home'> </Redirect>
 }
  

    
      
   
    
    return (
      <div >
      <form className="Container border col-md-3 mx-auto border-primary" style={{margin:20}} onSubmit={this.onSubmit}>
        <div>
                    <div >  <img className='  responsive-image' style={{width:'70%'}}
                                                        src={ruwasa}

                    alt='Logo'
                                    />
                                    </div>
        </div>
        <h1>Login Below!</h1>
        {this.state.loading &&
        <Loader type="Circles" color="Blue"/> }
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
          type="password"
          name="phone"
          placeholder="Password"
          value={this.state.phone}
          onChange={this.handleInputChange}
          required
        /></td></tr>
<tr><td>        <input type="submit" value="Login"/>
    </td></tr></table></div>  </form>
  </div>
    );
  }
}