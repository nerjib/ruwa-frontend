import React from 'react';
import axios from 'axios';
import  MyPie  from './pie';
import { withRouter } from 'react-router-dom';
import now from 'performance-now';

class Analytics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:'',
            time2:'',
            totalProjects:'',
            ongoingProjects:'',
            abandonedProjects:'',
            completedProject:'',
            allReport:''
        }
    }


    tick(){
        this.setState({
            time: new Date().toLocaleString()
        })
    }
    tick2(){
        this.setState({
            time2: new Date().toLocaleString()
        })
    }

onLoad(){

    axios.get('http://localhost:5000/api/v1/analytics/ongoing')
        .then(res =>{
            this.setState({ongoingProjects: res.data[0].count})
        })
        .catch(error=>{
             alert(error)
        })

        axios.get('http://localhost:5000/api/v1/analytics')
        .then(res =>{
            this.setState({totalProjects: res.data[0].count})
        })
        .catch(error=>{
             alert(error)
        })

   
        axios.get('http://localhost:5000/api/v1/analytics/abandoned')
        .then(res =>{
            this.setState({abandonedProjects: res.data[0].count})
        })
        .catch(error=>{
             alert(error)
        })
        axios.get('http://localhost:5000/api/v1/analytics/completed')
        .then(res =>{
            this.setState({completedProjects: res.data[0].count})
        })
        .catch(error=>{
             alert(error)
        })

        axios.get('http://localhost:5000/api/v1/analytics/reports')
        .then(res =>{
            this.setState({allReport: res.data[0].count})
        })
        .catch(error=>{
             alert(error)
        })
}

    componentDidMount(){

  this.inInterval= setInterval( ()=>this.tick(),5000);
  this.inInterval2= setInterval( ()=>this.tick2(), 1000);
        this.inInterval3 = setInterval( ()=>this.onLoad(), 1000)

}

componentWillUnmount(){
    clearInterval(this.inInterval);
    clearInterval(this.inInterval2);
    clearInterval(this.inInterval3);
}


    render(){
     
    
        return(

      
      <div  className="fluid-container">
          <br/>
          {this.state.time2}
          <div className='row'>
            <div className='col-md-6'>
                <span className='col-md-3 text-left' >Total Projects:</span><span >{this.state.totalProjects}</span>
            </div>
            <div className='col-md-3'>
                <span className='col-md-3 text-left' >Completed Projects:</span><span >{this.state.completedProjects}</span>
            </div>
          </div>
         <br/>
          <hr/>
          <div className='row'>
            <div className='col-md-6'>
                <span className='col-md-3 text-left' >Ongoing Projects:</span><span >3</span>
            </div>
            <div className='col-md-3'>
                <span className='col-md-3 text-left' >Abandoned Projects:</span><span >3</span>
            </div>
          </div>
          <br/>
          <hr/>
            <div>
                charts to be placed here
                <div id="piechart"></div>
                <MyPie/>

                

            </div>
            <hr/>
            <div><h3 className='text-primary'>Reports Received</h3></div>
            <div className='row'>
                <div className='col-md-2'><h5>Sanitation:</h5></div>
                <div className='col-md-2'><h5>Hand Boreholes:</h5></div>
                <div className='col-md-3'><h5>Motorized Pump Boreholes:</h5></div>
                <div className='col-md-3'><h5>Community Boreholes:</h5></div>
                <div className='col-md-2'><h5>Total:</h5></div>


            </div>

            <div className='row'>
      {/*}          <div className='col-md-3'>
                    
                    <span><h5>Total no Reports Received</h5></span>
                
                <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                </div>

        
                </div>
                */
                }
                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received this month</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >41</h5></div>              

                </div>

                </div>
                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received this week</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >41</h5></div>              

                </div>
                </div>

                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received Today</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >41</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >41</h5></div>              

                </div>
                </div>


            </div>
         

        </div>

        )
    }
}

export default withRouter(Analytics);