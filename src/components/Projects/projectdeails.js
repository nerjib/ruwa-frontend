import React from 'react';
import axios from 'axios'
import  Loader from 'react-loader-spinner'
import { Link, Route, Redirect } from 'react-router-dom';




export default class ProjectDetails extends React.Component{
    constructor(props){
        super(props)

        this.state={
                project:'',
                reports:'',
                lid:'',
                weeklyreport:'',
                li:'',
                si:'',
                status: false,
                weekly:'none',
                daily:'flex',
                eval:'none',
                functionalityR: 'none',
                monReps:'',
                SanmonReps:'',
                functionalityReport:''
        }
    }

    componentDidMount=async()=>{
        this.setState({
            status:true
        })
        const {params}=this.props.match;
       axios.get('https://ruwassa.herokuapp.com/api/v1/projects/details/'+params.id)
        .then(res=>{
            this.setState({
                project: res.data[0]
            })
        }).catch(error=>{console.log(error.message)})
      
       axios.get('https://ruwassa.herokuapp.com/api/v1/reports/project/'+params.id)
        .then(res=>{
            this.setState({
                reports: res.data
            })
        }).catch(error=>{console.log(error.message)})

 
        axios.get('https://ruwassa.herokuapp.com/api/v1/reports/activity/projectweekly/'+params.id)
        .then(res=>{
            this.setState({
                weeklyreport: res.data
            })
        }).catch(error=>{console.log(error.message)})

        axios.get('https://ruwassa.herokuapp.com/api/v1/projects/'+params.id)
        .then(res=>{
            this.setState({
                title: res.data[0].title,
               li: res.data[0].local_id,
               si: res.data[0].state_id
            })
            if(res.data[0].title=='Community Borehole' || res.data[0].title=='Motorized Solar Borehole' || res.data[0].title== 'Force Lift'){
              //  
            
              axios.get('https://ruwassa.herokuapp.com/api/v1/monitorsreports/watereval/'+params.id)
              .then(res=>{
                  this.setState({
                      monReps: res.data
                  })
              }).catch(error=>{console.log(error.message)})
      
            }else if(res.data[0].title=='Sanitation'){
                axios.get('https://ruwassa.herokuapp.com/api/v1/monitorsreports/sanitationeval/'+params.id)
              .then(res=>{
                  this.setState({
                      SanmonReps: res.data
                  })
              }).catch(error=>{console.log(error.message)})

            }

            axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+res.data[0].local_id)
           // alert(res.data[0].local_id+2)
            .then(res=>{
                    this.setState({
                        lid: res.data[0].first_name+' '+res.data[0].last_name,
                        status:false
                    })
            }).catch(error=>{console.log(error.message)})
        }).catch(error=>{console.log(error.message)})
      
        axios.get('https://ruwassa.herokuapp.com/api/v1/vlc/followup/byprojects/'+params.id)
        .then(res=>{
            this.setState({
                functionalityReport: res.data
            })
        }).catch(error=>{console.log(error.message)})
    

    }
    gotoReport=(id)=>{
//        alert(id)
     this.props.history.push('/reports/'+id)
    }
    checkOther=(e)=>{
        if (e){
            return e
        }
        return ''
    }
    goToDailyR=()=>{
        this.setState({
            weekly:'none',
            daily:'flex',
            eval:'none',
            functionalityR: 'none',

        })
    }

    goToWeeklyR=()=>{
        this.setState({
            daily:'none',
            weekly:'flex',
            eval:'none',
            functionalityR: 'none',

        })
    }
    
    goToEvalR=()=>{
        this.setState({
            daily:'none',
            weekly:'flex',
            eval:'none',
            functionalityR: 'none',

        })
    }
    goToEvalR=()=>{
        this.setState({
            daily:'none',
            weekly:'none',
            functionalityR: 'none',
            eval:'flex'
        })
    }

    goToFunctionality=()=>{
        this.setState({
            daily:'none',
            weekly:'none',
            eval:'none',
            functionalityR: 'flex'
        })
    }

    render() {

        return(
            <div>    
<table>
    <tbody className='text-left'>
        <tr>
        <td>Title:</td><td> {this.state.project.title}</td>
        </tr>
        <tr>
        <td>Status: </td><td> {this.state.project.status}</td>
        </tr>
        <tr>
        <td>Stage: </td><td>{this.state.project.pstatus}</td>
        </tr>
        <tr>
        <td>State Supervisor: </td><td><a href={`/#/supervisor/${this.state.si}`}>{this.state.project.first_name+' '+this.state.project.last_name+' '+this.checkOther(this.state.project.other_name)}</a></td>
        </tr>
        <tr>
        <td>Local Supervisor: </td><td><a href={`/#/supervisor/${this.state.li}`}>{this.state.lid}</a></td>
        </tr>
        <tr>
        <td>Contractor: </td><td>{this.state.project.company}</td>
        </tr>
    </tbody>
</table>
 
   <div className='row'>
<div className='col-md-2' style={{margin:3}} ><Link to='/home'><button className='btn btn-default btn-info'>Home</button></Link></div>
<div className='col-xs-2' style={{margin:0}}  ><button onClick={this.goToDailyR} className='btn btn-default btn-info'>Daily Reports</button></div>
<div className='col-xs-2' style={{margin:0}} ><button onClick={this.goToWeeklyR} className='btn btn-default btn-info'>Weekly Reports</button></div>
<div className='col-xs-2' style={{margin:0}} ><button onClick={this.goToEvalR} className='btn btn-default btn-info'>M & E Reports</button></div>
<div className='col-xs-2' style={{margin:0}} ><button onClick={this.goToFunctionality} className='btn btn-default btn-info'>Functionality Reports</button></div>

   </div>
<div style={{display:this.state.daily}}>
              <table className='table'>
                  <thead>
                      <tr>
                          <th>SN</th>
                          <th>Date</th>
                          <th>Activity</th>
                          <th>Outcome</th>
                          <th>Third Party</th>
                          <th>Supervisor</th>

                      </tr>
                  </thead>
                  <tbody>
                      
             {
              
               Object.keys(this.state.reports).map((e,i)=>
               <tr key={e+1}>
                   <td>{i+1}</td>
                   <td>{this.state.reports[e].activitydate}</td>
                   <td>{this.state.reports[e].activity}</td>
                   <td>{this.state.reports[e].activityoutcome}</td>
                    <td>{this.state.reports[e].thirdparty}</td>

                   <td>{this.state.reports[e].first_name+' '+this.state.reports[e].last_name}</td>
                   <td><a  href={`/#/reports/${this.state.reports[e].id}`} ><button >view</button></a></td>

               </tr> 
               )
             }
</tbody>
             </table>
             </div>
             <div style={{display:this.state.weekly}}>
             <table className='table'>
             <tbody>
                      {
                             Object.keys(this.state.weeklyreport).map((e,i)=><tr><td>{i+1}</td><td>{this.state.weeklyreport[e].summaryfrom}</td>
                             <td>{this.state.weeklyreport[e].summaryto}</td>
                             <td>{this.state.project.first_name+' '+this.state.project.last_name}</td>
                             <td><a  href={`/#/weeklyreportdetails/${this.state.weeklyreport[e].id}`} ><button >view</button></a></td>
                             </tr>)
                      }
             
             </tbody>
              </table>
              </div>

              <div style={{display:this.state.eval}}>
              <table className='table'>
             <tbody>
                      {  (this.state.title=='Community Borehole' ||  this.state.title=='Motorized Solar Borehole') &&
                             Object.keys(this.state.monReps).map((e,i)=><tr><td>{i+1}</td><td>{this.state.monReps[e].gentime}</td>
                             { this.state.title=='Community Borehole' &&
                            <td><a target='_blank' href={`/#/waterevalreport/${this.state.monReps[e].id}`} ><button >view 
                                </button></a></td>}
                                { this.state.title=='Motorized Solar Borehole' &&
                            <td><a href={`/#/solarevalreport/${this.state.monReps[e].id}`} ><button >view 
                                </button></a></td>}
                      <td>{this.state.monReps[e].mon}</td>
                             </tr>)
                    }
     {
       Object.keys(this.state.SanmonReps).map((e,i)=><tr><td>{i}</td><td>{this.state.SanmonReps[e].gentime}</td>
       <td><a  href={`/#/sanevalreport/${this.state.SanmonReps[e].id}`} ><button >view 
                                </button></a></td>
                                <td>{this.state.SanmonReps[e].mon}</td>
       </tr>)
     }
             
             </tbody>
              </table>

              </div>
              <div style={{display:this.state.functionalityR}}>
              <table className='table'>
                  <thead>
                      <tr>
                         <th>SN</th> <th>functioning</th><th>Problem</th><th>Duration</th><th>Reporter</th>
                      </tr>
                  </thead>
             <tbody>
                      {
                             Object.keys(this.state.functionalityReport).map((e,i)=><tr><td>{i+1}</td><td>{this.state.functionalityReport[e].functionality}</td>
                             <td>{this.state.functionalityReport[e].problem}</td>
                             <td>{this.state.functionalityReport[e].problemduration}</td>
                             <td>{this.state.functionalityReport[e].type}</td>
                             <td><a  href={`/#/functionalitydetails/${this.state.functionalityReport[e].fid}`} ><button >view</button></a></td>
                             </tr>)
                      }
             
             </tbody>
              </table>

              </div>
              {this.state.status &&
          <Loader type="ThreeDots" color="Blue"/>     }
            </div>
        )
    }
}