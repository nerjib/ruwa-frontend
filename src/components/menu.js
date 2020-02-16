import React, {Component} from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom';
 class Menu extends React.Component {
     
    constructor(props){
    super(props)
    }

   goToProjects=()=>{
       this.props.onProjects()
    // this.props.history.push('/projects')
    }
   goToSupervisors=()=>{
        this.props.onSupervisors()
    }
   goToReports=()=>{
        this.props.onReports()
    }
   goToAnalytics=()=>{
        this.props.onAnalytics()
    }
    goToHome=()=>{
        this.props.onHome()
    }
    
  render(){
    return(
        <div >
        <button onClick={this.goToProjects} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Projects</h5></button>
        <button onClick={this.goToSupervisors} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Supervisors</h5></button>
        <button onClick={this.goToSupervisors} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Contractors</h5></button>
        <button onClick={this.goToReports} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Reports</h5></button>
        <button onClick={this.goToAnalytics} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Analytics</h5></button>
        <button onClick={this.goToHome} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>About</h5></button>
    </div>
    )
}
 }

export default withRouter(Menu)