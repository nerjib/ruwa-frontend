import React from 'react'

export default class SupervisorTableRow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <table>
                    <tr><td style={{width:'10px', padding:'0px 5px 0px 20px'}}>{this.props.id}</td>
                        <td style={{width:'20px', padding:'0px 5px 0px 20px'}}>{this.props.lname}</td>
                        <td style={{width:'20px', padding:'0px 5px 0px 20px'}}>{this.props.fname}</td>
                        <td style={{width:'20px', padding:'0px 5px 0px 20px'}}>{this.props.oname}</td>
                        <td style={{width:'20px', padding:'0px 5px 0px 20px'}}>{this.props.phone}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.email}</td>
                        <td style={{width:'20px', padding:'0px 5px 0px 20px'}}>{this.props.role}</td>
                        <td>
                            <button onClick={()=>{alert(this.props.name)}}>info</button>                            
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}