import React from 'react';
import axios from 'axios';
import SupervisorsTable from './supervisorsTable';
import { withRouter } from 'react-router-dom';

let row=[];

 class Supervisors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/api/v1/users')
            .then((res) =>{

                this.setState({supervisors: res.data})
            })
            .catch(function(error){
                 alert(error)
            })
    }

    componentWillMount(){
        this.setState({
            supervisors:''
        })
    }

    goToAdd=()=>{
        this.props.history.push('/supervisors/add')
    }

    render(){
  
        return(
            <div>
                <div className="row">
                <SupervisorsTable supervisors={this.state.supervisors}/>
                </div>
                <div className="row" >
                <div className='col-md-2'>    <button onClick={this.goToAdd} className="btn btn-info">Add supervisor</button></div>
                <div e='col-md-2'>    <button className="btn btn-info">Remove supervisor</button></div>

                </div>
            </div>
        )
    }
}

export default withRouter(Supervisors)