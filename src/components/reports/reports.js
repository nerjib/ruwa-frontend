import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow';
import ReportTable from './reportTable'
import StatusReports from './statusreports'
class Reports extends React.Component{
constructor(props){
    super(props)
    this.state={
            reports:'',
            displayAll:'none',
            currentPage: 1,
            reportsPerPage: 10,
            allreports:'',
            reportfocus:''
    }
}

onLoad=()=>{
   
        axios.get('https://ruwassa.herokuapp.com/api/v1/reports')
                .then(res => {
                    this.setState({
                            reports:res.data
                    })
                }).catch( errors=>{console.log(errors.message)})

                axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/all')
                .then(res => {
                    this.setState({
                            allreports:res.data,
                            reportfocus:'all'
                    })
                }).catch( errors=>{console.log(errors.message)})
 
 
}

componentDidMount(){
    this.inTerval=setInterval(()=>this.onLoad(),60000)
    this.onLoad();
}
componentWillMount(){
    clearInterval(this.inTerval)
}
 
handleClick = (event) => {
    this.setState({
        currentPage: Number(event.target.id)
      });
}

sanitationReport=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/sanitation')
    .then(res => {
        this.setState({
                allreports:res.data,
                currentPage: 1,
                reportfocus:'sanitation'

        })
    }).catch( errors=>{console.log(errors.message)})
}
forceReport=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/forcelift')
    .then(res => {
        this.setState({
                allreports:res.data,
                currentPage: 1,
                reportfocus:'forcelift'

        })
    }).catch( errors=>{console.log(errors.message)})
}
communityReport=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/community')
    .then(res => {
        this.setState({
                allreports:res.data,
                currentPage: 1,
                reportfocus:'community'

        })
    }).catch( errors=>{console.log(errors.message)})
}
solarReport=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/solar')
    .then(res => {
        this.setState({
                allreports:res.data,
                currentPage: 1,
                reportfocus:'solar'

        })
    }).catch( errors=>{console.log(errors.message)})
}

gotoReportstatus=()=>{
    alert(this.state.reportfocus)
}
render() {
    let row =[];

    const { currentPage, reportsPerPage } = this.state;
  
    // Logic for displaying todos
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage
    const currentProjects = Object.keys(this.state.allreports).slice(indexOfFirstReport, indexOfLastReport);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(this.state.allreports).length / reportsPerPage); i++) {
      pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
    }

{/*
currentProjects.map((e,i)=>{row.push(
   <ReportRow sn={i+1} id={this.state.reports[e].id}
        uid={this.state.reports[e].uid}
        pid={this.state.reports[e].pid} reportdate={new Date(this.state.reports[e].date).getDate()+'-'+(new Date(this.state.reports[e].date).getMonth()+1)
                        +'-'+new Date(this.state.reports[e].date).getFullYear()}
       
    />

 }
 //<ReportRow 
    )
    })
*/
}
    
currentProjects.map((e,i)=>{row.push(<ReportRow sn={i+1} id={this.state.allreports[e].id} title={this.state.allreports[e].title}
    lga={this.state.allreports[e].lga} ward={this.state.allreports[e].ward} community={this.state.allreports[e].community}
    gps={this.state.allreports[e].gps} facility={this.state.allreports[e].facility} lot={this.state.allreports[e].lot}
    contractor={this.state.allreports[e].company}  localsup={this.state.allreports[e].last_name+' '+this.state.allreports[e].first_name}
     date={this.state.allreports[e].date}/>)})          
            
            return(
        <div>
      <div>
      <div className='row'>
               <div> <button onClick={this.onLoad} >All Report</button></div>
                <div> <button onClick={this.sanitationReport} >Sanitation</button></div>
                <div> <button onClick={this.forceReport} >Force Lift</button></div>
                <div> <button onClick={this.solarReport} >Solar Motorized</button></div>
                <div> <button onClick={this.communityReport} >Community</button></div>
                <div> <button onClick={this.gotoReportstatus} >Status Reports</button></div>
            </div>
            <div> pages {pageNumbers}</div>
            <div className='col-md-1'>
            <table  width='200' className='table'>      
                <thead>
                    <tr><th>S/N</th>
                        <th>RID</th>
                        <th>Title</th>
                        <th>LGA</th>
                        <th>Council Ward</th>
                        <th>COMM. NAME</th>
                        <th>LATITUDE</th>
                        <th>LONGITUDE</th>
                        <th>FACILITY</th>
                        <th>LOT NO.</th>
                        <th>CONTRACTOR</th>
                       <th>STATE SUPERVISOR</th> 
                       <th>LGA SUPERVISOR</th>
                       <th>Date Submitted</th>
                    </tr>
                </thead>
                <tbody >
                {row}
                </tbody>
              {// <ReportTable reports={this.state.reports}/>
              }
{//style={{display:this.state.displayAll}}
            }
            </table>
            </div>
            </div>
       {//     <StatusReports reports={this.state.allreports}/>
       }
        </div>
    )
}

}


export default Reports;