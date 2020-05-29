import React from 'react';
import axios from 'axios'


export default class ProjectDetails extends React.Component{
    constructor(props){
        super(props)

        this.state={
                project:'',
                reports:'',
                lid:'',
                weeklyreport:''
        }
    }

    componentDidMount=()=>{
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
              //  lid: res.data[0].local_id
            })

            axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+res.data[0].local_id)
           // alert(res.data[0].local_id+2)
            .then(res=>{
                    this.setState({
                        lid: res.data[0].first_name+' '+res.data[0].last_name
                    })
            }).catch(error=>{console.log(error.message)})
        }).catch(error=>{console.log(error.message)})
      
    

    }
    gotoReport=(id)=>{
//        alert(id)
     this.props.history.push('/reports/'+id)
    }

    render() {

        return(
            <div>
               <div> Title:{this.state.project.title}</div>
              <div>  Status:{this.state.project.status}</div>
              <div>  Stage:{this.state.project.pstatus}</div>
              <div>  State Supervisor:{this.state.project.first_name+' '+this.state.project.last_name}</div>
              <div>  Local Supervisor:{this.state.lid}</div>


              <table className='table'>
                  <thead>
                      <tr>
                          <th>SN</th>
                          <th>Summary From</th>
                          <th>Summary to</th>
                          <th>Supervisor</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                             Object.keys(this.state.weeklyreport).map((e,i)=><tr><td>{i+1}</td><td>{this.state.weeklyreport[e].summaryfrom}</td>
                             <td>{this.state.weeklyreport[e].summaryto}</td>
                             <td>{this.state.project.first_name+' '+this.state.project.last_name}</td>
                             <td><a target='_blank' href={`/#/weeklyreportdetails/${this.state.weeklyreport[e].id}`} ><button >view</button></a></td>
                             </tr>)
                      }
                      
             {
              
               Object.keys(this.state.reports).map((e,i)=>
               <tr key={e+1}>
                   <td>{i+1}</td>
                   <td>{this.state.reports[e].summaryfrom}</td>
                   <td>{this.state.reports[e].summaryto}</td>
                   <td>{this.state.reports[e].first_name+' '+this.state.reports[e].last_name}</td>
                   <td><button onClick={()=>this.gotoReport(this.state.reports[e].id)}>view</button></td>

               </tr> 
               )
             }
             
             </tbody>
              </table>
            </div>
        )
    }
}