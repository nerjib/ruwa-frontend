import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow';
import ReportTable from './reportTable'
import StatusReports from './statusreports';
import Calender from './calender'
import {Link} from 'react-router-dom'
class Reports extends React.Component{
constructor(props){
    super(props)
    this.state={
            reports:'',
            displayAll:'none',
            currentPage: 1,
            reportsPerPage: 150,
            allreports:'',
            reportfocus:'',
            day:new Date().getDate(),
            month:new Date().getMonth(),
            title:'Sanitation',
            phase:6
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

gotoReportstatus=()=>{
    alert(this.state.reportfocus)
}
gotoWeeklyReports=()=>{
   // alert('weekly')
    this.props.history.push('/addsupervisor')

}

handleCalender=(day=new Date().getDate(),month=new Date().getMonth(),title='all')=>{
    this.setState({
            day,
            month,
            title
    })
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
//(new Date(this.props.date).getMonth()+1)

currentProjects.map((e,i)=>{
    //if(new Date(this.state.allreports[e].date).getDate()==this.state.day & new Date(this.state.allreports[e].date).getMonth()==this.state.month &this.state.allreports[e].title==this.state.title){
    if(this.state.allreports[e].phase== this.state.phase & this.state.allreports[e].title==this.state.title){
    row.push(<ReportRow sn={i+1} id={this.state.allreports[e].id} title={this.state.allreports[e].title}
    lga={this.state.allreports[e].lga} ward={this.state.allreports[e].ward} community={this.state.allreports[e].community}
    gps={this.state.allreports[e].gps} facility={this.state.allreports[e].facility} lot={this.state.allreports[e].lot}
    geo={(this.state.allreports[e].gps)}
    contractor={this.state.allreports[e].company}  localsup={this.state.allreports[e].last_name+' '+this.state.allreports[e].first_name}
     date={this.state.allreports[e].date}  status={this.state.allreports[e].status}/>)
  //  }
    }
    })          
            
            return(
        <div>
      <div>
      <div className='row'>
          <div>
                    <Calender onCalender={this.handleCalender}/>
                    </div>
               <div> <button onClick={this.goToPhase6} >Phase 6C</button></div>
               <div> <button onClick={this.goToPhase7} >Phase 7</button></div>
                <div> <button onClick={this.sanitationReport} >Sanitation</button></div>
                <div> <button onClick={this.forceReport} >Force Lift</button></div>
                <div> <button onClick={this.solarReport} >Solar Motorized</button></div>
                <div> <button onClick={this.communityReport} >Community</button></div>
                <div> <button onClick={this.gotoReportstatus} >Status Reports</button></div>
                <div> <Link to='/weeklyreports'><button  >Weekly Reports</button></Link></div>

            </div>
            <div>
                {//this.state.day
                }
            </div>
            <div> {//pages {pageNumbers}
            }
            <button onClick={this.backPage}>Back</button><button onClick={this.nextPage}>Next</button>
            </div>
            <table  className='table table-hover'>      
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
                       <th>Status</th>

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
            <div> {//pages {pageNumbers}
            }
            <button onClick={this.backPage}>Back</button><button onClick={this.nextPage}>Next</button>
            </div>
            
            </div>
       {//     <StatusReports reports={this.state.allreports}/>
       }
        </div>
    )
}

}



export default Reports;