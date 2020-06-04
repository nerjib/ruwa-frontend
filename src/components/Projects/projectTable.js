import React from 'react';
import  ProjectTableRow from './projectTableRow'


export default class Supervisors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            currentPage: 1,
        projectPerPage: 20
  }
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
          });
    }
    
    render(){
        let row=[];


        const { currentPage, projectPerPage } = this.state;
  
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * projectPerPage;
        const indexOfFirstTodo = indexOfLastTodo - projectPerPage;
        const currentProjects = Object.keys(this.props.projects).slice(indexOfFirstTodo, indexOfLastTodo);
    
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Object.keys(this.props.projects).length / projectPerPage); i++) {
          pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
        }
    

    currentProjects.map((e,i)=>{
        if(this.props.projects[e].phase !='7'){

        row.push(
        <ProjectTableRow sn={i} title={this.props.projects[e].title}  id={this.props.projects[e].id} lot={this.props.projects[e].lot}
        loc={this.props.projects[e].location} status={this.props.projects[e].status} ward={this.props.projects[e].ward}
            supervisor={this.props.projects[e].first_name+' '+this.props.projects[e].last_name}
            lga={this.props.projects[e].lga} facility={this.props.projects[e].facility} community={this.props.projects[e].community}   contractor={this.props.projects[e].company }     />)
    }
}
    )
        return(
            <div>
                pages {pageNumbers}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Lots</th>
                            <th>Title</th>
                            <th>location</th>
                            <th>Community</th>
                            <th>Facility</th>
                            <th>Status</th>
                            <th>Supervisor</th>
                            <th>Contractor</th>
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