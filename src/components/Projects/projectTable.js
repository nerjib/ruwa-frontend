import React from 'react';
import  ProjectTableRow from './projectTableRow'


export default class Supervisors extends React.Component{
    constructor(props){
        super(props);      
        this.state={
            currentPage: 1,
        projectPerPage: 1000
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
     //   Object.keys(this.props.projects).map(e)
        const currentProjects = Object.keys(this.props.projects).slice(indexOfFirstTodo, indexOfLastTodo);
    
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Object.keys(this.props.projects).length / projectPerPage); i++) {
          pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
        }
    
        let kk=0;
        let kk2=0;

    currentProjects.map((e,i)=>{
       
        if(this.props.pstatus=='all'){
            if(this.props.projects[e].phase == this.props.phase & this.props.projects[e].title==this.props.focus){
                    kk ++;
                row.push(
                <ProjectTableRow sn={kk} title={this.props.projects[e].title}  id={this.props.projects[e].id} lot={this.props.projects[e].lot}
                loc={this.props.projects[e].location} status={this.props.projects[e].status} ward={this.props.projects[e].ward}
                    supervisor={this.props.projects[e].first_name+' '+this.props.projects[e].last_name+' '+this.props.projects[e].other_name}
                    started={this.props.projects[e].started} fn={this.props.projects[e].fn} ln={this.props.projects[e].ln} on={this.props.projects[e].on}
                    lga={this.props.projects[e].lga} facility={this.props.projects[e].facility} community={this.props.projects[e].community}   contractor={this.props.projects[e].company }     />)
                    
                }

        }
     else{
        if(this.props.projects[e].phase == this.props.phase & this.props.projects[e].status == this.props.pstatus & this.props.projects[e].title==this.props.focus){
            kk2 ++
            row.push(
            <ProjectTableRow sn={kk2} title={this.props.projects[e].title}  id={this.props.projects[e].id} lot={this.props.projects[e].lot}
            loc={this.props.projects[e].location} status={this.props.projects[e].status} ward={this.props.projects[e].ward}
                supervisor={this.props.projects[e].first_name+' '+this.props.projects[e].last_name+' '+this.props.projects[e].other_name}
                fn={this.props.projects[e].fn} ln={this.props.projects[e].ln} on={this.props.projects[e].on}
             started={this.props.projects[e].started}   lga={this.props.projects[e].lga} facility={this.props.projects[e].facility} community={this.props.projects[e].community}   contractor={this.props.projects[e].company }     />)
        }

    }
}
    )
        return(
            <div>
                pages {pageNumbers}
                <table className='table text-left'>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Lots</th>
                            <th>Title</th>
                            <th>location</th>
                            <th>Community</th>
                     {//*       <th>Facility</th>
                            }       <th>Status</th>
                            <th>State Supervisor</th>
                            <th>Local Supervisor</th>
                            <th>Contractor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody style={{fontWeight:"bold"}}>
                    {row}

                    </tbody>
                </table>

               
            </div>
        )
    }
}