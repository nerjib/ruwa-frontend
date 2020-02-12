import React from 'react';

import axios from 'axios'
import {  Redirect, withRouter } from 'react-router-dom';


class AddSupervisor extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:'',
            lname:'',
            oname: '',
            role:''

        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        
        this.setState({
            [name]: value
        })

        e.preventDefault()

    }
    onSubmit = () => {
        const obj = {
        fname: this.state.fname,
        lname: this.state.lname,
        oname: this.state.oname,
        phone: this.state.phone,
        email: this.state.email,
        role: this.state.role
        }

        axios.post('http://localhost:5000/api/v1/users',obj)
        .then((res)=>{
          //  alert(res.data)
        this.props.history.push('/supervisors')
        
        }).catch((error)=>{
            alert(error)
        })
    }

    render(){
        return(
            <div style={{}}>
              <form>
                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                    first Name
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='fname'  class="form-control" value={this.state.fname}
                        onChange={this.handleChange} placeholder='First Name' required/>
                        </div>
                  </div>
                    
                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                    Last Name
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='lname'  class="form-control" value={this.state.lname}
                        onChange={this.handleChange} placeholder='Last Name' required/>
                        </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary'>
                    Other Name
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='oname'  class="form-control" value={this.state.oname}
                        onChange={this.handleChange} placeholder='Other Name' />
                        </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary text-left'>
                    Phone
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='phone'  class="form-control" value={this.state.phone}
                        onChange={this.handleChange} placeholder='0801234567' required/>
                        </div>
                  </div>

                  <div className='row'>
                      <div className='col-md-3'>
                <label className='text-primary text-left'>
                  Email Address
                </label>  
                </div>
                    <div className='col-md-5'>
                    <input name='email' type='email'  class="form-control" value={this.state.email}
                        onChange={this.handleChange} placeholder='xyz@gmail.com' required/>
                        </div>
                  </div>

                  <div class="row">
                      <div className='col-md-3'>
                        <label className='text-primary text-left'>Role</label>
                      </div>
      <div class="col-md-3">
        <label><input type="radio" value='State Supervisor' onChange={this.handleChange} name="role"/> State Supervisor </label>
      </div>
      <div class="col-md-3">
        <label><input type="radio" value='Local Supervisor' onChange={this.handleChange} name="role"/> Local Supervisor </label>
      </div>
    </div>

    <button onClick={this.onSubmit}>Add</button> 

                </form> 
            </div>
        )
    }

}
export default withRouter(AddSupervisor)