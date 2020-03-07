import React from 'react';
import axios from 'axios';
import  MyPie  from './pie';
import { withRouter } from 'react-router-dom';
import now from 'performance-now';
import ProPie from './proPie'
import Barcharts from './barcharts'

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
            allReport:'',
            sanitations:'',
            communitypump:'',
            solarpump:'',
            forcelift:'',
            SanitationsOnlyReports:'',
            SolarOnlyReports:'',
            CommunityOnlyReports:'',
            ForceliftOnlyReports:'',
            today:0,
            todaySolar:0,
            todayCommunity:0,
            todayForcelift:0,
            todaySanitation:0,
            month:0,
            monthSolar: 0,
            monthCommunity: 0,
            monthForcelift: 0,
            monthSanitation: 0,
            week: '((new Date()).toISOString()).getWeek()',
            weekSolar: 0,
            weekCommunity: 0,
            weekForcelift: 0,
            weekSanitation: 0
            
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

    axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/ongoing')
        .then(res =>{
            this.setState({ongoingProjects: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics')
        .then(res =>{
            this.setState({totalProjects: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

   
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/abandoned')
        .then(res =>{
            this.setState({abandonedProjects: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/completed')
        .then(res =>{
            this.setState({completedProjects: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports')
        .then(res =>{
            this.setState({allReport: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/forcelift')
        .then(res =>{
            this.setState({forcelift: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/communitypump')
        .then(res =>{
            this.setState({communitypump: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/solarpump')
        .then(res =>{
            this.setState({solarpump: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/sanitations')
        .then(res =>{
            this.setState({sanitations: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/sanitations')
        .then(res =>{
            this.setState({SanitationsOnlyReports: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/forcelift')
        .then(res =>{
            this.setState({ForceliftOnlyReports: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/communityboreholes')
        .then(res =>{
            this.setState({CommunityOnlyReports: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/solarborehole')
        .then(res =>{
            this.setState({SolarOnlyReports: res.data[0].count})
        })
        .catch(error=>{
             console.log(error)
        })

        //montly report
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/all')
        .then(res =>{
            let mon=0; 
            let tod=0;
            let wk= 0;
           
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    mon ++;
                }
            })

            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    tod ++;
                }
            })
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getWeek() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    wk ++;
                }
            })

            this.setState({
               month:  mon,
                today:tod,
                week: new Date().getWeek()
            })
        })
        .catch(error=>{
             console.log(error)
        })
        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/sanitation')
        .then(res =>{
            let monSan=0; 
            let todSan=0
           
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    monSan ++;
                }
            })
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    todSan ++;
                }
            })

            this.setState({
               monthSanitation:  monSan,
               todaySanitation: todSan
               
            })
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/force')
        .then(res =>{
            let monForce=0;
            let todForce=0;
           
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    monForce ++;
                }
            })

            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    todForce ++;
                }
            })

            this.setState({
               monthForcelift:  monForce,
               todayForcelift: todForce
            })
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/community')
        .then(res =>{
            let monCom=0;
            let todCom=0
           
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    monCom ++;
                }
            })
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    todCom ++;
                }
            })

            this.setState({
               monthCommunity:  monCom,
               todayCommunity:todCom
            })
        })
        .catch(error=>{
             console.log(error)
        })

        axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/solar')
        .then(res =>{
            let monSolar=0;
            let todSolar=0;
           
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    monSolar ++;
                }
            })
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    todSolar ++;
                }
            })

            this.setState({
               monthSolar:  monSolar,
               todaySolar:todSolar,
            })
        })
        .catch(error=>{
             console.log(error)
        })
    }

    componentDidMount(){

  this.inInterval= setInterval( ()=>this.tick(),5000);
  this.inInterval2= setInterval( ()=>this.tick2(), 1000);
        this.inInterval3 = setInterval( ()=>this.onLoad(), 60000)
        this.onLoad()

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
        <hr/>
          <div className='row'>
            <div className='col-md-6'>
                <span className='col-md-3 text-left' >Total Projects:</span><span >{this.state.totalProjects}</span>
            </div>
            <div className='col-md-3'>
                <span className='col-md-3 text-left' >Completed Projects:</span><span >{this.state.completedProjects}</span>
            </div>
          </div>
         <br/>
          <div className='row'>
            <div className='col-md-6'>
                <span className='col-md-3 text-left' >Ongoing Projects:</span><span >{this.state.ongoingProjects}</span>
            </div>
            <div className='col-md-3'>
                <span className='col-md-3 text-left' >Abandoned Projects:</span><span >{this.state.abandonedProjects}</span>
            </div>
          </div>
          <br/>
          <hr/>
          <div className='row'>
            <div className='col-md-6'>
                Overall Projects
                <div id="piechart" ></div>
                <MyPie forcelift={this.state.forcelift} communitypump={this.state.communitypump} 
                    solarpump={this.state.solarpump} sanitations={this.state.sanitations}/>    
            </div>
            <div className='col-md-6'>
                Status of Projects
                <div id="piechart"></div>
                <ProPie ongoing={this.state.ongoingProjects} abandoned={this.state.abandonedProjects} completed={this.state.completedProjects}/>    
            </div>            
            </div>
            <hr/>

            <div>
                <Barcharts ongoing={this.state.ongoingProjects} allreports={this.state.allReport}/>
            </div>

            <div><h3 className='text-primary'>Reports Received</h3></div>
            <div className='row'>
                <div className='col-md-2'><h5>Sanitation:<h5 className='text-danger'>{this.state.SanitationsOnlyReports}</h5></h5></div>
                <div className='col-md-2'><h5>Hand Boreholes:<h5 className='text-danger'>{this.state.ForceliftOnlyReports}</h5></h5></div>
                <div className='col-md-3'><h5>Motorized Pump Boreholes:<h5 className='text-danger'>{this.state.SolarOnlyReports}</h5></h5></div>
                <div className='col-md-3'><h5>Community Boreholes:<h5 className='text-danger'>{this.state.CommunityOnlyReports}</h5></h5></div>
                <div className='col-md-2'><h5>Total:</h5><h5 className='text-danger'>{this.state.allReport}</h5></div>


            </div>

            <div className='row'>
      {/*}          <div className='col-md-3'>
                    
                    <span><h5>Total no Reports Received</h5></span>
                
                <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                </div>

        
                </div>
                */
                }
                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received this month{this.state.month}</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >{this.state.monthSanitation}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.monthForcelift}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.monthCommunity}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.monthSolar}</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >{this.state.monthSanitation+this.state.monthForcelift+this.state.monthCommunity+this.state.monthSolar}</h5></div>              

                </div>

                </div>
                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received this week</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >xx</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >{this.state.week}</h5></div>              

                </div>
                </div>

                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received Today</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Sanitation:</h6><h6 className='text-right col-md-3' >{this.state.todaySanitation}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.todayForcelift}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.todayCommunity}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.todaySolar}</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >{this.state.todayCommunity+this.state.todayForcelift+this.state.todaySanitation+this.state.todaySolar}</h5></div>              

                </div>
                </div>


            </div>
         

        </div>

        )
    }
}

export default withRouter(Analytics);