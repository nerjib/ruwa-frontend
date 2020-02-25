import React from 'react'

export default class SupervisorTableRow extends React.Component{
    constructor(props){
        super(props)
    }

   
    render(){
        return(
            
                    <tr>
                        <td>{this.props.sn}</td>
                        <td >{this.props.id}</td>
                        <td>{this.props.lname}</td>
                        <td >{this.props.fname}</td>
                        <td >{this.props.oname}</td>
                        <td >{this.props.phone}</td>
                        <td >{this.props.email}</td>
                        <td >{this.props.lga}</td>
                        <td >
                            <button onClick={()=>{alert(' Full details of '+this.props.fname)}}>info</button>                            
                        </td>
                    </tr>
            
        )
    }
}