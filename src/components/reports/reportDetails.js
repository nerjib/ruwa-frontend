import React from 'react';
import axios from 'axios';
import ActivityRow from './activityRow';
import Pdf from 'react-to-pdf';
const ref=React.createRef();
export default class ReportDetails extends React.Component {
constructor(props){
    super(props)
    this.state={
        rid: '',
        pid: '',
        uid: '',
        summary: '',
        summaryfrom: '',
        summaryto: '',
        conclusion: '',
        followup: '',
        date: '',
        compliance: '',
        ptitle: '',
        plocation: '',
        plga: '',
        pgps: '',
        fname: '',
        lname: '',
        phone: '',
        oname: '',
        email: '',
        Activity:'',
        gps:'',
        contractor_id:'',
        companyname:''
    }
}


    componentDidMount(){
        const { params } = this.props.match;

        axios.get('/api/v1/reports/'+params.id)
            .then(res=>{
              this.setState({
                rid: res.data[0].id,
                pid: res.data[0].pid,
                uid: res.data[0].uid,
                summary: res.data[0].summary,
                summaryfrom:res.data[0].summaryfrom,
                summaryto:res.data[0].summaryto,
                conclusion:res.data[0].conclusion,
                followup:res.data[0].followup,
                date:res.data[0].date,
                compliance:res.data[0].compliance,
                gps:res.data[0].gps,

              })

              axios.get('/api/v1/reports/activity/'+params.id)
            .then(res=>{
              this.setState({
               Activity: res.data
              })
            }).catch(error=>{console.log(error)})

              axios.get('/api/v1/projects/'+this.state.pid)
              .then(res=>{
                this.setState({
                  ptitle:res.data[0].title,
                  plocation: res.data[0].location,
                  plga: res.data[0].lga,
                  pgps: res.data[0].gps,
                  contractor_id: res.data[0].contractor_id
                })
            })  

            axios.get('/api/v1/users/'+this.state.uid)
              .then(res=>{
                this.setState({
                  fname:res.data[0].first_name,
                  lname: res.data[0].last_name,
                  phone: res.data[0].phone,
                  oname: res.data[0].other_name,
                  email: res.data[0].email,                 
                })
            })  

            axios.get('/api/v1/users/'+this.state.contractor_id)
            .then(res=>{
              this.setState({
                companyname:res.data[0].company,
                           
              })
          })  
  

            })
        }
            
    render(){
        const { params } = this.props.match;
        let row=[];
        Object.keys(this.state.Activity).map(e=>{row.push(<ActivityRow activity={this.state.Activity[e].activity}
                        date={this.state.Activity[e].date} outcome={this.state.Activity[e].outcome}/>)})
        
            const options={
                orientation: 'landscape',
                unit: 'in',
                format: [40,2]
            }
        return(
            <div className='fluid-container'>
                <div className='col-md-7'>
                <Pdf targetRef={ref} filename={this.state.pid+'_'+this.state.ptitle+'_'+this.state.plga+'_'+this.state.summaryfrom+'_'+this.state.summaryto} x={.5} y={.5}>
                    {({toPdf})=><button className='btn btn-default btn-info' onClick={toPdf}>Download Report</button>}
                </Pdf>
                </div>
                <div className='row'>
                <div className='fluid-container col-md-7' ref={ref}>
                <br/><br/>
                <div ><span><h5>KADUNA FIELD OFFICE: WASH WEEKLY PROGRESS REPORT</h5></span></div>
                <table className='table table-bordered ' style={{border: '1px inset black'}}>
                    <thead>
                        
                        <tr>
                            <th colSpan="3">
                                NAME OF PROJECT: KADUNA RUWASSA: {(this.state.ptitle).toUpperCase()}
                            </th>
                            <th>
                                REPORT NO: {this.state.rid}
                            </th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        <tr className='text-left'>
                            <td > LGA: {(this.state.plga).toUpperCase()}</td>
                            <td >CONTRACTOR: {this.state.companyname}</td>
                            <td>LOT NO:</td>
                            <td>DATE: {this.state.date}<br/>GPS: {this.state.gps}</td>
                        </tr>
                        <tr className='text-left'>
                            <td colSpan="4">
                                SUMMARY OF PLANNED ACTIVITIES: {this.state.summary}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='4'>
                                Summary of KEY ACTIVITIES
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='4'>
                                DETAILS OF ACTIVITIES CARRIED OUT WITH DATES: (attach photographs)
                            </td>
                        </tr>
                        <tr>
                            <td>DATE</td>
                            <td colSpan="2">ACTIVITY</td>
                            <td>OUTPUT/OUTCOME</td>
                        </tr>
                        {row}
        
                        <tr>
                            <td colSpan="4" className='text-left'>
                                CONCLUSION AND RECOMMENDATION: {this.state.conclusion}
                            <br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                PLANNED FOLLOW-UP ACTIVITIES FOR NEXT WEEK OTHER COMMENT: {this.state.followup}
                                <br/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                {this.state.fname+' '+this.state.lname+' '+this.state.oname}<br/>
                               <br/>
                                DATE OF SUBMISSION: {this.state.date}<br/><br/>
                                PNONE: {this.state.phone}  EMAIL: {this.state.email}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                IS WORK PROGRESSING ACCORDING TI SUBMITED PLAN? {(this.state.compliance).toUpperCase()}<br/><br/>

                                GROUP SUPERVISOR'S COMMENTS AND SIGNATURE
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                              GENERAL SUPERVISOR'S COMMENTS AND SIGNATURE: 
                            </td>
                        </tr>
                    </tbody>

                </table>
              
                </div>
             
              </div>
              <div>
                   { Object.keys(this.state.Activity).map(e=>
                    <img style={{width:400, heigth:400}} src={this.state.Activity[e].imgurl}/>
                )   
                }
                     </div>
            </div>            
        )
    }
}