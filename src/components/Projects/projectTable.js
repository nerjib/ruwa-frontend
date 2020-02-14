import React from 'react';
import  ProjectTableRow from './projectTableRow'


export default class Supervisors extends React.Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    render(){
        let row=[];

    Object.keys(this.props.projects).map(e=>{row.push(
        <ProjectTableRow title={this.props.projects[e].title}  id={this.props.projects[e].id}
        loc={this.props.projects[e].location} status={this.props.projects[e].status} 
            supervisor={this.props.projects[e].supervisor} lid={this.props.projects[e].local_id}
            lga={this.props.projects[e].lga}
        />)
    })
        return(
            <div>
                 
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Project ID</th>
                            <th>Title</th>
                            <th>location</th>
                            <th>Status</th>
                            <th>Supervisor</th>
                            <th></th>
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