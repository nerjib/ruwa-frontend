import React from 'react';
import axios from 'axios';
import ProjectTable from './projectTable';
import { Link, Route, Redirect } from 'react-router-dom';


export default class Projects extends React.Component{
constructor(props){
    super(props)
    this.state={
        projects:'',
    }
}

onLoad(){
    axios.get('http://localhost:5000/api/v1/projects')
    .then(res =>{
        this.setState({projects: res.data})
    })
    .catch(function(error){
         alert(error)
    })

}

componentDidMount(){
this.inTerval=setInterval(()=>this.onLoad(),1000)
    }
componentWillUnmount(){
    clearInterval(this.inTerval);
}
render(){
    return(
        <div>
            <div className='row'>
             <div className='col-md-1'  ><Link to='/projectform'><button className='btn btn-default btn-info'>Add Project</button></Link></div>
            <div className='col-md-2' ><Link to='/'><button className='btn btn-default btn-info'>Home</button></Link></div>
            </div>
            <ProjectTable projects={this.state.projects}/>
        </div>
    )
}
}