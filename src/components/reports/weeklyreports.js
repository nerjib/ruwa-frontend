import React from 'react';
import axios from 'axios';
import {  Redirect, withRouter } from 'react-router-dom';
import WeeklyReportRows from './weeklyReportRow'
import  Loader from 'react-loader-spinner'


 class WeeklyReports extends React.Component{
constructor(props){
    super(props)

    this.state={
            weeklyreports:'',
        displayAll:'none',
        currentPage: 1,
        reportsPerPage: 100,
        allreports:'',
        reportfocus:'',
        status: false
} 
}
componentDidMount=()=>{
    this.setState({
        status: true
    })
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/weekly/completereports/all')
    .then(res=>{
        this.setState({
            weeklyreports: res.data,
            reportfocus:'all',
            title: 'Sanitation',
            phase: 7,
            status: false
        })
    })
}

gotoReportDetails=(id)=>{
   // alert(id)
    this.props.history.push('/weeklyreportdetails/'+id)
}
handleClick = (event) => {
    this.setState({
        currentPage: Number(event.target.id)
      });
}

sanitationReport=()=>{
 
    this.setState({
         //   allreports:res.data,
            currentPage: 1,
            reportfocus:'Sanitation',
            title:'Sanitation'

    })
}
forceReport=()=>{
//  axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/forcelift')
//.then(res => {
    this.setState({
          //  allreports:res.data,
            currentPage: 1,
            reportfocus:'forcelift',
            title: 'Force Lift'

    })
//    }).catch( errors=>{console.log(errors.message)})
}
communityReport=()=>{
this.setState({
//              allreports:res.data,
            currentPage: 1,
            reportfocus:'community',
            title: 'Community Borehole'

    })
//    }).catch( errors=>{console.log(errors.message)})
}
solarReport=()=>{
//  axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/solar')
//.then(res => {
    this.setState({
          //  allreports:res.data,
            currentPage: 1,
            reportfocus:'solar',
            title: 'Motorized Solar Borehole'
    })
//}).catch( errors=>{console.log(errors.message)})
}

nextPage = () =>{
    //    alert('hello')
        this.setState({
            currentPage: this.state.currentPage+1
        })
    
    }
    backPage =()=>{
        this.setState({
            currentPage: this.state.currentPage - 1
        })
    
    }
goToPhase6=()=>{
    this.setState({
        phase: 6
    })
}
goToPhase7=()=>{
    this.setState({
        phase: 7
    })
}


render(){

    let row =[];

    const { currentPage, reportsPerPage } = this.state;
  
    // Logic for displaying todos
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage
    const currentProjects = Object.keys(this.state.weeklyreports).slice(indexOfFirstReport, indexOfLastReport);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(this.state.weeklyreports).length / reportsPerPage); i++) {
      pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
    }


    currentProjects.map((e,i)=>{
        if(this.state.weeklyreports[e].phase==this.state.phase & this.state.weeklyreports[e].title==this.state.title){
        row.push(<WeeklyReportRows sn={i+1} id={this.state.weeklyreports[e].id} title={this.state.weeklyreports[e].title}
        lga={this.state.weeklyreports[e].lga} ward={this.state.weeklyreports[e].ward} community={this.state.weeklyreports[e].community}
        gps={this.state.weeklyreports[e].gps} facility={this.state.weeklyreports[e].facility} lot={this.state.weeklyreports[e].lot}
        contractor={this.state.weeklyreports[e].company}  localsup={this.state.weeklyreports[e].last_name+' '+this.state.weeklyreports[e].first_name}
         date={this.state.weeklyreports[e].date}/>)
        }
        })          
    

    return(
        <div>
                          
                          <div className='row'>
          <div>
                    </div>
               <div> <button onClick={this.goToPhase6} >Phase 6C</button></div>
               <div> <button onClick={this.goToPhase7} >Phase 7</button></div>
                <div> <button onClick={this.sanitationReport} >Sanitation</button></div>
                <div> <button onClick={this.forceReport} >Force Lift</button></div>
                <div> <button onClick={this.solarReport} >Solar Motorized</button></div>
                <div> <button onClick={this.communityReport} >Community</button></div>
            </div>
            <div>
                {//this.state.day
                }
            </div>
            <div> {//pages {pageNumbers}
            }
            <button onClick={this.backPage}>Back</button><button onClick={this.nextPage}>Next</button>
            </div>
     
            <table className='table'>
                <thead>
                <tr>   <th>S/N</th>
                        <th>LOTS</th>
                        <th>Title</th>
                        <th>LGA</th>
                        <th>Council Ward</th>
                        <th>COMM. NAME</th>
                        <th>LATITUDE</th>
                        <th>LONGITUDE</th>
                        <th>FACILITY</th>
                        <th>CONTRACTOR</th>
                       <th>STATE SUPERVISOR</th> 
                       <th>LGA SUPERVISOR</th>
                       <th>Date Submitted</th>
                    </tr>
                </thead>
                <tbody>
                {row}
                {
                    /*Object.keys(this.state.weeklyreports).map((e,i)=><tr><td>{i+1}</td>
                <td>{this.state.weeklyreports[e].lot}</td>
                <td>{this.state.weeklyreports[e].title}</td>
                <td>{this.state.weeklyreports[e].lga}</td>
                <td>{this.state.weeklyreports[e].ward}</td>
                <td>{this.state.weeklyreports[e].community}</td>
                <td>{this.state.weeklyreports[e].gps}</td>
                <td>{this.state.weeklyreports[e].gps}</td>
                <td>{this.state.weeklyreports[e].facility}</td>
                <td>{this.state.weeklyreports[e].company}</td>
                <td>{this.state.weeklyreports[e].first_name}</td>
                <td></td>
                <td>{new Date(this.state.weeklyreports[e].date).getDate()+'-' +(new Date(this.state.weeklyreports[e].date).getMonth()+1)+'-'+new Date(this.state.weeklyreports[e].date).getFullYear()}</td>
                <td><button onClick={()=>this.gotoReportDetails(this.state.weeklyreports[e].id)}>View</button></td>

                </tr>)
            */}

                </tbody>
            
            </table>
            {this.state.status &&
          <Loader type="ThreeDots" color="Blue"/>     }
        </div>

    )
}

}

export default withRouter(WeeklyReports);