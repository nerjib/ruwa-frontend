import React from 'react'

export default class ProjectTableRow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                    <tr><td style={{width:'20px', padding:'0px 5px 0px 20px'}}>{this.props.title}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.location}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.status}</td>
                        <td style={{width:'200px', padding:'0px 5px 0px 10px'}}>{this.props.supervisor}</td>


                        <td>
                            <button onClick={()=>{alert(this.props.title)}}>info</button>                            
                        </td>
                    </tr>
            </div>
        )
    }
}