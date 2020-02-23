import React from 'react';
import axios from 'axios';
import ReportTableRow from './reportTableRow'


class ReportTable extends React.Component{
    constructor(props){
        super(props);

        this.state={
            currentPage: 2,
        projectPerPage: 300,
        title:''
  
        }
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
          });
    }
    

    getDetails(pid){
     //   return('jj '+pid)
     axios.get('/api/v1/projects/'+pid)
     .then(res=>{
            this.setState({
                title: res.data[0].title
            })
            return  res.data[0].title

    }).catch(error=>{console.log(error)})
    }

    render() {
let row=[];


        const { currentPage, projectPerPage } = this.state;
  
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * projectPerPage;
        const indexOfFirstTodo = indexOfLastTodo - projectPerPage;
        const currentProjects = Object.keys(this.props.reports).slice(indexOfFirstTodo, indexOfLastTodo);
    
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Object.keys(this.props.reports).length / projectPerPage); i++) {
          pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
        }
    

    currentProjects.map(e=>{row.push(
        <ReportTableRow id={this.props.reports[e].id} currentprojects={currentProjects} 
        uid={this.props.reports[e].uid} title={this.getDetails(this.props.reports[e].pid)}
        pid={this.props.reports[e].pid} reportdate={this.props.reports[e].date}
       
        />)
    })
        return (
            <div>
                {pageNumbers}
                <tbody>
      {row}
              </tbody>
              </div>
        )
    }
}

export default ReportTable;