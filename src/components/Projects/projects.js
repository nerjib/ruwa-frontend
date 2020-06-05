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
        coveragedisplay:'none',
        focus: 'Sanitation',
        phase: 6
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
        projectsfocus:'Sanitation'
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
    this.setState({
        //projects: res.data,
        projectsfocus:'sanitation',
        focus: 'Sanitation'
    })
}
forceProjects=()=>{
    this.setState({
  //      projects: res.data,
        projectsfocus:'forcelift',
        focus: 'Force Lift'
    })
}
communityProjects=()=>{
    this.setState({
//        projects: res.data,
        projectsfocus:'community',
        focus: 'Community Borehole'
  })    
}
solarProjects=()=>{
    this.setState({
     //   projects: res.data,
        projectsfocus:'solar',
        focus: 'Motorized Solar Borehole'
    })
}/*
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
}*/
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
goToPhase6=()=>{
    this.setState({
        phase:6
    })
}

goToPhase7=()=>{
    this.setState({
        phase:7
    })
}
render(){
    
    return(
        <div>
           <div className='row'>
             <div className='col-md-1'  ><Link to='/projectform'><button className='btn btn-default btn-info'>Add Project</button></Link></div>
            <div className='col-md-2' ><Link to='/home'><button className='btn btn-default btn-info'>Home</button></Link></div>
            <div className='col-xs-2'  ><button onClick={this.goToPhase6} className='btn btn-default btn-info'>Phase 6c</button></div>
            <div className='col-xs-2'  ><button onClick={this.goToPhase7} className='btn btn-default btn-info'>Phase 7</button></div>

        <div className='col-xs-2'  ><button onClick={this.sanitationProjects} className='btn btn-default btn-info'>Sanitation</button></div>
            <div className='col-xs-2'  ><button onClick={this.solarProjects} className='btn btn-default btn-info'>Solar Boreholes</button></div>
            <div className='col-xs-2'  ><button onClick={this.forceProjects} className='btn btn-default btn-info'>Force Lift</button></div>
            <div className='col-xs-2'  ><button onClick={this.communityProjects} className='btn btn-default btn-info'>Community</button></div>
            <div className='col-xs-2'  ><button onClick={this.gotoProjectstatus} className='btn btn-default btn-primary'>{this.state.acttype}</button></div>

            </div>
            <div style={{display:this.state.projectdisplay}}>
            <ProjectTable focus={this.state.focus} phase={this.state.phase} projects={this.state.projects} />
            </div>
            <div style={{display:this.state.coveragedisplay}}>
            <ProjectsStatus projecttype={this.state.projectsfocus} focus={this.state.focus} phase={this.state.phase} reports={this.state.projects}/>
            </div>
        </div>
    )
}
}