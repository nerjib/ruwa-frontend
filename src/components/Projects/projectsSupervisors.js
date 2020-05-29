import React from 'react';
import axios from 'axios';
import ProjectSupaRow from './projectSupaRow'


export default class ProjectsSupervisors extends React.Component{
constructor(props){
    super(props)
    this.state={
        projects:'',
        projectsfocus:'Sanitations'
    }
}



componentDidMount=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
    .then(res =>{
        this.setState({
            projects: res.data,
            projectsfocus:'Sanitation'
        
        })
    })
    .catch(function(error){
         console.log(error)
    })
}

getLocalsup=(id)=>{

    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+id)
    .then(res =>{
     //   alert(res.data[0].first_name)
     
       return  res.data[0].first_name
    })
    .catch(function(error){
         console.log(error)
    })

}

handleChange=(e)=>{
    const { value, name } = e.target;
    this.setState({
        [name]: value
    });
 
}
    render(){
        let row=[]
        Object.keys(this.state.projects).map((e,i)=>{
            if(this.state.projects[e].title==this.state.title){
        row.push(<ProjectSupaRow key={i} sn={i} title={this.state.projects[e].title} lot={this.state.projects[e].lot} lga={this.state.projects[e].lga} 
            sid={this.state.projects[e].state_id}
            lid={this.state.projects[e].local_id}/>)
            }
    })
        return (
            <div>
                  <select className='form-control' id='title' name='title' onChange={this.handleChange}>
                <option >...select</option>
                <option value='Sanitation'>Sanitation</option>
                    <option value='Force Lift'>Force Lift Borehole</option>
                    <option value ='Community Borehole'>Community Borehole</option>
                    <option value ='Motorized Solar Borehole'>Motorized Solar Borehole</option>

                    </select> 
                    {this.state.title}
                <table className='table'>
                <thead>
                    <tr>
                        <th>sn</th>
                        <th>title</th>
                        <th>Lga</th>
                        <th>lot</th>
                        <th> State supervisor</th>
                        <th> local supervisor</th>
                    </tr>
                </thead>
              
                {row}
                </table>
            </div>
        )
    }
}