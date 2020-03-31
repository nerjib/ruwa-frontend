import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

 class WeeklyReportRows extends React.Component{
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
}

goToDetails =(id)=>{
    //this.props.history.push('/reports/'+id)
  //  /weeklyreportdetails/
}

render() {
//    alert('this.props.sn')
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
   <td >{new Date(this.props.date).getDate() +'-'+ (new Date(this.props.date).getMonth()+1)+' '+new Date(this.props.date).getFullYear()}</td>
   <td ><a href={`/#/weeklyreportdetails/${this.props.id}`}><button className='btn btn-default btn-info' 
  >View</button></a></td>
</tr>
    )
}
}

export default withRouter(WeeklyReportRows);