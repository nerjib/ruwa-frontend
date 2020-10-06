import React from 'react'
import { withRouter } from 'react-router-dom'

class ProjectTableRow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            acttype: ''
        }
    }

    goToUpdate = () =>{
        this.props.history.push('/updateproject/'+this.props.id)
    }
    goToDetails = () =>{
        this.props.history.push('/projectdetails/'+this.props.id)
    }
    checkWard=(e)=>{
            if(e){
                return e
            }
            return ''
    }
    componentDidMount=()=>{
      const acttype= localStorage.getItem('acttype')
        this.setState({
            acttype
        })
        
    }
    render(){
        return(
            
                    <tr>       
                        <td>{this.props.sn}</td>
                        <td>{this.props.lot}</td>
                        <td>{this.props.title}</td>
                        <td>{this.checkWard(this.props.ward) +', '+this.props.lga}</td>
                        <td>{this.props.community}</td>
                    {//}    <td>{this.props.facility}</td>
                     } <td>{this.props.status}</td>
                        <td>{this.props.supervisor }</td>
                        <td>{this.props.fn+' '+this.props.ln+' '+this.props.on}</td>
                        <td>{this.props.contractor}</td>
                    {this.state.acttype == 'superadmin' &&        <td>{this.props.started}</td> }

                        <td>
                            <div className='row'>
                       <a target='_blank' href={`/#/projectdetails/${this.props.id}`}> <button className='btn btn-default btn-info'  style={{width:'50px'}}
                             >View</button></a>
                   {this.state.acttype == 'superadmin' &&   <a target='_blank' href={`/#/updateproject/${this.props.id}`}>      <button className='btn btn-default btn-info'  style={{width:'50px', marginLeft:5}}
                            >Edit </button></a>
        }
                             </div>                            
                    </td>
                    </tr>
        )
    }
}

export default withRouter(ProjectTableRow);