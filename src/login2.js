import React, { Component,useContext,useEffect,useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import ruwasa from './img/ruwasa.jpg'
import  Loader from 'react-loader-spinner'

//import './Login.css'


const Login2=()=>{
    const [email, setEmail]=useState('');
    const [phone, setPhone]= useState('')
    const [access, setAccess] = useState(localStorage.getItem('login'))
    const [loading , setLoading] = useState(false)
    const handleLogin=()=>{
        alert('log')
    }
    const handleEmailChange=(e)=> setEmail(g=>event.target.value +' '+ g);
    const handlePhoneChange=(e)=> setPhone(event.target.value);
   
    const Onlogin = (e)=>{
setLoading(true)
//alert(email)
   axios.get('https://ruwassa.herokuapp.com/api/v1/users/admin/'+{email})
    .then(res => {
      alert(JSON.stringfy(res.data))
   /*   if (res.data[0].phone === phone & res.data[0].role==='admin') {
        setAccess('pass')
        localStorage.setItem('login', 'pass');
        localStorage.setItem('acttype', res.data[0].acttype);
        localStorage.setItem('token', 'res.data.token');
     //   history.push('/home');
       // return <Redirect to={{ pathname: "/home" }}> </Redirect>
       // return < Redirect to="/home"/>
      } else {
        setLoading(false)
        localStorage.setItem('login', 'stop');
        const error = new Error(res.error);
        throw error;
     //   alert('not in')
      }*/
    }
    )
    .catch(err => {
      setLoading(false)
      console.error(err);
       localStorage.setItem('login', 'stop');
     // return <Redirect to='/home'> </Redirect>
       alert('Error logging in  please try again');
    });

    }     
useEffect (()=>setAccess(localStorage.getItem('login')),[])



    /*
if (access === 'pass'){
  return <Redirect to='/home'> </Redirect>
}else*/
    return <div >{access=='pass' && <Redirect to='/home'></Redirect>}
        <form style={{zIndex:1}} className="Container border col-md-3 mx-auto border-primary" style={{margin:20}} >
          <div>
          <div ><img className='  responsive-image' style={{width:'20vh'}} src={ruwasa}  
                    alt='Logo'  /> </div>
          </div>
          <Text/>
          {loading &&
        <div style={{zIndex:5, alignSelf:'center'}} className="Container">  <Loader type="Circles" color="Blue"/> </div>    }
     
          <div className="table">
  <table align="center" ><tr><td style={{textAlign:'left'}}>Email</td><td>        <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            placeholder="Enter email"
                  required
          /></td></tr>
         
         <tr><td style={{textAlign:'left'}}>Password</td><td> <input
            type="password"
            name="phone"
            onChange={handlePhoneChange}
            placeholder="Password"
            required
          /></td></tr>
  <tr><td></td><td>        <input  type="submit" value="Login" onClick={Onlogin}/>
      </td></tr></table></div>  </form>
    </div>;

}

const Text=()=>{
    return <h3>Login Below</h3>
}

export default Login2