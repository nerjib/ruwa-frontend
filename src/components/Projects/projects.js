import React from 'react';
import axios from 'axios';
import ProjectTable from './projectTable';
import { Link, Route, Redirect } from 'react-router-dom';
import ProjectsStatus from './projectsstatus'

export default class Projects extends React.Component{
constructor(props){
    super(props)
    this.state={
        projects:'',
        projectsfocus:'',
        acttype:'Projects Coverage',
        projectdisplay:'',
        coveragedisplay:'none'
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
    this.setState({
        projects: res.data,
        projectsfocus:'all'
    })
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
    this.setState({
        projects: res.data,
        projectsfocus:'sanitation'
    
    })
})
.catch(function(error){
     console.log(error)
})    
}
forceProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/forcelift')
.then(res =>{
    this.setState({
        projects: res.data,
        projectsfocus:'forcelift'
    })
})
.catch(function(error){
     console.log(error)
})    
}
communityProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/community')
.then(res =>{
    this.setState({
        projects: res.data,
        projectsfocus:'community'
    })
})
.catch(function(error){
     console.log(error)
})    
}
solarProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/solar')
.then(res =>{
    this.setState({
        projects: res.data,
        projectsfocus:'solar'
    })
})
.catch(function(error){
     console.log(error)
})    
}
allProjects=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
.then(res =>{
    this.setState({
        projects: res.data,
        projectsfocus:'all'
    })
})
.catch(function(error){
     console.log(error)
})    
}
gotoProjectstatus=()=>{
 //  alert(this.state.projectsfocus)
   if(this.state.acttype=='Projects Coverage')
    this.setState({
        acttype: 'Projects',
        coveragedisplay:'',
        projectdisplay:'none'
    })
    else if (this.state.acttype=='Projects'){
        this.setState({
            acttype: 'Projects Coverage',
            projectdisplay:'',
            coveragedisplay:'none',
        })
    }
}
render(){
    
    return(
        <div>
           <div className='row'>
             <div className='col-md-1'  ><Link to='/projectform'><button className='btn btn-default btn-info'>Add Project</button></Link></div>
            <div className='col-md-2' ><Link to='/home'><button className='btn btn-default btn-info'>Home</button></Link></div>
            <div className='col-xs-2'  ><button onClick={this.allProjects} className='btn btn-default btn-info'>All Projects</button></div>
            <div className='col-xs-2'  ><button onClick={this.sanitationProjects} className='btn btn-default btn-info'>Sanitation</button></div>
            <div className='col-xs-2'  ><button onClick={this.solarProjects} className='btn btn-default btn-info'>Solar Boreholes</button></div>
            <div className='col-xs-2'  ><button onClick={this.forceProjects} className='btn btn-default btn-info'>Force Lift</button></div>
            <div className='col-xs-2'  ><button onClick={this.communityProjects} className='btn btn-default btn-info'>Community</button></div>
            <div className='col-xs-2'  ><button onClick={this.gotoProjectstatus} className='btn btn-default btn-primary'>{this.state.acttype}</button></div>

            </div>
            <div style={{display:this.state.projectdisplay}}>
            <ProjectTable projects={this.state.projects} />
            </div>
            <div style={{display:this.state.coveragedisplay}}>
            <ProjectsStatus projecttype={this.state.projectsfocus} reports={this.state.projects}/>
            </div>
        </div>
    )
}
}