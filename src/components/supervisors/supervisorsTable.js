import React from 'react';
import axios from 'axios';
import  SupervisorsTableRow from './supervisorsTableRow'


export default class SupervisorsTable extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:''
        }
    }

    render(){
        let row=[];

        Object.keys(this.props.supervisors).map(e=>{row.push(
            <SupervisorsTableRow id={this.props.supervisors[e].id} fname={this.props.supervisors[e].first_name} 
            email={this.props.supervisors[e].email}  phone={this.props.supervisors[e].phone}  lname={this.props.supervisors[e].last_name}
            oname={this.props.supervisors[e].other_name}  role={this.props.supervisors[e].first_name}
            />)
        })
            return(
                <div>
                    {row}
                </div>
            )
        }
    }
