import React from 'react';
import axios from 'axios';
import Supervisors from './supervisors/supervisors'
import Projects from './Projects/projects'
import { Link, Route, Redirect } from 'react-router-dom';
import wassh from '../img/wassh1.jpg'
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
        welcome:'',
        supervisorView:'none',
        reportView:'none',
        contractorView:'none',
        analyticsView:'none'

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
        analyticsView: this.state.display='none'
    })
}

handleSupervisors=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='',
        reportView: this.state.display='none',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none'
    })
}
handleReports=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none'
    })
}
handleContractors=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorView: this.state.display='',
        analyticsView: this.state.display='none'
    })
}
handleAnalyticts=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='none',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorView: this.state.display='none',
        analyticsView: this.state.display=''
    })
}
handleHome=()=>{
    this.setState({
        display: this.state.display='none',
        welcome: this.state.display='',
        supervisorView: this.state.display='none',
        reportView: this.state.display='none',
        contractorView: this.state.display='none',
        analyticsView: this.state.display='none'
    })
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
                
                <Menu onHome={this.handleHome} onProjects={this.handleProjects} onReports={this.handleReports} onSupervisors={this.handleSupervisors} onAnalytics={this.handleAnalyticts} />
                </div>
        {// content body

        }
                <div className='col-md-10'>
                <hr/>
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