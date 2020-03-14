import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

 class weeklyReportRow extends React.Component{
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
    this.props.history.push('/reports/'+id)
}

render() {
    alert(this.props.sn)
    return (
        <div>
            hghjjfjjfjhfjjfjjfj
   <tr> <td>{this.props.sn}</td>
    <td >{this.props.lot}</td>
   <td >{this.props.title}</td>
   <td >{this.props.lga}</td>
   <td >{this.props.ward}</td>
   <td>{this.props.community}</td>
   <td>{((this.props.gps).split(","))[0]}</td>
   <td>{((this.props.gps).split(","))[1]}</td>
   <td>{this.props.facility}</td>
   <td>{this.props.contractor}</td>
   <td>{this.props.statesuper}</td>
   <td >{this.props.localsup}</td>
   <td >{new Date(this.props.date).getDate() +'-'+ (new Date(this.props.date).getMonth()+1)+' '+new Date(this.props.date).getFullYear()}</td>
   <td ><button className='btn btn-default btn-info' 
   onClick={()=>{this.goToDetails(this.props.id)}}>View</button></td>
  <td>ghhlkkhkhK fgkgl</td> llllll
</tr>
</div>
    )
}
}

export default withRouter(weeklyReportRow);