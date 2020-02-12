import React from 'react';
import axios from 'axios';

export default class UpdateProject extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            state_id: '',
        local_id: "1",
        location: "",
        lga: "",
        status: "",
        started: '',
        finish: '',
        wardheadphone: null,
        gps: "",
        contractor_id: ""
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
            local_id:res.data[0].local_id,
            status:res.data[0].status,
            state_id: res.data[0].state_id,
            lga:res.data[0].lga,
            wardheadphone:res.data[0].wardheadphone,
            gps: res.data[0].gps,
            contractor_id:res.data[0].contractor_id,
            started:res.data[0].started,
            finish:res.data[0].finish

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
              title: this.state.title,
            location:this.state.location,
            local_id: this.state.local_id,
            status:  this.state.status,
            state_id:  this.state.state_id,
            lga: this.state.lga,
            wardheadphone: this.state.wardheadphone,
            gps: this.state.gps,
            contractor_id:this.state.contractor_id,
            started:this.state.started,
            finish:this.state.finish
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
                <br/>
                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> Project Title </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='title' value={this.state.title}
                        onChange={this.handleChange} required/>
                  </div>
                  </div>
                  <br/>
                  <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>      Project Location    </label> </div>  
  
              <div className='col-md-5'> 
             
                    <input className='form-control'  name='location' value={this.state.location}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>

                  <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>      Project LGA    </label> </div>  
  
              <div className='col-md-5'> 
             
             <input className='form-control' name='lga' value={this.state.lga}
                        onChange={this.handleChange} required/>
                </div>
                  </div>
                  <br/>

                  <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>   Local   Project Supervisor ID    </label> </div>  
  
              <div className='col-md-5'> 
             
                    <input className='form-control' name='local_id' value={this.state.local_id}
                        onChange={this.handleChange} />
                         </div>
                  </div>
                  <br/>

                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> State Project Supervisor Id </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='state_id' value={this.state.state_id}
                        onChange={this.handleChange}/>
                  </div>
                  </div>
                  <br/>

                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> Contractor ID </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='contractor_id' value={this.state.contractor_id}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>

                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> Ward Head Phone. No </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='wardheadphone' value={this.state.wardheadphone}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>

                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> GPS Coordinate </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='gps' value={this.state.gps}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>

                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> Project Starting Date </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='started' value={this.state.started}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>

                  <div className='row'>            
          <div class='col-md-2'> <label className='text-left text-primary'> Project Completion Date </label> </div>  
            <div className='col-md-5'> 
                <input className='form-control' name='finish' value={this.state.finish}
                        onChange={this.handleChange} />
                  </div>
                  </div>
                  <br/>
<div className='row'>
    <div className='col-md-3 text-primary'>Status</div>
                  <div class="col-md-3">
        <label><input type="radio" value='completed' onChange={this.handleChange} name="status"/> Completed </label>
      </div>
      <div class="col-md-3">
        <label><input type="radio"  value='ongoing' onChange={this.handleChange} name="status"/> Ongoing </label>
      </div>

      </div>
                  <br/>





         <div className='col-md-8'> 
                 <button className='btn btn-default btn-info' onClick={this.onUpdate}>Update</button> 
         </div>

                </form> 
            </div>
        )
    }
}