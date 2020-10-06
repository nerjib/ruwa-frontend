import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow';
import ReportTable from './reportTable'
import StatusReports from './statusreports';
import Calender from './calender'
import {Link} from 'react-router-dom'
import  Loader from 'react-loader-spinner'
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
            title:'Community Borehole',
            phase:7,
                status:''
    }
}

onLoad=()=>{
    this.setState({
        status: 'Loadinng ...'
    })
  /* 

        axios.get('https://ruwassa.herokuapp.com/api/v1/reports')
                .then(res => {
                    this.setState({
                            reports:res.data
                    })
                }).catch( errors=>{console.log(errors.message)})
*/
                axios.get(`https://ruwassa.herokuapp.com/api/v1/reports/completereports/all/${this.state.phase}`)
                .then(res => {
                    this.setState({
                            allreports:res.data,
                            reportfocus:'all',
                            status:''
                    })
                }).catch( errors=>{console.log(errors.message)})
 
 
}

componentDidMount(){
    this.onLoad();
  //  this.inTerval=setInterval(()=>this.onLoad(),60000)
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
goToPhase6=async()=>{
await    this.setState({
        phase: 6
    })
    this.onLoad()
}
goToPhase6d=async()=>{
    await    this.setState({
            phase: '6d'
        })
        this.onLoad()
    }
goToPhase7= async()=>{
 await   this.setState({
        phase: 7
    })
    this.onLoad()

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
let kk=0
currentProjects.map((e,i)=>{
    //if(new Date(this.state.allreports[e].date).getDate()==this.state.day & new Date(this.state.allreports[e].date).getMonth()==this.state.month &this.state.allreports[e].title==this.state.title){
    if(this.state.allreports[e].phase== this.state.phase & this.state.allreports[e].title==this.state.title){
   kk ++;
        row.push(<ReportRow sn={kk} id={this.state.allreports[e].id} title={this.state.allreports[e].title}
    lga={this.state.allreports[e].lga} ward={this.state.allreports[e].ward} community={this.state.allreports[e].community}
    gps={this.state.allreports[e].gps} facility={this.state.allreports[e].facility} lot={this.state.allreports[e].lot}
    geo={(this.state.allreports[e].gps)}     activity={(this.state.allreports[e].activity)}
    stage={(this.state.allreports[e].pstatus)} pid={this.state.allreports[e].pid}
    activityoutcome={(this.state.allreports[e].activityoutcome)}     conclusion={(this.state.allreports[e].conclusion)}
    contractor={this.state.allreports[e].company}  localsup={this.state.allreports[e].last_name+' '+this.state.allreports[e].first_name}
     date={this.state.allreports[e].date}  status={this.state.allreports[e].status}
     thirdparty={this.state.allreports[e].thirdparty} thirdremark={this.state.allreports[e].thirdremark}/>)
  //  }
    }
    })          
            
            return(
        <div>
      <div>
      <div className='row'>
          <div>
      {//}              <Calender onCalender={this.handleCalender}/>
}
                    </div>
               <div style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.goToPhase6} >Phase 6C</button></div>
               <div style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.goToPhase6d} >Phase 6D</button></div>

               <div  style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.goToPhase7} >Phase 7</button></div>
                <div  style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.sanitationReport} >Sanitation</button></div>
                <div  style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.forceReport} >Force Lift</button></div>
                <div  style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.solarReport} >Solar Motorized</button></div>
                <div  style={{margin:3}}> <button className='btn btn-defult btn-primary' onClick={this.communityReport} >Community</button></div>
                <div  style={{margin:3}}> <Link to='/weeklyreports'><button className='btn btn-defult btn-primary'  >Weekly Reports</button></Link></div>

            </div>
            <div>
                {//this.state.day
                }
            </div>
            <h1>Phase {this.state.phase +' '+this.state.title} Reports</h1>
            <div> {//pages {pageNumbers}
            }
            <button onClick={this.backPage}>Back</button><button onClick={this.nextPage}>Next</button>
            </div>

            <table  className='table table-hover text-left'>      
                <thead>
                    <tr><th>S/N</th>
                {//}        <th>LOTS</th>
                   //     <th>Title</th>
             }     <th>LGA</th>
                        <th>Activity</th>
                        <th>Activity Outcome</th>
                        <th>Conclusion</th>
                        <th>Third Party</th>
                        <th>Remark by ThirdParty</th>

                  {/*}      <th>Council Ward</th>
                        <th>COMM. NAME</th>
                        <th>LATITUDE</th>
                        <th>LONGITUDE</th>
                        <th>FACILITY</th>        */}
                        <th>CONTRACTOR</th>
{//                    <th>STATE SUPERVISOR</th> 
}
                       <th>LGA SUPERVISOR</th>
                       <th>Stage</th>

                       <th>Date Submitted</th>

                    </tr>
                </thead>
                <tbody style={{fontWeight:"bold"}}>
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
          {this.state.status &&
          <Loader type="ThreeDots" color="Blue"/>     }       </div>
       {//     <StatusReports reports={this.state.allreports}/>
       }
        </div>
    )
}

}



export default Reports;