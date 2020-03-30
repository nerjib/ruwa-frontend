import React from 'react';
import axios from 'axios';
import Supervisors from './supervisors/supervisors'
import Projects from './Projects/projects'
import Contractors from './contractors/contractors'
import { Link, Route, Redirect } from 'react-router-dom';
import wassh from '../img/wassh1.jpg'
import ruwasa from '../img/ruwasa.jpg'
import DailyMap from './map/dailymap'
import Menu from './menu'
import Reports from './reports/reports'
import Analytics from './analytics'
import './home.css'


export default class Home extends React.Component{
constructor(props){
    super(props)
    const access = localStorage.getItem('login');

    this.state={
        projects:'',
        supervisors:'',
        display:'none',
        welcome:'none',
        supervisorView:'none',
        reportView:'none',
        contractorsView:'none',
        analyticsView:'',
        title:'ANALYTICS',
       time:'',
        login: access,
        mapView:'none'

    }

    if(access !== 'pass'){
        this.setState({login: 'stop'})
      }
      
}

onDisplay=()=>{

}
handleProjects=()=>{
    this.setState({
        display: this.state.display='',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorsView: this.state.display='none',
        analyticsView: this.state.display='none',
        mapView: this.state.display='none',

        title: 'PROJECTS'
    })
}

handleSupervisors=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='',
        reportView: this.state.display='none',
        contractorsView: this.state.display='none',
        analyticsView: this.state.display='none',
        mapView: this.state.display='none',

        title:'SUPERVISORS'
    })
}
handleReports=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='',
        contractorsView: this.state.display='none',
        analyticsView: this.state.display='none',
        mapView: this.state.display='none',

        title:'Reports'
    })
}
handleContractors=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorsView: this.state.display='',
        analyticsView: this.state.display='none',
        mapView: this.state.display='none',
        title:'CONTRACTORS'
    })
}
handleAnalyticts=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorsView: this.state.display='none',
        analyticsView: this.state.display='',
        mapView: this.state.display='none',

        title:'ANALYTICS'
    })
}
handleHome=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorsView: this.state.display='none',
        analyticsView: this.state.display='none',
        mapView: this.state.display='none',

        title:'ABOUT'
    })
}

handleMap=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorsView: this.state.display='none',
        analyticsView: this.state.display='none',
        mapView: this.state.display='',
        title:'MAP'
    })

}
handleSignOut=()=> {}
    


tick2(){
    this.setState({
      time: new Date().toLocaleString()

    })
}
componentDidMount(){


   
    axios.get('/api/v1/users')
        .then(res =>{
            this.setState({supervisors: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
       this.inInterval2= setInterval( ()=>this.tick2(), 1000);

}
componentWillUnmount(){
    clearInterval(this.inInterval2)
}
render(){
  if (this.state.login !== 'pass'){
        return <Redirect to='/'></Redirect>
       };
  //     alert(this.state.login)
    return(
        <div className='fluid-container' >
            <div id='header1' className='row'>
 <div className='col-md-2'style={{zIndex:4}}  ><img style={{zIndex:3}} className='responsive-image' id='img'  src={ruwasa}
 alt='Logo'  /> </div>
            <div style={{ backgroundColor:'#00a9f9', width:'100%'}}   className='col-md-10'>        
            <div><h2 style={{color:'#ffffff', marginTop:70}} className=' text-center'>{this.state.title}</h2></div> 
             <div><h2 style={{color:'white'}}>{(this.state.time)}</h2></div>
            </div> 
            </div>
  
            <div className='row' id='contentbody'  >
        {//--menu--
        }
                <div className='col-md-2' style={{backgroundColor:'#00a9f9'}} id='menu'  >
                <div className='block' style={{backgroundColor:'#00a9f9', height:50, alignItems:'center', marginBottom:10, display:'block'}}><h3 className='text-center'>Dashboard</h3></div>
                <Menu onMap={this.handleMap} onSignOut={this.handleSignOut} onContractors={this.handleContractors} onHome={this.handleHome} onProjects={this.handleProjects} onReports={this.handleReports} onSupervisors={this.handleSupervisors} onAnalytics={this.handleAnalyticts} />
                </div>
       
                <div  className='col-md-10' id='viewcontent' style={{ float:'right' }} >
                        <span >
                            <div style={{display:this.state.welcome}}>
                           <h6 className='text-block text-justify'> The goal of the WASH programme is to contribute to an 
                           improvement in the number of people benefiting from improved water and sanitation facilities.
                           
                            Increase access to improved water and sanitation facilities and hygiene knowledge and practice for communities and students in schools in selected areas.
                     </h6>
                           
                           <br/>
                           <br/>
                            <div className='row'>

                                <div className='col-md-4'>
                                    <img className='responsive-image' style={{width:'100%'}}
                                    src='https://files.globalwaters.org/water-links-files/latrine-Mingkaman-South-sudan-PROPEL-Global-Communities.JPG'
                                    alt='laterine'
                                    />
                                </div>
                                <div className='col-md-4'>
                                <img className='responsive-image'
                                src=''
                            alt='wash img'/>
                         
                                </div>
                            </div>

                            <div className='row'>

                                <div className='col-md-4'>
                                    <img className='responsive-image' style={{width:'100%'}}
                                    src='src\img\wassh1.jpg'
                                    alt='laterine'
                                    />
                                </div>
                                <div className='col-md-4'>
                                    <img className='responsive-image' style={{width:'100%'}}
                                    src={wassh}
                                    alt='laterine'
                                    />
                                </div>
                                </div>

                            </div>
                            </span>


                            <div style={{display: this.state.display}}>
                            <Projects />                            
                            </div>
                            <div style={{display: this.state.reportView}}>
                            <Reports />                            
                            </div>
                            <div style={{display: this.state.supervisorView}}>
                            <Supervisors />                            
                            </div>
                            <div style={{display: this.state.analyticsView}}>
                            <Analytics />                            
                            </div>
                            <div style={{display: this.state.contractorsView}}>
                            <Contractors />                            
                            </div>
                            <div style={{display: this.state.mapView}}>
                               <DailyMap/>
                          </div>
                </div>

            </div>

            
        </div>
     
     
    )
}
}