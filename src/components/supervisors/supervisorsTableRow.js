import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class SupervisorTableRow extends React.Component{
    constructor(props){
        super(props)
    }

   activeSwith=()=>{
   // alert(this.props.active)
   if (this.props.active=='active'){
        axios.put('https://ruwassa.herokuapp.com/api/v1/users/deactivate/'+this.props.id)
        this.props.reload()
   }
   else{
    axios.put('https://ruwassa.herokuapp.com/api/v1/users/reactivate/'+this.props.id)
    this.props.reload()
   }
   }
   updateuser=(id)=>{
    // alert(id)
       this.props.history.push('/updatesupervisor/'+id)

   }
    render(){
        return(
            
                    <tr>
                        <td>{this.props.sn}</td>
                        <td >{this.props.id}</td>
                        <td >{this.props.fname}</td>
                        <td>{this.props.lname}</td>
                        <td >{this.props.oname}</td>
                        <td >{this.props.phone}</td>
                        <td >{this.props.email}</td>
                        <td >{this.props.lga}</td>
                        <td >
                            <button onClick={this.activeSwith}>{this.props.active}</button>                            
                        </td>
                        <td >
                            <button onClick={()=>this.updateuser(this.props.id)}>Edit</button>                            
                        </td>
</tr>
            
        )
    }
}

export default withRouter(SupervisorTableRow)