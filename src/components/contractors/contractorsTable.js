import React from 'react';
import axios from 'axios';
import  ContractorsTableRow from './contractorsTableRow'


export default class ContractorsTable extends React.Component{
    constructor(props){
        super(props);

        this.state={
            contactors:''
        }
    }

    render(){
        let row=[];

        Object.keys(this.props.contractors).map(e=>{row.push(
            <ContractorsTableRow id={this.props.contractors[e].id} company={this.props.contractors[e].company} 
            email={this.props.contractors[e].email}  phone={this.props.contractors[e].phone}  lname={this.props.contractors[e].last_name}
            address={this.props.contractors[e].address}
            />)
        })
            return(
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Contractors Id</th>
                                <th>Company</th>
                                <th>Address</th>
                                <th>Phone No.</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                    {row}

                    </table>
                </div>
            )
        }
    }
