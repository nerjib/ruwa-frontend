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
  let lat=0;
  let lon=0
  if(this.props.gps){
    lat=((this.props.gps).split(","))[0];
    lon=((this.props.gps).split(","))[1]
  }
    return (
   <tr> <td>{this.props.sn}</td>
    <td >{this.props.lot}</td>
   <td >{this.props.title}</td>
   <td >{this.props.lga}</td>
   <td >{this.props.ward}</td>
   <td>{this.props.community}</td>
   <td>{lat}</td>
   <td>{lon}</td>
   <td>{this.props.facility}</td>
   <td>{this.props.contractor}</td>
   <td>{this.props.statesuper}</td>
   <td >{this.props.localsup}</td>
   <td >{this.props.status}</td>
   <td >{new Date(this.props.date).getDate() +'-'+ (new Date(this.props.date).getMonth()+1)+' '+new Date(this.props.date).getFullYear()}</td>
   <td ><a target='_blank' href={`/#/reports/${this.props.id}`}><button className='btn btn-default btn-info' 
  >View</button></a></td>
</tr>
    )
}
}

export default withRouter(ReportRow);