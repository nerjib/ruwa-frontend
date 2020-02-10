import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

 class ReportRow extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            lidName:'',
            pidName:'',
            lidlastName:'',
            pidlga:'',
            pidloc:''

        })
    }

componentDidMount(){
    axios.get('http://localhost:5000/api/v1/projects/'+this.props.pid)
        .then(res=>{
          this.setState({
            pidName: res.data[0].title,
            pidlga: res.data[0].lga,
            pidloc: res.data[0].location,


          })  
        }).catch(error=>{console.log(error.message)})
        
        axios.get('http://localhost:5000/api/v1/users/'+this.props.lid)
        .then(res=>{
          this.setState({
            lidName: res.data[0].first_name,
            lidlastName:res.data[0].last_name
          })  
        }).catch(error=>{console.log(error.message)})
        
}

goToDetails =(id)=>{
    this.props.history.push('/reports/'+id)
}

render() {
    return (
<div>
    <br/>
   <tr>
    <td  style={{width:10}}>{this.props.id}</td>
   <td style={{width:200}}>{this.state.pidName}</td>
   <td style={{width:200}}>{this.state.pidloc}</td>
   <td style={{width:200}}>{this.state.pidlga}</td>
   <td style={{width:200}}>{this.state.lidlastName+' '+this.state.lidName}</td>
   <td style={{width:100}}>{this.props.reportdate}</td>
   <td style={{width:100}}><button className='btn btn-default btn-info' 
   onClick={()=>{this.goToDetails(this.props.id)}}>View</button></td>
   </tr>
   <br/>


 </div>
    )
}
}

export default withRouter(ReportRow);