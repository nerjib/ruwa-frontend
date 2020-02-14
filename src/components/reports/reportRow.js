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
        
        axios.get('http://localhost:5000/api/v1/users/'+this.props.uid)
        .then(res=>{
          this.setState({
            lidName: Object.keys(res.data).map(e=>res.data[e].first_name),
            lidlastName:res.data[0].last_name
          })  
        }).catch(error=>{console.log(error.message)})
        
}

goToDetails =(id)=>{
    this.props.history.push('/reports/'+id)
}

render() {
    return (

   <tr>
    <td >{this.props.id}</td>
   <td >{this.state.pidName}</td>
   <td >{this.state.pidloc}</td>
   <td >{this.state.pidlga}</td>
   <td >{this.state.lidlastName+' '+this.state.lidName}</td>
   <td >{this.props.reportdate}</td>
   <td ><button className='btn btn-default btn-info' 
   onClick={()=>{this.goToDetails(this.props.id)}}>View</button></td>
   </tr>
    )
}
}

export default withRouter(ReportRow);