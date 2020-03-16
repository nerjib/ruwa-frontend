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
                            <button onClick={()=>{alert(' Full details of '+this.props.company)}}>info</button>                            
                        </td>
                    </tr>
            
        )
    }
}