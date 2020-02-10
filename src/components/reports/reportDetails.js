import React from 'react';
import axios from 'axios';


export default class ReportDetails extends React.Component {
constructor(props){
    super(props)
    this.state={
        project_id: '',
        local_id: '',
        reportdate: '',
        onsite: '',
        compliance: '',
        photourl1: '',
        photourl2: '',
        photourl3: '',
        remark: '',
        date: '',
        ptitle:'',
        plocation:'',
        plga:'',
        pgps:'',
        fname:'',
        lname:''
    }
}


    componentDidMount(){
        const { params } = this.props.match;

        axios.get('http://localhost:5000/api/v1/localreports/'+params.id)
            .then(res=>{
              this.setState({
                project_id: res.data[0].project_id,
                local_id: res.data[0].local_id,
                reportdate: res.data[0].reportdate,
                onsite:res.data[0].onsite,
                compliance:res.data[0].compliance,
                photourl1:res.data[0].photourl1,
                photourl2:res.data[0].photourl2,
                photourl3:res.data[0].photourl3,
                remark:res.data[0].remark,
                date:res.data[0].date,
    
              })
              
              axios.get('http://localhost:5000/api/v1/projects/'+this.state.project_id)
              .then(res=>{
                this.setState({
                  ptitle:res.data[0].title,
                  plocation: res.data[0].location,
                  plga: res.data[0].lga,
                  pgps: res.data[0].gps
                })
            })  

            axios.get('http://localhost:5000/api/v1/users/'+this.state.local_id)
              .then(res=>{
                this.setState({
                  fname:res.data[0].first_name,
                  lname: res.data[0].last_name,
                  
                })
            })  
  

            })
        }
            
    render(){
        const { params } = this.props.match;

        return(
                        <h6>
            <div className='fluid-container'>

                                <hr className='col-md-11'/>
                <div className='row'>
                    <div className='col-md-7'>Report No: {params.id}</div>
                    <h6 class='col-md-3 '><span className='text-primary'>Date:</span><span>{' '+this.state.reportdate}</span>  </h6>                
                </div>  
                <hr/>

                <div className='row'>
                    <h6 class='col-md-4'><span className='text-primary text-left'>Project id:</span><span >{' '+ this.state.project_id}</span></h6>
                    <h6 class='col-md-4 '><span className='text-primary text-left'>Title:</span><span>{' ' +this.state.ptitle}</span></h6>
                    <h6 class='col-md-4'><span text-primary>supervisor Id:</span><span className='text-danger'>{' '+this.state.local_id}</span>{' '+this.state.fname+' '+this.state.lname}</h6>
                    

                </div>
                <hr/>

                <div className='row'>
                <h6 class='col-md-4'><span className=' text-primary text-left'>Location:</span><span >{' '+ this.state.plocation}</span></h6>
                <h6 class='col-md-4 '><span className='text-primary text-left'>LGA:</span><span >{' '+ this.state.plga}</span></h6>
                <h6 class='col-md-4 '><span className='text-primary text-left'>GPS:</span><span >{' '+ this.state.pgps}</span></h6>
                </div>
                <hr/>
                <div className='row'>
                <span className='col-md-6'> Was the supervisor present on site when you visit?</span><span>{this.state.onsite}</span>
                </div>
                <hr/>
                <div className='row'>
                <span className='col-md-6'> Is the contractor complying wuth the contract agreement?</span><span>{this.state.compliance}</span>
                </div>
                <hr/>

                <div className='row'>
               <span className='col-md-3 text-primary '><h6> Remark:</h6></span>
               <span className='text-left'>{this.state.remark}</span>

               </div>
                
                <hr/>
                <div className='row'>
               <span className='col-md-3  text-primary'><h6> Submited on:</h6></span>
               <span className='text-left'>{this.state.date}</span>

               </div>


            <div className='responsive-image'>
                <img src='' alt='project img-1'/>
            
            </div>
            <div className='responsive-image'>
                <img src='' alt='project img-2'/>
            
            </div>
            <div className='responsive-image'>
                <img src='' alt='project img-3'/>
            
            </div>

            </div>
            </h6>
            
        )
    }
}