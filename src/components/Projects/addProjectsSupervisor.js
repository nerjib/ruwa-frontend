import React from 'react';
import axios from 'axios'


export default class AddProjectsSupervisor extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
}

handleChange=(e)=>{
    const { value, name } = e.target;
    this.setState({
        [name]: value
    });
    if (name=='userid'){
        this.checkSupervisor(value)
    }
}

checkSupervisor(id){
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+id)
    .then(req=>{
        if(req.data[0])(
        this.setState({
            supervisorName: req.data[0].first_name +" "+ req.data[0].last_name
        })
        )
        else{
            this.setState({
                supervisorName: 'Not found' 
            })
        }
    })
}



render(){
    return (
        <div>
            <br/><br/>
            <div className='row col-md-9'>
                <div className='col-md-2'/>
<div className='col-md-3'>
    <input name='userid' onChange={this.handleChange} placeholder='User Id'/>
  <div>  {this.state.supervisorName}</div>
</div>
            
            <div>
            <select className='form-control' id='title' name='title' onChange={this.handleChange}>
                <option >...select</option>
                <option value='Sanitation'>Sanitation</option>
                    <option value='Force Lift'>Force Lift Borehole</option>
                    <option value ='Community Borehole'>Community Borehole</option>
                    <option value ='Motorized Solar Borehole'>Motorized Solar Borehole</option>

                    </select> 
            </div>
            <div>
            <select className='form-control' id='role' name='role' onChange={this.handleChange}>
                <option >...select</option>
                <option value='state_id'>State Supervisor</option>
                    <option value='local_id'>Local Supervisor</option>
                   

                    </select> 
            </div>
            <div>
                <input placeholder='LOT' name='lot'/>
            </div>

            </div>
        </div>
    )
}

}