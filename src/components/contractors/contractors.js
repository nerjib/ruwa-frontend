import React from 'react';
import axios from 'axios';
import ContractorsTable from './contractorsTable';
import { withRouter } from 'react-router-dom';

//let row=[];

 class Contractors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            contractors:''
        }
    }
    componentDidMount(){
        axios.get('/api/v1/contractors')
            .then((res) =>{

                this.setState({contractors: res.data})
            })
            .catch(function(error){
                 console.log(error)
            })
    }


    goToAdd=()=>{
      this.props.history.push('/contractors/add')
    }
    goToHome=()=>{
        this.props.history.push('/home')
    }

    render(){
  
        return(
            <div>
               <div className='col-md-2'>    <button onClick={this.goToHome} className="btn btn-info">Home</button></div>
             <div className="row">
                <ContractorsTable contractors={this.state.contractors}/>
                </div>
                <div className="row" >
                <div className='col-md-2'>    <button onClick={this.goToAdd} className="btn btn-info">Add Contractor</button></div>
                <div e='col-md-2'>    <button className="btn btn-info">Drop Contractor</button></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Contractors)