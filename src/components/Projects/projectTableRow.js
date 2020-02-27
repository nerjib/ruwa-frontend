import React from 'react'
import { withRouter } from 'react-router-dom'

class ProjectTableRow extends React.Component{
    constructor(props){
        super(props)
    }

    goToUpdate = () =>{
        this.props.history.push('/updateproject/'+this.props.id)
    }
    render(){
        return(
            
                    <tr>       
                        <td>{this.props.sn+1}</td>
                        <td>{this.props.id}</td>
                        <td>{this.props.title}</td>
                        <td>{this.props.community +', '+this.props.lga}</td>
                        <td>{this.props.status}</td>
                        <td>{this.props.lid}</td>
                        <td>{this.props.contractor_id}</td>
                        <td>
                            <button className='btn btn-default btn-info'  style={{width:'200px'}}
                             onClick={this.goToUpdate}>Edit </button>                            
                    </td>
                    </tr>
        )
    }
}

export default withRouter(ProjectTableRow);