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
            <div>
                    <tr>       
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.id}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 20px'}}>{this.props.title}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.loc +', '+this.props.lga}</td>
                        <td style={{width:'100px', padding:'0px 5px 0px 10px'}}>{this.props.status}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.supervisor}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.lid}</td>

                        <td>
                            <button className='btn btn-default btn-info'  style={{width:'200px'}}
                             onClick={this.goToUpdate}>Edit </button>                            
                        </td>
                    </tr>
                    <br/>
            </div>
        )
    }
}

export default withRouter(ProjectTableRow);