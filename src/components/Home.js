import React from 'react';
import axios from 'axios';
import Supervisors from './supervisors/supervisors'
import Projects from './Projects/projects'
import { Link, Route, Redirect } from 'react-router-dom';
import wassh from '../img/wassh1.jpg'
import ruwasa from '../img/ruwasa.jpg'

import Menu from './menu'
import Reports from './reports/reports'
import Analytics from './analytics'
export default class Home extends React.Component{
constructor(props){
    super(props)
    this.state={
        projects:'',
        supervisors:'',
        display:'none',
        welcome:'none',
        supervisorView:'none',
        reportView:'none',
        contractorView:'none',
        analyticsView:'',
        title:'ANALYTICS',
        time:''

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
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none',
        title: 'PROJECTS'
    })
}

handleSupervisors=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='',
        reportView: this.state.display='none',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none',
        title:'SUPERVISORS'
    })
}
handleReports=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none',
        title:'Reports'
    })
}
handleContractors=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorView: this.state.display='',
        analyticsView: this.state.display='none',
        title:'CONTRACTORS'
    })
}
handleAnalyticts=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='',
        title:'ANALYTICS'
    })
}
handleHome=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none',
        title:'ABOUT'
    })
}

tick2(){
    this.setState({
        time: new Date().toLocaleString()

    })
}
componentDidMount(){
    this.inInterval2= setInterval( ()=>this.tick2(), 1000);


    axios.get('https://ruwasa.herokuapp.com/api/v1/users')
        .then(res =>{
            this.setState({supervisors: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
}
componentWillUnmount(){
    clearInterval(this.inInterval2)
}
render(){
    return(
        <div className='fluid-container' >
            <div className='row'>
         <div className='col-md-2'>   <img className='  responsive-image' style={{width:'70%'}}
                                                        src={ruwasa}

                    alt='Logo'
                                    />
                                    </div>
            <div  className='col-md-9'><h2 className=' text-primary text-center'>{this.state.title}</h2></div> 
            </div> 
           
  
            <div className='row'>
        {//--menu--
        }
                <div className='col-md-2' >
                <div className='block' style={{backgroundColor:'#00a9f9', height:50, alignItems:'center'}}><h3 className='text-center'>Dashboard</h3></div>
                <Menu onHome={this.handleHome} onProjects={this.handleProjects} onReports={this.handleReports} onSupervisors={this.handleSupervisors} onAnalytics={this.handleAnalyticts} />
                </div>
       
                <div className='col-md-10'>
                <hr/>
                <div><h2>{this.state.time}</h2></div>
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
                </div>

            </div>

            
        </div>
     
     
    )
}
}