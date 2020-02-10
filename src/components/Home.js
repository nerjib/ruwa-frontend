import React from 'react';
import axios from 'axios';
import Supervisors from './supervisors/supervisors'
import Projects from './Projects/projects'
import { Link, Route, Redirect } from 'react-router-dom';
import Menu from './menu'

export default class Home extends React.Component{
constructor(props){
    super(props)
    this.state={
        projects:'',
        supervisors:''
    }
}

componentDidMount(){

    axios.get('http://localhost:5000/api/v1/users')
        .then(res =>{
            this.setState({supervisors: res.data})
        })
        .catch(function(error){
             alert(error)
        })
}
render(){
    return(
        <div className='fluid-container'>
            <div ><h2 className='text-primary text-center'>Title</h2></div>    
            <div className='row'>
        {//--menu--
        }
                <div className='col-md-2'>
                
                <Menu/>
                </div>
        {// content body

        }
                <div className='col-md-10'>
                        <span>
                            welcome to ruwas jgn
                        </span>
                </div>

            </div>

            <div><Link to='/projects'><button >Project</button></Link></div>
            
        </div>
     
     
    )
}
}