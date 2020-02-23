import React from 'react';
import axios from 'axios';
import  SupervisorsTableRow from './supervisorsTableRow'


export default class SupervisorsTable extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:'',
            currentPage: 1,
            supervisorsPerPage: 3
        }
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
          });
    }
    
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
    

    currentProjects.map(e=>{row.push(
        <SupervisorsTableRow id={this.props.supervisors[e].id} fname={this.props.supervisors[e].first_name} 
            email={this.props.supervisors[e].email}  phone={this.props.supervisors[e].phone}  lname={this.props.supervisors[e].last_name}
            oname={this.props.supervisors[e].other_name}  role={this.props.supervisors[e].first_name}
            />)
        })
    

            return(
                <div>
                    {pageNumbers}
                    <table className='table'>
                        <thead>
                            <tr>
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
