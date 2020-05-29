import React from 'react'

export default class ContractorsTableRow extends React.Component{
    constructor(props){
        super(props)
    }

   
    render(){
        return(
            
                    <tr>
                        <td>{this.props.sn}</td>
                        <td >{this.props.id}</td>
                        <td className='text-left'>{this.props.company}</td>
                        <td className='text-left' >{this.props.address}</td>
                        <td >{this.props.phone}</td>
                        <td >{this.props.email}</td>
                       
                        <td >
                          <a href={`/#/updatecontractor/${this.props.id}`}>  <button >edit</button>        </a>                    
                        </td>
                    </tr>
            
        )
    }
}