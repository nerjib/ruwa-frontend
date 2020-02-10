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
        location={this.props.projects[e].location} status={this.props.projects[e].status} 
            supervisor={this.props.projects[e].supervisor} lid={this.props.projects[e].local_id}
        />)
    })
        return(
            <div>
                 <div style={{background:'gray'}}>
                <tr>
                <td style={{width:'100px', padding:'0px 5px 0px 20px'}}>Project ID</td>
                    <td style={{width:'200px', padding:'0px 5px 0px 20px', margin:'0px 5px 5px 20px'}}>title</td>
                <td style={{width:'200px', padding:'0px 5px 5px 20px'}}>location</td>
                <td style={{width:'200px', padding:'0px 5px 5px 20px'}}>status</td>
                <td style={{width:'200px', padding:'0px 5px 5px 20px'}}>Supervisor ID</td></tr>

                </div>
                                {row}

               
            </div>
        )
    }
}