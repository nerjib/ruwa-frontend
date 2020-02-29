import React from 'react';
import axios from 'axios'


export default class ProjectDetails extends React.Component{
    constructor(props){
        super(props)

        this.state={
                project:'',
                reports:''
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