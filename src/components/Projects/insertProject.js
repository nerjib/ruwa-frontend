import React from 'react';
import axios from 'axios'
import {  Redirect } from 'react-router-dom';


export default class InsertProject extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            location:'',
            status: 'ongoing',
            supervisor:''          

        }
    }

    handleChange=(e)=>{
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });

    }

    onSubmit=(e)=>{
        e.preventDefault();
       const obj={
        title: this.state.title,
        location:this.state.location,
        status:this.state.status,
        local_id: this.state.supervisor,
        lga: this.state.lga
       }
        axios.post('http://localhost:5000/api/v1/projects',obj)
        .then((res)=>{
            alert(res.data)
        this.props.history.push('/projects')

        }).catch((error)=>{
            alert(error)
        })
        this.setState({
            title: '',
            location: '',
            status: '',
            supervisor: '',
            lga:''
           })
    }

    render(){
        return(
            <div style={{}}>

              <form>
                <br/>
                  <div className='row'>
            
          <div class='col-md-2'>      <label className='text-left text-primary'>      Project Title    </label> </div>  

            <div className='col-md-5'> 
                <input className='form-control' name='title' value={this.state.title}
                        onChange={this.handleChange} required/>
                  </div>
                  </div>
                  <br/>
                  <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>      Project Location    </label> </div>  
  
              <div className='col-md-5'> 
             
                    <input className='form-control'  name='location' value={this.state.location}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>
                  <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>      Project Supervisor ID    </label> </div>  
  
              <div className='col-md-5'> 
             
                    <input className='form-control' name='supervisor' value={this.state.supervisor}
                        onChange={this.handleChange} required/>
                         </div>
                  </div>
                  <br/>
     <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>      Project LGA    </label> </div>  
  
              <div className='col-md-5'> 
             
             <input className='form-control' name='lga' value={this.state.lga}
                        onChange={this.handleChange} required/>
                </div>
                  </div>
                  <br/>
         <div className='col-md-8'> 
                 <button className='btn btn-default btn-info' onClick={this.onSubmit}>Add Project</button> 
         </div>
                </form> 

                </div>
            
        )
    }
} 