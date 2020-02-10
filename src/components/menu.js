import React, {Component} from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom';
 class Menu extends React.Component {
     
    constructor(props){
    super(props)
    }

   goToProjects=()=>{
        this.props.history.push('/projects')
    }
   goToSupervisors=()=>{
        this.props.history.push('/supervisors')
    }
   goToReports=()=>{
        this.props.history.push('/reports')
    }
   goToAnalytics=()=>{
        this.props.history.push('/')
    }
    
  render(){
    return(
        <div >
        <button onClick={this.goToProjects} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Projects</h5></button>
        <button onClick={this.goToSupervisors} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Supervisors</h5></button>
        <button onClick={this.goToReports} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Reports</h5></button>
        <button onClick={this.goToAnalytics} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Analytics</h5></button>
    </div>
    )
}
 }

export default withRouter(Menu)