import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow';
import ReportTable from './reportTable'
class Reports extends React.Component{
constructor(props){
    super(props)
    this.state={
            reports:'',
            displayAll:'none',
            currentPage: 1,
            reportsPerPage: 100
    }
}

onLoad(){
   
        axios.get('https://ruwassa.herokuapp.com/api/v1/reports')
                .then(res => {
                    this.setState({
                            reports:res.data
                    })
                }).catch( errors=>{console.log(errors.message)})
 
}

componentDidMount(){
    this.inTerval=setInterval(()=>this.onLoad(),60000)
}
componentWillMount(){
    clearInterval(this.inTerval)
}
 
handleClick = (event) => {
    this.setState({
        currentPage: Number(event.target.id)
      });
}

render() {
    let row =[];

    const { currentPage, reportsPerPage } = this.state;
  
    // Logic for displaying todos
    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentProjects = Object.keys(this.state.reports).slice(indexOfFirstReport, indexOfLastReport);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(this.state.reports).length / reportsPerPage); i++) {
      pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
    }


currentProjects.map((e,i)=>{row.push(
   <ReportRow sn={i+1} id={this.state.reports[e].id}
        uid={this.state.reports[e].uid}
        pid={this.state.reports[e].pid} reportdate={new Date(this.state.reports[e].date).getDate()+'-'+new Date(this.state.reports[e].date).getMonth()
                        +'-'+new Date(this.state.reports[e].date).getFullYear()}
       
    />

    )
    })

    
           
            
            return(
        <div>
      <div>
      <div className='row'>
                <div> <button >Sanitation</button></div>
                <div> <button >Force Lift</button></div>
                <div> <button >Solar Motorized</button></div>
                <div> <button >Community</button></div>

            </div>
            <div>{pageNumbers}</div>
            <table className='table'>
      
                <thead>
                    <tr><th>S/N</th>
                        <th>RID</th>
                        <th>Title</th>
                        <th>LGA</th>
                        <th>Council Ward</th>
                        <th>COMM. NAME</th>
                        <th>LATITUDE</th>
                        <th>LONGITUDE</th>
                        <th>FACILITY</th>
                        <th>LOT NO.</th>
                        <th>CONTRACTOR</th>
                       <th>STATE SUPERVISOR</th> 
                       <th>LGA SUPERVISOR</th>
                       <th>Date Submitted</th>
                    </tr>
                </thead>
                <tbody >
                {row}
                </tbody>
              {// <ReportTable reports={this.state.reports}/>
              }
{//style={{display:this.state.displayAll}}
            }
            </table>
            </div>
            
        </div>
    )
}

}


export default Reports;