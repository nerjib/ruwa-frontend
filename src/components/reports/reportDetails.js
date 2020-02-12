import React from 'react';
import axios from 'axios';


export default class ReportDetails extends React.Component {
constructor(props){
    super(props)
    this.state={
        project_id: '',
        local_id: '',
        reportdate: '',
        onsite: '',
        compliance: '',
        photourl1: '',
        photourl2: '',
        photourl3: '',
        remark: '',
        date: '',
        ptitle:'',
        plocation:'',
        plga:'',
        pgps:'',
        fname:'',
        lname:''
    }
}


    componentDidMount(){
        const { params } = this.props.match;

        axios.get('http://localhost:5000/api/v1/localreports/'+params.id)
            .then(res=>{
              this.setState({
                project_id: res.data[0].project_id,
                local_id: res.data[0].local_id,
                reportdate: res.data[0].reportdate,
                onsite:res.data[0].onsite,
                compliance:res.data[0].compliance,
                photourl1:res.data[0].photourl1,
                photourl2:res.data[0].photourl2,
                photourl3:res.data[0].photourl3,
                remark:res.data[0].remark,
                date:res.data[0].date,
    
              })
              
              axios.get('http://localhost:5000/api/v1/projects/'+this.state.project_id)
              .then(res=>{
                this.setState({
                  ptitle:res.data[0].title,
                  plocation: res.data[0].location,
                  plga: res.data[0].lga,
                  pgps: res.data[0].gps
                })
            })  

            axios.get('http://localhost:5000/api/v1/users/'+this.state.local_id)
              .then(res=>{
                this.setState({
                  fname:res.data[0].first_name,
                  lname: res.data[0].last_name,
                  
                })
            })  
  

            })
        }
            
    render(){
        const { params } = this.props.match;

        return(
            <div className='fluid-container'>
                <br/><br/>
                <div><span><h5>KADUNA FIELD OFFICE: WASH WEEKLY PROGRESS REPORT</h5></span></div>
                <table className='table table-bordered'>
                    <thead>
                        
                        <tr>
                            <th colSpan="3">
                                NAME OF PROJECT: KADUNA RUWASSA:
                            </th>
                            <th>
                                REPORT NO
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='text-left'>
                            <td > LGA:</td>
                            <td >CONTRACTOR:</td>
                            <td>LOT NO:</td>
                            <td>DATE:</td>
                        </tr>
                        <tr className='text-left'>
                            <td colSpan="4">
                                SUMMARY OF PLANNED ACTIVITIES
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
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                CONCLUSION AND RECOMMENDATION:
                            <br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                PLANNED FOLLOW-UP ACTIVITIES FOR NEXT WEEK OTHER COMMENT:
                                <br/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                DATE OF SUBMISSION<br/><br/>
                                PNONE.. EMAIL...
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                                IS WORK PROGRESSING ACCORDING TI SUBMITED PLAN?<br/><br/>

                                GROUP SUPERVISOR'S COMMENTS AND SIGNATURE
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4" className='text-left'>
                              GENERAL SUPERVISOR'S COMMENTS AND SIGNATURE
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>            
        )
    }
}