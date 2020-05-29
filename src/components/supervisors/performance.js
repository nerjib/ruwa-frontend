import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

 class Performance extends React.Component{
    constructor(props){
        super(props);

        this.state={
            performance:''
        }
    }
    load=()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/performance/local')
        .then((res) =>{

            this.setState({performance: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
    }
    componentDidMount(){
     this.load()
    }

    componentWillMount(){
        this.setState({
            supervisors:''
        })
    }

    goToLocalByLot=()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/performance/local/bylot')
        .then((res) =>{

            this.setState({performance: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
    }
        goToState=()=>{
            axios.get('https://ruwassa.herokuapp.com/api/v1/performance/state')
            .then((res) =>{
    
                this.setState({performance: res.data})
            })
            .catch(function(error){
                 console.log(error)
            })
    }
    goToStateByLot=()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/performance/state/bylot')
        .then((res) =>{

            this.setState({performance: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
    }
    render(){
        let row=[]

        Object.keys(this.state.performance).map((e,i)=>row.push(<tr><td>{i+1}</td>
        <td>{this.state.performance[e].last_name +' '+this.state.performance[e].first_name}</td><td>{this.state.performance[e].title}</td>
        <td>{this.state.performance[e].lot}</td><td>{this.state.performance[e].count}</td><td>{this.state.performance[e].pstatus}</td>
        </tr>))
  
        return(
            <div>
                    <div className='row'>
                        <button onClick={this.load}>Local</button>       
                        <button onClick={this.goToLocalByLot}>Local by lot</button> 
                        <button onClick={this.goToState}>State</button>                      
                        <button onClick={this.goToStateByLot}>State by lot</button>                      
              
                    </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SN</th><th>Name</th><th>Title</th><th>lot</th><th>No of Reports</th><th>Project Stage</th>
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

export default withRouter(Performance)