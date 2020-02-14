import React from 'react';
import axios from 'axios'
import {  Redirect } from 'react-router-dom';


export default class InsertProject extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            location:'',
            status: 'ongoing',
            supervisor:''          

        }
    }

    handleChange=(e)=>{
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit=(e)=>{
        e.preventDefault();
       const obj={
        title: this.state.title,
        location:this.state.location,
        status:this.state.status,
        local_id: this.state.supervisor,
        lga: this.state.lga,
        type:this.state.type,
        lot:this.state.lot
       }
        axios.post('http://localhost:5000/api/v1/projects',obj)
        .then((res)=>{
        this.props.history.push('/projects')

        }).catch((error)=>{
            alert(error)
        })
        this.setState({
            title: '',
            location: '',
            status: '',
            supervisor: '',
            lga:'',
            type:'',
            lot:'',
           })
    }

    render(){
        return(
            <div style={{}}>

              <form>
                <br/>
                  <div className='row'>            
          <div class='col-md-2'>      <label className='text-left text-primary'>      Project Title   </label> </div>  

            <div className='col-md-2'>
                <select className='form-control' id='title' name='title' onChange={this.handleChange}>
                <option >...select</option>
                <option value='Sanitation'>Sanitation</option>
                    <option value='Force Lift'>Force Lift Borehole</option>
                    <option value ='Community Borehole'>Community Borehole</option>
                    <option value ='Motorized Solar Borehole'>Motorized Solar Borehole</option>

                    </select> 
                  </div>
                  </div>
                  <br/>
                  <div className='row'>            
          <div class='col-md-2'>      <label className='text-left text-primary'>     LOT   </label> </div>  

            <div className='col-md-5'> 
                <input className='form-control' name='lot' value={this.state.lot}
                        onChange={this.handleChange} required/>
                  </div>
                  </div>
                  <br/>
                  <div className='row'>
            
            <div class='col-md-2'>      <label className='text-left text-primary'>      Project Supervisor ID    </label> </div>  
  
              <div className='col-md-5'> 
             
                    <input className='form-control' name='supervisor' value={this.state.supervisor}
                        onChange={this.handleChange} required/>
                         </div>
                  </div>
                  <br/><div className='row'>            
          <div class='col-md-2'>      <label className='text-left text-primary'>      LGA   </label> </div>  

            <div className='col-md-2'>
                <select className='form-control' id='lga' name='lga' onChange={this.handleChange}>
                <option >...select</option>
                <option value='Birnin Gwari'> Birnin Gwari</option>
                    <option value='Chikun'>Chikun</option>
                    <option value ='Giwa'>Giwa</option>
                    <option value ='Igabi'>Igabi</option>
                    <option value='Ikara'> Ikara</option>
                    <option value ='Jaba'>Jaba</option>
                    <option value ='Jemaa'>Jema'a</option>
                    <option value='Kachia'>Kachia</option>
                    <option value ='Kaduna North'>Kaduna North</option>
                    <option value ='Kaduna South'>Kaduna South</option>
                    <option value='Kagarko'> Kagarko</option>
                    <option value ='kajuru'>Kajuru</option>
                    <option value ='Kaura'>Kaura</option>
                    <option value='Kauru'>Kauru</option>
                    <option value ='Kubau'>Kubau</option>
                    <option value ='Kudan'>Kudan</option>
                    <option value='Lere'>Lere</option>
                    <option value ='Makarfi'>Makarfi</option>
                    <option value ='Sabon Gari'>Sabon Gari</option>
                    <option value='Sanga'>Sanga</option>
                    <option value ='Soba'>Soba</option>
                    <option value ='Zangon Kataf'>Zangon Kataf</option>
                    <option value='Zaria'> Zaria</option>
                
                    </select> 
                  </div>
                  </div>                <br/>
         <div className='col-md-8'> 
                 <button className='btn btn-default btn-info' onClick={this.onSubmit}>Add Project</button> 
         </div>
                </form> 

                </div>
            
        )
    }
} 