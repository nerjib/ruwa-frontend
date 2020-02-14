import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow'

class Reports extends React.Component{
constructor(props){
    super(props)
    this.state={
            reports:'j'
    }
}

onLoad(){
   
        axios.get('http://localhost:5000/api/v1/reports')
                .then(res => {
                    this.setState({
                            reports:res.data
                    })
                }).catch( errors=>{console.log(errors.message)})
 
}

componentDidMount(){
    this.inTerval=setInterval(()=>this.onLoad(),1000)
}
componentWillMount(){
    clearInterval(this.inTerval)
}
 
render() {
    let row =[];
    
            Object.keys(this.state.reports).map(e=>{row.push(<ReportRow id={this.state.reports[e].id}
                uid={this.state.reports[e].uid}
                pid={this.state.reports[e].pid} reportdate={this.state.reports[e].date}
               
            />

            )
            })
           
            
            return(
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Report Id</th>
                        <th>Title</th>
                        <th>LGA</th>
                        <th>Contractor</th>
                        <th>Supervisor</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
            
        </div>
    )
}

}


export default Reports;