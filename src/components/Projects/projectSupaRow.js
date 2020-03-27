import React from 'react';
import axios from 'axios';


export default class ProjectSupaRow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            localuser:''
        }
    }

componentDidMount=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+this.props.lid)
    .then(res=>{
        if(res.data[0]){
        this.setState({
            localuser: res.data[0].last_name +' '+res.data[0].first_name
        })
    }
    })

  
}
getStateUser=(id)=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+id)
    .then(res=>{
        if(res.data[0]){
        this.setState({
            stateuser: res.data[0].last_name +' '+res.data[0].first_name
        })
    }
    })
        
}

    render(){
        this.getStateUser(this.props.sid)
        return (
                <tbody>
                    <tr>
                    <td></td>
                    <td>{this.props.title}</td>
                    <td>{this.props.lga}</td>
                    <td>{this.props.lot}</td>
                    <td>{this.state.stateuser}</td>
                     <td>{this.state.localuser}</td>
                    </tr>
                </tbody>

        )
    }
}