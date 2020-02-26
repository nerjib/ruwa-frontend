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

        axios.get('https://ruwassa.herokuapp.com/api/v1/reports/'+params.id)
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

              axios.get('https://ruwassa.herokuapp.com/api/v1/reports/activity/'+params.id)
            .then(res=>{
              this.setState({
               Activity: res.data
              })
            }).catch(error=>{console.log(error)})

              axios.get('https://ruwassa.herokuapp.com/api/v1/projects/'+this.state.pid)
              .then(res=>{
                this.setState({
                  ptitle:res.data[0].title,
                  plocation: res.data[0].location,
                  plga: res.data[0].lga,
                  pgps: res.data[0].gps,
                  contractor_id: res.data[0].contractor_id
                })
            })  

            axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+this.state.uid)
              .then(res=>{
                this.setState({
                  fname:res.data[0].first_name,
                  lname: res.data[0].last_name,
                  phone: res.data[0].phone,
                  oname: res.data[0].other_name,
                  email: res.data[0].email,                 
                })
            })  

            axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+this.state.contractor_id)
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
                        date={new Date(this.state.Activity[e].date).getDate()} outcome={this.state.Activity[e].outcome}/>)})
        
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
                <div className='col-md-3'></div>

                <div className='fluid-container col-md-7' ref={ref}>
                <br/><br/>
                <div ><span><h5><strong>KADUNA FIELD OFFICE: WASH WEEKLY PROGRESS REPORT</strong></h5></span></div>
                <table className='table table-bordered ' style={{border: '1px inset black'}}>
                    <thead>
                        
                        <tr>
                            <th colSpan="3">
                            <strong> NAME OF PROJECT:</strong>KADUNA RUWASSA: {(this.state.ptitle).toUpperCase()}
                            </th>
                            <th>
                            <strong> REPORT NO:</strong> {this.state.rid}
                            </th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        <tr className='text-left'>
                            <td ><strong>LGA:</strong> {(this.state.plga).toUpperCase()}</td>
                            <td ><strong>CONTRACTOR:</strong> {this.state.companyname}</td>
                            <td><strong>LOT NO:</strong></td>
                            <td><strong>DATE:</strong> {new Date(this.state.date).getDate()+'-'+(new Date(this.state.date).getMonth()+1)+'-'+new Date(this.state.date).getFullYear()}<br/>GPS: {this.state.gps}</td>
                        </tr>
                        <tr className='text-left'>
                            <td colSpan="4">
                            <strong>  SUMMARY OF PLANNED ACTIVITIES:</strong> {this.state.summary}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='4'>
                            <strong>   Summary of KEY ACTIVITIES</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='4'>
                            <strong> DETAILS OF ACTIVITIES CARRIED OUT WITH DATES: (attach photographs)</strong>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>DATE</strong></td>
                            <td colSpan="2"><strong>ACTIVITY</strong></td>
                            <td><strong>OUTPUT/OUTCOME</strong></td>
                        </tr>
                        {row}
        
                        <tr>
                            <td colSpan="4" className='text-left'>
                            <strong>  CONCLUSION AND RECOMMENDATION:</strong> {this.state.conclusion}
                            <br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'><strong>
                            <strong>PLANNED FOLLOW-UP ACTIVITIES FOR NEXT WEEK OTHER COMMENT:</strong></strong> {this.state.followup}
                                <br/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                             <strong>Name of Supervisor:</strong>   {this.state.fname+' '+this.state.lname+' '+this.state.oname}<br/>
                               <br/>
                               <strong>DATE OF SUBMISSION:</strong> {new Date(this.state.date).getDate() +'-'+ (new Date(this.state.date).getMonth()+1)+' '+new Date(this.state.date).getFullYear()}<br/><br/>
                               <strong>PNONE:</strong> {this.state.phone}  <strong>EMAIL:</strong> {this.state.email}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                            <strong> IS WORK PROGRESSING ACCORDING TI SUBMITED PLAN?</strong> {(this.state.compliance).toUpperCase()}<br/><br/>

                            <strong>  GROUP SUPERVISOR'S COMMENTS AND SIGNATURE</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                            <strong> GENERAL SUPERVISOR'S COMMENTS AND SIGNATURE:</strong> 
                            </td>
                        </tr>
                    </tbody>

                </table>
              
                </div>
             
              </div>
              <div className='row'>
                  <div className='col-md-3'></div>
                   { Object.keys(this.state.Activity).map(e=>
                   <div className='col-md-4' style={{margin:10}}> <img style={{width:400, heigth:400}} src={this.state.Activity[e].imgurl}/></div>
                )   
                }
                     </div>
            </div>            
        )
    }
}