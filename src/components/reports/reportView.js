import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow';
import ReportTable from './reportTable'
import StatusReports from './statusreports';
import Calender from './calender'
import {Link} from 'react-router-dom'
import ReportViewBlock from './reportViewBlock'

export default class ReportsView extends React.Component{
constructor(props){
    super(props)
    this.state={
        reports:'',
        displayAll:'none',
        currentPage: 1,
        reportsPerPage: 15,
        allreports:'',
        reportfocus:'',
        day:new Date().getDate(),
        month:new Date().getMonth(),
        title:''
    }
}

onLoad=()=>{
   

            axios.get('https://ruwassa.herokuapp.com/api/v1/reports/completereports/all')
            .then(res => {
                this.setState({
                        allreports:res.data,
                        reportfocus:'all'
                })
            }).catch( errors=>{console.log(errors.message)})


}

componentDidMount(){
this.inTerval=setInterval(()=>this.onLoad(),600000)
this.onLoad();
}
componentWillMount(){
clearInterval(this.inTerval)
}

geturl=(id)=>{
    let url=id
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/'+id)
    .then(res=>{
//        alert(id)

      return url
        this.setState({
    //url: res.data[0].imgurl
        })
    }).catch(error=>{console.log(error)})
  //  return url
}

handleClick = (event) => {
    this.setState({
        currentPage: Number(event.target.id)
      });
}
render () {

    let row =[];

    const { currentPage, reportsPerPage } = this.state;
  
    // Logic for displaying todos
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage
    const currentProjects = Object.keys(this.state.allreports).slice(indexOfFirstReport, indexOfLastReport);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(this.state.allreports).length / reportsPerPage); i++) {
      pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
    }
    
    currentProjects.map((e,i)=>{
 row.push(
  <ReportViewBlock key={i} title={this.state.allreports[e].title} community={this.state.allreports[e].community}
   name={this.state.allreports[e].first_name+' '+this.state.allreports[e].last_name} gps={this.state.allreports[e].gps} date={this.state.allreports[e].date} rid={this.state.allreports[e].id}/>
    )
      }  )
       
   
    

    return (
        <div>
{row}
        </div>
    )



}


}