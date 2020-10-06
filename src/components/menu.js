import React, {Component} from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom';
 class Menu extends React.Component {
     
    constructor(props){
    super(props)
    }

   goToProjects=()=>{
   //    this.props.onProjects()
    // this.props.history.push('/projects')
    }
   goToSupervisors=()=>{
     //   this.props.onSupervisors()
    }
    goToContractors=()=>{
       // this.props.onContractors()
    }
   goToReports=()=>{
        //this.props.onReports()
    }
   goToAnalytics=()=>{
        //this.props.onAnalytics()
    }
    goToHome=()=>{
        //this.props.onHome()
    }
    goToMap=()=>{
        //this.props.onMap()
    }
    goToSignOut=()=>{
        this.props.onSignOut()
        this.props.history.push('/signout')
    }
    
  render(){
    return(
        <div >
      <a href='/#/projects'>  < button  style={{marginBottom:30}}onClick={this.goToProjects} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Projects</h5></button></a>
      {/*}  <button onClick={this.goToSupervisors} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Supervisors</h5></button>
       */}
    <a href='/#/reports'>     <button style={{marginBottom:30}}  onClick={this.goToReports} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Reports</h5></button></a>
      
    <a href='/#/analytics'>    <button style={{marginBottom:30}}  onClick={this.goToAnalytics} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Analytics</h5></button></a>
       {/*} <button onClick={this.goToContractors} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Contractors</h5></button>
*/}
    <a href='/#/pmap'> <button style={{marginBottom:30}} onClick={this.goToMap} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>Map</h5></button></a>
    {//    <button onClick={this.goToHome} className='btn btn-defult btn-block'><h5 className='text-center text-primary'>About</h5></button>
        }
        <button onClick={this.goToSignOut} className='btn btn-defult btn-block' style={{marginBottom:5}}><h5 className='text-center text-primary'>Sign Out</h5></button>

    </div>
    )
}
 }

export default withRouter(Menu)