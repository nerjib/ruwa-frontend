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
            pidloc: '',
            pidward: '',
            pidcommunity:'',
            pidfacility:'',
            pidlot:'',
            localsuper:'',
            statesuper: ''
        })
    }

componentDidMount(){
  //preventDefault()
   axios.get('https://ruwassa.herokuapp.com/api/v1/projects/'+this.props.pid)
        .then(res=>{
          this.setState({
            pidName: res.data[0].title,
           pidlga: res.data[0].lga,
            pidloc: res.data[0].location,
            pidward: res.data[0].ward,
            pidcommunity: res.data[0].community,
            pidfacility:res.data[0].facility,
            pidlot: res.data[0].lot,
          })  
                        //get contractors companyname
                        axios.get('https://ruwassa.herokuapp.com/api/v1/contractors/'+res.data[0].contractor_id)
                      .then(res1=>{
                        this.setState({
                        contractor: res1.data[0].company,
                        
                        })  
                      }).catch(error=>{console.log(error.message)})
                      
                       //get localId name 
                       axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+res.data[0].local_id)
                       .then(res2=>{
                         this.setState({
                         localsuper: res2.data[0].first_name+' '+ res2.data[0].last_name,
                         
                         })  
                       }).catch(error=>{console.log(error.message)})
                    //get StateId name 
                    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+res.data[0].state_id)
                    .then(res3=>{
                      this.setState({
                      statesuper: res3.data[0].first_name+' '+ res3.data[0].last_name,
                      
                      })  
                    }).catch(error=>{console.log(error.message)})


        }).catch(error=>{console.log(error.message)})
        
        axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+this.props.uid)
        .then(res=>{
          this.setState({
            lidName: res.data.map(e=>res.data[e].first_name),
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
     <td>{this.props.sn}</td>
    <td >{this.props.id}</td>
   <td >{this.state.pidName}</td>
   <td >{this.state.pidlga}</td>
   <td >{this.state.pidward}</td>
   <td>{this.state.pidcommunity}</td>
   <td>{this.state.latitude}</td>
   <td>{this.state.longitude}</td>
   <td>{this.state.pidfacility}</td>
   <td>{this.state.pidlot}</td>
   <td>{this.state.contractor}</td>
   <td>{this.state.statesuper}</td>
   <td >{this.state.localsuper}</td>
   <td >{this.props.reportdate}</td>
   <td ><button className='btn btn-default btn-info' 
   onClick={()=>{this.goToDetails(this.props.id)}}>View</button></td>
   </tr>
    )
}
}

export default withRouter(ReportRow);