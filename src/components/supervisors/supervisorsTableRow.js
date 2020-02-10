import React from 'react'

export default class SupervisorTableRow extends React.Component{
    constructor(props){
        super(props)
    }

   
    render(){
        return(
            <div>
                    <tr><td  className='col-md-2' style={{width:'10px'}}>{this.props.id}</td>
                        <td style={{width:'100px'}}>{this.props.lname}</td>
                        <td style={{width:'100px'}}>{this.props.fname}</td>
                        <td style={{width:'100px'}}>{this.props.oname}</td>
                        <td style={{width:'50px'}}>{this.props.phone}</td>
                        <td style={{width:'200px'}}>{this.props.email}</td>
                        <td style={{width:'100px'}}>{this.props.role}</td>
                        <td style={{width:'50px'}}>
                            <button onClick={()=>{alert(' Full details of '+this.props.fname)}}>info</button>                            
                        </td>
                    </tr>
            </div>
        )
    }
}