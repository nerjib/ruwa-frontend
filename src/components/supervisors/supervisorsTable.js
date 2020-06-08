import React from 'react';
import axios from 'axios';
import  SupervisorsTableRow from './supervisorsTableRow'
import { Link, Route, Redirect } from 'react-router-dom';


export default class SupervisorsTable extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:'',
            currentPage: 1,
            supervisorsPerPage: 1000
        }
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
          });
    }
    reload=()=>{this.props.reload()}
    
    render(){
        let row=[];
        const { currentPage, supervisorsPerPage } = this.state;
  
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * supervisorsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - supervisorsPerPage;
        const currentProjects = Object.keys(this.props.supervisors).slice(indexOfFirstTodo, indexOfLastTodo);
    
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Object.keys(this.props.supervisors).length / supervisorsPerPage); i++) {
          pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
        }
    

    currentProjects.map((e,i)=>{row.push(
        <SupervisorsTableRow sn={i+1} id={this.props.supervisors[e].id} fname={this.props.supervisors[e].first_name} reload={this.reload}
            email={this.props.supervisors[e].email}  phone={this.props.supervisors[e].phone}  lname={this.props.supervisors[e].last_name}
            oname={this.props.supervisors[e].other_name} lga={this.props.supervisors[e].lga} active={this.props.supervisors[e].active}  role={this.props.supervisors[e].first_name}
            />)
        })
    

            return(
                <div><div>
                <Link to='/home'>    <button>Home</button></Link>
                </div>
                   pages {pageNumbers}
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Supervisor Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Other Name</th>
                                <th>Phone No.</th>
                                <th>Email</th>
                                <th>LGA</th>
                            </tr>
                        </thead>
                    {row}

                    </table>
                </div>
            )
        }
    }
