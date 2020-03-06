import React from 'react';
import axios from 'axios';
import {  Redirect, withRouter } from 'react-router-dom';


 class WeeklyReports extends React.Component{
constructor(props){
    super(props)

    this.state={
            weeklyreports:''
    }

   
}
componentDidMount=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/weekly/completereports/all')
    .then(res=>{
        this.setState({
            weeklyreports: res.data
        })
    })
}

gotoReportDetails=(id)=>{
   // alert(id)
    this.props.history.push('/weeklyreportdetails/'+id)
}
render(){


    return(
        <div>
            <table className='table'>
                <thead>
                <tr><th>S/N</th>
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
                {Object.keys(this.state.weeklyreports).map((e,i)=><tr><td>{i+1}</td>
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



                
                </tr>)}

                </tbody>
            </table>
        </div>

    )
}

}

export default withRouter(WeeklyReports);