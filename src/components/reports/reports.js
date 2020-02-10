import React from 'react';
import axios from 'axios';
import ReportRow from './reportRow'

class Reports extends React.Component{
constructor(props){
    super(props)
    this.state={
            reports:''
    }
}


componentDidMount(){
axios.get('http://localhost:5000/api/v1/reports')
        .then(res => {
            this.setState({
                    reports:res.data
            })
        }).catch( errors=>{console.log(errors.message)})
}

render() {
    let row =[];
    
        /*    Object.keys(this.state.reports).map(e=>{row.push(<ReportRow id={this.state.reports[e].id}
                id={this.state.reports[e].id} id={this.state.reports[e].id} lid={this.state.reports[e].local_id}
                pid={this.state.reports[e].project_id} reportdate={this.state.reports[e].reportdate}
                onsit={this.state.reports[e].onsite} compliance={this.state.reports[e].compliance} 
                ourl1={this.state.reports[e].photourl1} url2={this.state.reports[e].photourl2}
                urrl3={this.state.reports[e].photourl3} remark={this.state.reports[e].remark}
            />

            )
            })*/
            Object.keys(this.state.reports).map(e=>{row.push(
                <ReportRow 
                />)
            })
            return(
        <div>
            {row}
        </div>
    )
}

}


export default Reports;