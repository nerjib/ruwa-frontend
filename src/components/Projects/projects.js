import React from 'react';
import axios from 'axios';
import ProjectTable from './projectTable';
import { Link, Route, Redirect } from 'react-router-dom';
import ProjectsStatus from './projectsstatus'
import  Loader from 'react-loader-spinner'



export default class Projects extends React.Component{
constructor(props){
    super(props)
    this.state={
        projects:'',
        projectsfocus:'',
        acttype:'Projects Coverage',
        projectdisplay:'',
        coveragedisplay:'none',
        focus: 'Community Borehole',
        phase: 7,
        status: false,
        pstatus: 'all',
        usertype:''
    }
}

onLoad(){
    //axios.get('https://ruwassa.herokuapp.com/api/v1/projects')
   
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
    .then(res =>{
        this.setState({projects: res.data})
    })
    .catch(function(error){
         console.log(error)
    })

}

componentDidMount=async()=>{
    this.setState({
        status:true,
        usertype: localStorage.getItem('acttype')
    })
//this.inTerval=setInterval(()=>this.onLoad(),4000)
await axios.get('https://ruwassa.herokuapp.com/api/v1/update/hpbh')
await axios.get('https://ruwassa.herokuapp.com/api/v1/update/vip')
await axios.get('https://ruwassa.herokuapp.com/api/v1/update/solar')
await axios.get('https://ruwassa.herokuapp.com/api/v1/update/updateallprojects')

await axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')


await axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
.then(res =>{
    this.setState({
        projects: res.data,
        projectsfocus:'Community Borehole',
        status: false,
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
goToPhase6d=()=>{
    this.setState({
        phase:'6d'
    })
}
goToPhase7=()=>{
    this.setState({
        phase:7
    })
}

handleChange=(e)=>{
    const { value, name } = e.target;
    this.setState({
      //  project:'',
        [name]: value,    
    })

}
render(){
    
    return(
        <div>
           <div className='row'>
            {this.state.usertype=='superadmin' && <div className='col-md-1' style={{margin:3}}  ><Link to='/projectform'><button className='btn btn-default btn-info'>Add Project</button></Link></div>
}
            <div className='col-md-2' style={{margin:3}} ><Link to='/home'><button className='btn btn-default btn-info'>Home</button></Link></div>
            <div className='col-xs-2' style={{margin:3}}  ><button onClick={this.goToPhase6} className='btn btn-default btn-info'>Phase 6C</button></div>
            <div className='col-xs-2' style={{margin:3}} ><button onClick={this.goToPhase6d} className='btn btn-default btn-info'>Phase 6D</button></div>

            <div className='col-xs-2' style={{margin:3}} ><button onClick={this.goToPhase7} className='btn btn-default btn-info'>Phase 7</button></div>

        <div className='col-xs-2' style={{margin:3}}> <button onClick={this.sanitationProjects} className='btn btn-default btn-info'>Sanitation</button></div>
            <div className='col-xs-2'  style={{margin:3}}> <button onClick={this.solarProjects} className='btn btn-default btn-info'>Solar Boreholes</button></div>
            <div className='col-xs-2' style={{margin:3}}> <button onClick={this.forceProjects} className='btn btn-default btn-info'>Force Lift</button></div>
            <div className='col-xs-2' style={{margin:3}}> <button  onClick={this.communityProjects} className='btn btn-default btn-info'>Community</button></div>
            <div className='col-xs-2'  style={{margin:3}}> <button  onClick={this.gotoProjectstatus} className='btn btn-default btn-primary'>{this.state.acttype}</button></div>
            <div className='col-xs-2'  style={{margin:3}}>
            <select className='form-control' id='pstatus' name='pstatus' onChange={this.handleChange}>
                <option >Sort by projects by status</option>
                <option value='all'> All projects</option>
                <option value='completed'> Completed projects</option>
                <option value='ongoing'> Ongoing projects</option>
                <option value='abandoned'> Abandoned projects</option>

                </select>
            </div>

            </div>
    <h5>Phase {(this.state.phase)} Projects</h5>
            <div style={{display:this.state.projectdisplay}}>
     <ProjectTable pstatus={this.state.pstatus} focus={this.state.focus} phase={this.state.phase} projects={this.state.projects} />
            </div>
            <div style={{display:this.state.coveragedisplay}}>
            <ProjectsStatus pstatus={this.state.pstatus} projecttype={this.state.projectsfocus} focus={this.state.focus} phase={this.state.phase} reports={this.state.projects}/>
            </div>

{this.state.status &&
          <Loader type="ThreeDots" color="Blue"/>     }
        </div>
    )
}
}