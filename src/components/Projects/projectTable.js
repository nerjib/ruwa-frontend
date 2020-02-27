import React from 'react';
import  ProjectTableRow from './projectTableRow'


export default class Supervisors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            currentPage: 1,
        projectPerPage: 100
  
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
    

    currentProjects.map((e,i)=>{row.push(
        <ProjectTableRow sn={i} title={this.props.projects[e].title}  id={this.props.projects[e].id}
        loc={this.props.projects[e].location} status={this.props.projects[e].status} community={this.props.projects[e].community}
            supervisor={this.props.projects[e].supervisor} lid={this.props.projects[e].local_id}
            lga={this.props.projects[e].lga} contractor_id={this.props.projects[e].contractor_id}
        />)
    })
        return(
            <div>
                {pageNumbers}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Project ID</th>
                            <th>Title</th>
                            <th>location</th>
                            <th>Status</th>
                            <th>Supervisor</th>
                            <th>Contractor Id</th>
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