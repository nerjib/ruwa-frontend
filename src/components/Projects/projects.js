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
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects')
    .then(res =>{
        this.setState({projects: res.data})
    })
    .catch(function(error){
         console.log(error)
    })

}

componentDidMount(){
//this.inTerval=setInterval(()=>this.onLoad(),60000)
axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
.then(res =>{
    this.setState({projects: res.data})
})
.catch(function(error){
     console.log(error)
})
    }
componentWillUnmount(){
    clearInterval(this.inTerval);
}

sanitationProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/sanitations')
.then(res =>{
    this.setState({projects: res.data})
})
.catch(function(error){
     console.log(error)
})    
}
forceProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/forcelift')
.then(res =>{
    this.setState({projects: res.data})
})
.catch(function(error){
     console.log(error)
})    
}
communityProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/community')
.then(res =>{
    this.setState({projects: res.data})
})
.catch(function(error){
     console.log(error)
})    
}
solarProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/solar')
.then(res =>{
    this.setState({projects: res.data})
})
.catch(function(error){
     console.log(error)
})    
}
allProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
.then(res =>{
    this.setState({projects: res.data})
})
.catch(function(error){
     console.log(error)
})    
}
render(){
    
    return(
        <div>
           <div className='row'>
             <div className='col-md-1'  ><Link to='/projectform'><button className='btn btn-default btn-info'>Add Project</button></Link></div>
            <div className='col-md-2' ><Link to='/home'><button className='btn btn-default btn-info'>Home</button></Link></div>
            <div className='col-xs-2'  ><button onClick={this.allprojects} className='btn btn-default btn-info'>All Projects</button></div>
            <div className='col-xs-2'  ><button onClick={this.sanitationProjects} className='btn btn-default btn-info'>Sanitation</button></div>
            <div className='col-xs-2'  ><button onClick={this.solarProjects} className='btn btn-default btn-info'>Solar Boreholes</button></div>
            <div className='col-xs-2'  ><button onClick={this.forceProjects} className='btn btn-default btn-info'>Force Lift</button></div>
            <div className='col-xs-2'  ><button onClick={this.communityProjects} className='btn btn-default btn-info'>Community</button></div>
         
            </div>
            <ProjectTable projects={this.state.projects} />
        </div>
    )
}
}