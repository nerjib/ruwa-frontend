import React from 'react';
import axios from 'axios';
import  MyPie  from './pie';
import { withRouter } from 'react-router-dom';
import now from 'performance-now';
import ProPie from './proPie'
import Barcharts from './barcharts'
import DailyMap from '../map/dailymap'

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
            week: '',
            weekSolar: 0,
            weekCommunity: 0,
            weekForcelift: 0,
            weekSanitation: 0,
            pidd: [],
            marker:{},
            piddd:[],
            allprojects:'',
            phase:6,
            phaseSan:'',
            phaseSolar:'',
            phasefl:'',
            phasecbh:'',
            phaseAbandoned:'',
            phaseComlpete: '',
            phaseOngoing: '',            
           phaseSolarReports:'',
           phaseSanReports: '',
           phaseflReports: '',
           phasecbhReports: '',
           phaseSolarWkReports:'',
           phaseSanWkReports:'',
           phaseflWkReports:'',
           phasecbhWkReports: '',
            dailysan:0,
            dailySol:0,
            dailyfl:0,
            dailycbh:0,
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

    axios.get('https://ruwassa.herokuapp.com/api/v1/projects')
    .then(res =>{

         this.setState({allprojects: res.data})

         let san=0
         let solar=0
         let fl = 0;
         let cbh = 0
         let completed = 0;
         let ongoing = 0;
         let abandoned = 0;
        Object.keys(res.data).map((e,i)=>{
            if(res.data[e].title=='Sanitation' & res.data[e].phase==this.state.phase ){
                san = san + 1
            }else if(res.data[e].title=='Motorized Solar Borehole' & res.data[e].phase==this.state.phase){
                solar ++
            }
            else if(res.data[e].title=='Force Lift' & res.data[e].phase==this.state.phase){
                fl ++
            }else if(res.data[e].title=='Community Borehole' & res.data[e].phase==this.state.phase){
                cbh ++
            }

            if( res.data[e].status=='completed' & res.data[e].phase==this.state.phase){
                completed ++
            }else if( res.data[e].status=='ongoing' & res.data[e].phase==this.state.phase){
                ongoing ++
            } else if( res.data[e].status=='abandoned' & res.data[e].phase==this.state.phase){
                abandoned ++
            }
      
        })
        this.setState({
            phaseSolar:solar,
            phaseSan:san,
            phasefl:fl,
            phasecbh: cbh,
            phaseComlpete:completed,
            phaseAbandoned:abandoned,
            phaseOngoing:ongoing
    })
    })
    .catch(error=>{
         console.log(error)
    })

    axios.get('https://ruwassa.herokuapp.com/api/v1/reports//completereports/all')
    .then(res =>{        
        this.setState({dailyReportsData: res.data})
      
        let san=0
        let solar=0
        let fl = 0;
        let cbh = 0
        let dailysan = 0;
        let dailySol = 0;
        let dailyfl = 0;
        let dailycbh =0
       Object.keys(res.data).map((e,i)=>{
           if(res.data[e].title=='Sanitation' & res.data[e].phase==this.state.phase ){
               san = san + 1
               if(new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                 dailysan++  
               }
           }else if(res.data[e].title=='Motorized Solar Borehole' & res.data[e].phase==this.state.phase){
               solar ++
               if(new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                dailySol++  
              }
           }
           else if(res.data[e].title=='Force Lift' & res.data[e].phase==this.state.phase){
               fl ++
               if(new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                dailyfl++  
              }
           }else if(res.data[e].title=='Community Borehole' & res.data[e].phase==this.state.phase){
               cbh ++
               if(new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                dailycbh++  
              }
           }

             
       })
       this.setState({
           phaseSolarReports:solar,
           phaseSanReports:san,
           phaseflReports:fl,
           phasecbhReports: cbh,
           dailySol,
           dailycbh,
           dailyfl,
           dailysan
   })

    }).catch(error=>{
        console.log(error)
   })
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports//weekly/completereports/all')
    .then(res =>{


        this.setState({weeklyReportsData: res.data})
      
        let san=0
        let solar=0
        let fl = 0;
        let cbh = 0
        let completed = 0;
        let ongoing = 0;
        let abandoned = 0;

        Object.keys(res.data).map((e,i)=>{
            if(res.data[e].title=='Sanitation' & res.data[e].phase==this.state.phase ){
                san = san + 1
            }else if(res.data[e].title=='Motorized Solar Borehole' & res.data[e].phase==this.state.phase){
                solar ++
            }
            else if(res.data[e].title=='Force Lift' & res.data[e].phase==this.state.phase){
                fl ++
            }else if(res.data[e].title=='Community Borehole' & res.data[e].phase==this.state.phase){
                cbh ++
            }
 
              
        })
        this.setState({
            phaseSolarWkReports:solar,
            phaseSanWkReports:san,
            phaseflWkReports:fl,
            phasecbhWkReports: cbh
    })
 
    })
    .catch(error=>{
         console.log(error)
    })
{/*}
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
    */}
        //montly report
      /*  axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/all')
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
                 this.state.pidd.push(res.data[e].pid)
                 
                 //alert(res.data[e].pid)
                /* axios.get('https://ruwassa.herokuapp.com/api/v1/projects/details/'+res.data[e].pid)
                 .then(res3=>{
                     let data={
                        name : res3.data[0].title,
                        lat: 10.15368509, 
                        lng: 7.147864129
                     }
                 //    alert(res3.data[0].title)
                  this.state.piddd.push(data)


                     this.setState({
                         marker: {...this.state.marker, ...data},
                     })
                 })
                 */
            /*    }
            })
            Object.keys(res.data).map(e=>{
                if (new Date(res.data[e].date).getDate()== new Date().getWeek() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
                    wk ++;
                }
            })

            this.setState({
               month:  mon,
                today:tod,
                week: new Date().getWeek(),
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
    */
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

   
goToPhase6=()=>{
    this.setState({
        phase:6
    })
    this.onLoad()
}
goToPhase7=()=>{
    this.setState({
        phase:7
    })
    this.onLoad()
}
    render(){
        let phase6=0
        let phase7=0
        let san = 0;
        let fl =0;
        let cb = 0;
        let solar = 0
        {/*
         <option value='Force Lift'>Force Lift Borehole</option>
                    <option value ='Community Borehole'>Community Borehole</option>
                    <option value ='Motorized Solar Borehole'>Motorized Solar Borehole</option>
        */}

        Object.keys(this.state.allprojects).map((e,i)=>{
            if(this.state.phase==6){
                if(this.state.allprojects[e].phase=='6'){
                    phase6 ++

                         }
            }else if( this.state.phase==7){
                if(this.state.allprojects[e].phase==7){
                    phase7 ++

            }
        }
        })
  
        return(

      
      <div  className="fluid-container">
          <br/>
          <div className='row'>
          <button onClick={this.goToPhase6} className='btn  '><h5 className='text-center text-primary'>Phase 6C</h5></button>
        <button onClick={this.goToPhase7} className='btn btn-defult '><h5 className='text-center text-primary'>Phase 7</h5></button>
        </div>
        <hr/>
          <div className='row'>
            <div className='col-md-6'>
                <span className='col-md-3 text-left' >Total Projects:</span><span >{this.state.phaseAbandoned+this.state.phaseOngoing+this.state.phaseComlpete}</span>
            </div>
            <div className='col-md-3'>
                <span className='col-md-3 text-left' >Completed Projects:</span><span >{this.state.phaseComlpete}</span>
            </div>
          </div>
         <br/>
          <div className='row'>
            <div className='col-md-6'>
                <span className='col-md-3 text-left' >Ongoing Projects:</span><span >{this.state.phaseOngoing}</span>
            </div>
            <div className='col-md-3'>
                <span className='col-md-3 text-left' >Abandoned Projects:</span><span >{this.state.phaseAbandoned}</span>
            </div>
          </div>
          <br/>
          <hr/>
          <div className='row'>
            <div className='col-md-6'>
                Overall Projects
                <div id="piechart" ></div>
                <MyPie forcelift={this.state.phasefl} communitypump={this.state.phasecbh} 
                    solarpump={this.state.phaseSolar} sanitations={this.state.phaseSan}/>    
            </div>
            <div className='col-md-6'>
                Status of Projects {phase6 +' '+phase7}<br/>
               {this.state.phaseComlpete+ ' '+this.state.phaseOngoing+' '+this.state.phaseAbandoned}
                <div id="piechart"></div>
                <ProPie ongoing={this.state.phaseOngoing} abandoned={this.state.phaseAbandoned} completed={this.state.phaseComlpete}/>    
            </div>            
            </div>
            <hr/>

                { this.state.phaseSolarWkReports+' '+this.state.phaseSanWkReports+' '+this.state.phaseflWkReports+' '+this.state.phasecbhWkReports}
           <br/>
           {this.state.dailySol+' '+this.state.dailycbh+' '+this.state.dailyfl+' '+this.state.dailysan}
                <div>
                <Barcharts weeklyreports={this.state.phaseflWkReports+this.state.phasecbhWkReports+this.state.phaseSolarWkReports+this.state.phaseSanWkReports} dailyreports={this.state.phaseflReports+this.state.phasecbhReports+this.state.phaseSolarReports+this.state.phaseSanReports}/>
            </div>

            <div><h3 className='text-primary'>Reports Received</h3></div>
            <div className='row'>
                <div className='col-md-2'><h5>VIP:<h5 className='text-danger'>{this.state.SanitationsOnlyReports}</h5></h5></div>
                <div className='col-md-2'><h5>Force Lift:<h5 className='text-danger'>{this.state.ForceliftOnlyReports}</h5></h5></div>
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
                    <span><h5 className='text-info'>Weekly Reports Received</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >VIP:</h6><h6 className='text-right col-md-3' >{this.state.phaseSanWkReports}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' > Force Lift:</h6><h6 className='text-right col-md-3' >{this.state.phaseflWkReports}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.phasecbhWkReports}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.phaseSolarWkReports}</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >{this.state.phaseSolarWkReports+this.state.phasecbhWkReports+ this.state.phaseflWkReports+this.state.phaseSanWkReports}</h5></div>              

                </div>

                </div>
                <div className='col-md-4'>
                    <span><h5 className='text-info'> Daily Reports Received </h5></span>
                    <div className='col-md-12'>
            <div className='row col-md-12'><h6 className='row col-md-10 text-left' >VIP:</h6><h6 className='text-right col-md-3' >{this.state.phaseSanReports}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift:</h6><h6 className='text-right col-md-3' >{this.state.phaseflReports}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.phasecbhReports}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.phaseSolarReports}</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >{this.state.phaseSolarReports+this.state.phasecbhReports+ this.state.phaseflReports+this.state.phaseSanReports}</h5></div>              

                </div>
                </div>

                <div className='col-md-4'>
                    <span><h5 className='text-info'>Reports Received Today</h5></span>
                    <div className='col-md-12'>
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >VIP:</h6><h6 className='text-right col-md-3' >{this.state.dailysan}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Force Lift:</h6><h6 className='text-right col-md-3' >{this.state.dailyfl}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Community Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.dailycbh}</h6></div>              
                    <div className='row col-md-12'><h6 className='row col-md-10 text-left' >Motorized Solar Boreholes:</h6><h6 className='text-right col-md-3' >{this.state.dailySol}</h6></div>              
                    <div className='row col-md-12'><h5 className='row col-md-10 text-left' >Total:</h5><h5 className='text-right col-md-3' >{this.state.dailysan+this.state.dailyfl+this.state.dailycbh+this.state.dailySol}</h5></div>              

                </div>
                </div>


            </div>

         
         

        </div>

        )
    }
}

export default withRouter(Analytics);