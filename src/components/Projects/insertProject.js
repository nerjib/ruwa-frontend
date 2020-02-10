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
        supervisor: this.state.supervisor
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
            supervisor: ''
           })
    }

    render(){
        return(
            <div style={{}}>
              <form>
                <label>
                    Title
                </label>  

                    <input name='title' value={this.state.title}
                        onChange={this.handleChange} required/>
                  <br/>
                    <label>
                        Location
                    </label>  

                    <input name='location' value={this.state.location}
                        onChange={this.handleChange} required/>
             
               <label>
                        supervisor
                    </label>  

                    <input name='supervisor' value={this.state.supervisor}
                        onChange={this.handleChange} required/>
             
                </form> 
                <button onClick={this.onSubmit}>fd</button> 
            </div>
        )
    }
} 