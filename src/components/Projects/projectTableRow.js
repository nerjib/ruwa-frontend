import React from 'react'
import { withRouter } from 'react-router-dom'

class ProjectTableRow extends React.Component{
    constructor(props){
        super(props)
    }

    goToUpdate = () =>{
        this.props.history.push('/updateproject/'+this.props.id)
    }
    goToDetails = () =>{
        this.props.history.push('/projectdetails/'+this.props.id)
    }
    render(){
        return(
            
                    <tr>       
                        <td>{this.props.sn+1}</td>
                        <td>{this.props.lot}</td>
                        <td>{this.props.title}</td>
                        <td>{this.props.ward +', '+this.props.lga}</td>
                        <td>{this.props.community}</td>
                        <td>{this.props.facility}</td>
                        <td>{this.props.status}</td>
                        <td>{this.props.supervisor}</td>
                        <td>{this.props.contractor}</td>
                        <td>
                            <div className='row'>
                       <a target='_blank' href={`/#/projectdetails/${this.props.id}`}> <button className='btn btn-default btn-info'  style={{width:'50px'}}
                             >View</button></a>
                      <a target='_blank' href={`/#/updateproject/${this.props.id}`}>      <button className='btn btn-default btn-info'  style={{width:'50px', marginLeft:5}}
                            >Edit </button></a>
                             </div>                            
                    </td>
                    </tr>
        )
    }
}

export default withRouter(ProjectTableRow);