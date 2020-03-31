import React from 'react';
import axios from 'axios';
import {  Redirect, withRouter } from 'react-router-dom';
import WeeklyReportRows from './weeklyReportRow'

 class WeeklyReports extends React.Component{
constructor(props){
    super(props)

    this.state={
            weeklyreports:'',
        displayAll:'none',
        currentPage: 1,
        reportsPerPage: 35,
        allreports:'',
        reportfocus:''
}

   
}
componentDidMount=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/weekly/completereports/all')
    .then(res=>{
        this.setState({
            weeklyreports: res.data,
            reportfocus:'all'
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


    currentProjects.map((e,i)=>row.push(<WeeklyReportRows sn={i+1} id={this.state.weeklyreports[e].id} title={this.state.weeklyreports[e].title}
        lga={this.state.weeklyreports[e].lga} ward={this.state.weeklyreports[e].ward} community={this.state.weeklyreports[e].community}
        gps={this.state.weeklyreports[e].gps} facility={this.state.weeklyreports[e].facility} lot={this.state.weeklyreports[e].lot}
        contractor={this.state.weeklyreports[e].company}  localsup={this.state.weeklyreports[e].last_name+' '+this.state.weeklyreports[e].first_name}
         date={this.state.weeklyreports[e].date}/>))          
    

    return(
        <div>
                          

           {pageNumbers}
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
        </div>

    )
}

}

export default withRouter(WeeklyReports);