import React from 'react';
import axios from 'axios';

export default class UpdateProject extends React.Component{
    constructor(props){
        super(props)
        this.state={
            project:'dd',
            title:'n',
            location:'',
            supervisor:'',
            status:''
        }
    }

componentDidMount(){
    const { params } = this.props.match;

   // alert(params.id)
    axios.get('http://localhost:5000/api/v1/projects/'+params.id)
    .then(res=>{
        this.setState({
            title: res.data[0].title,
            location:res.data[0].location,
            supervisor:res.data[0].supervisor,
            status:res.data[0].status

        })
    }).then(error=>{console.log(error)})
}

handleChange=(e)=>{

    const { value, name } = e.target;
this.setState({
  //  project:'',
    [name]: value,

})
     
}
onUpdate=(e)=>{
e.preventDefault();

const obj = {
    status: 'ongoing'
}
const {params}=this.props.match;
axios.put('http://localhost:5000/api/v1/projects/'+params.id, obj)
.catch((error)=>{alert(error)});
this.props.history.push('/projects')

}
change=()=>{

}

    render() {
        return(
            <div>
                Update
                             <form>
                <label>
                    Title
                </label>  
                    <input name='title' value={this.state.title}

                        onChange={this.handleChange} required/>
                  <br/>
                    <label>
                    

                        Location
                    </label>  

                    <input name='location' value={this.state.location}
                        onChange={this.handleChange} required/>
             
               <label>
                        supervisor
                    </label>  

                    <input name='supervisor' value={this.state.supervisor}
                        onChange={this.handleChange} required/>
             
                </form> 
                <button onClick={this.onUpdate}>Update</button> 
            </div>
        )
    }
}