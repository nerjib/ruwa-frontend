import React from 'react';
import axios from 'axios';
import  MyPie  from './pie';
import { withRouter } from 'react-router-dom';
import now from 'performance-now';
import ProPie from './proPie'
import Barcharts from './barcharts'
import DailyMap from '../map/dailymap'
import CompletePie from './coompletedProPie'
import  Loader from 'react-loader-spinner'


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
            phase:7,
            phaseSan:0,
            phaseSolar:0,
            phasefl:0,
            phasecbh:0,
            phaseAbandoned:0,
            phaseComlpete: 0,
            phaseOngoing: 0,            
           phaseSolarReports:0,
           phaseSanReports: 0,
           phaseflReports: 0,
           phasecbhReports: 0,
           phaseSolarWkReports:0,
           phaseSanWkReports:0,
           phaseflWkReports:0,
           phasecbhWkReports: 0,
            dailysan:0,
            dailySol:0,
            dailyfl:0,
            dailycbh:0,
            phaseComCbh: 0,
            phaseComSan: 0,
            phaseComFl: 0,
            phaseComSolar: 0,
            status: false
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
this.setState({
    status: true
})
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
         let comSan=0;
         let comCbh=0;
         let comSolar=0;
         let comFl=0;
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
                                if(res.data[e].title=='Sanitation'){
                                    comSan ++
                                }else  if(res.data[e].title=='Force Lift'){
                                    comFl ++
                                }else  if(res.data[e].title=='Motorized Solar Borehole'){
                                    comSolar ++
                                }else  if(res.data[e].title=='Community Borehole'){
                                    comCbh ++
                                }
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
            phaseOngoing:ongoing,
            phaseComCbh: comCbh,
            phaseComSan:comSan,
            phaseComFl: comFl,
            phaseComSolar: comSolar
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
            phasecbhWkReports: cbh,
            status: false
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

   
goToPhase6=()=>{
    this.setState({
        phase:6
    })
    this.onLoad()
}
goToPhase6d=()=>{
    this.setState({
        phase:'6d'
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
//        let san = 0;
  //      let fl =0;
        let cb = 0;
    //    let solar = 0
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
  //
/*
  let san=0
  let solar=0
  let fl = 0;
  let cbh = 0
  let completed = 0;
  let ongoing = 0;
  let abandoned = 0;
 Object.keys(this.state.allprojects).map((e,i)=>{
    if(this.state.allprojects[e].title=='Sanitation' & this.state.allprojects[e].phase==this.state.phase ){
        san = san + 1
    }else if(this.state.allprojects[e].title=='Motorized Solar Borehole' & this.state.allprojects[e].phase==this.state.phase){
        solar ++
    }
    else if(this.state.allprojects[e].title=='Force Lift' & this.state.allprojects[e].phase==this.state.phase){
        fl ++
    }else if(this.state.allprojects[e].title=='Community Borehole' & this.state.allprojects[e].phase==this.state.phase){
        cbh ++
    }

    if( this.state.allprojects[e].status=='completed' & this.state.allprojects[e].phase==this.state.phase){
        completed ++
    }else if( this.state.allprojects[e].status=='ongoing' & this.state.allprojects[e].phase==this.state.phase){
        ongoing ++
    } else if( this.state.allprojects[e].status=='abandoned' & this.state.allprojects[e].phase==this.state.phase){
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
*/  
return(

      
      <div  className="fluid-container">
          <br/>
          <div className='row'>
          <button onClick={this.goToPhase6} className='btn  '><h5 className='text-center text-primary'>Phase 6C</h5></button>
          <button onClick={this.goToPhase6d} className='btn btn-defult '><h5 className='text-center text-primary'>Phase 6D</h5></button>
        <button onClick={this.goToPhase7} className='btn btn-defult '><h5 className='text-center text-primary'>Phase 7</h5></button>
<div><h1>Phase {this.state.phase}</h1></div>

{this.state.status &&
          <Loader type="ThreeDots" color="Blue"/>     }
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
            <div style={{marginLeft:'50px', height:'300px'}} className='col-md-5 shadow p-3 mb-5 bg-white rounded' >
                Overall Projects
                <div id="piechart" ></div>
                <MyPie forcelift={this.state.phasefl} communitypump={this.state.phasecbh} 
                    solarpump={this.state.phaseSolar} sanitations={this.state.phaseSan}/>    
            </div>
            <div style={{marginRight:'50px', marginLeft:'25px',height:'300px'}} className='col-md-5 shadow p-3 mb-5 bg-white rounded'>
                Status of Projects 
                <div id="piechart"></div>
                <ProPie ongoing={this.state.phaseOngoing} abandoned={this.state.phaseAbandoned} completed={this.state.phaseComlpete}/>    
            </div>            
            </div>
            <hr/>

                
            <div style={{marginLeft:'50px', marginRight:'50px', height:'500px'}} className='col-md-10 shadow p-3 mb-5 bg-white rounded'>
            Completed Projects
            <CompletePie sanitations={this.state.phaseComSan} solarpump={this.state.phaseComSolar}
                communitypump={this.state.phaseComCbh} forcelift={this.state.phaseComFl}/>
</div>
<hr/>
<div style={{marginLeft:'50px', marginRight:'50px', height:'350px'}} className='col-md-10 shadow p-3 mb-5 bg-white rounded'>
                <Barcharts weeklyreports={this.state.phaseflWkReports+this.state.phasecbhWkReports+this.state.phaseSolarWkReports+this.state.phaseSanWkReports} dailyreports={this.state.phaseflReports+this.state.phasecbhReports+this.state.phaseSolarReports+this.state.phaseSanReports}/>
            </div>
            <div><h3 className='text-primary'>Reports Received</h3></div>
 {/*}           <div className='row'>
                <div className='col-md-2'><h5>VIP:<h5 className='text-danger'>{this.state.SanitationsOnlyReports}</h5></h5></div>
                <div className='col-md-2'><h5>Force Lift:<h5 className='text-danger'>{this.state.ForceliftOnlyReports}</h5></h5></div>
                <div className='col-md-3'><h5>Motorized Pump Boreholes:<h5 className='text-danger'>{this.state.SolarOnlyReports}</h5></h5></div>
                <div className='col-md-3'><h5>Community Boreholes:<h5 className='text-danger'>{this.state.CommunityOnlyReports}</h5></h5></div>
                <div className='col-md-2'><h5>Total:</h5><h5 className='text-danger'>{this.state.allReport}</h5></div>


            </div>
*/}
            <div className='row'>
                {/*}
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
/*}
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

*/}
            </div>
        
{this.state.status &&
          <Loader type="ThreeDots" color="Blue"/>     }
         <table className='table table-striped'>
             <thead className='thead-light'>
                 <tr>
                     <th></th><th>Weekly Reports Received</th><th>Daily Reports Received</th><th>Reports Received Today</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
            <td className='text-left'>VIP</td><td>{this.state.phaseSanWkReports}</td><td>{this.state.phaseSanReports}</td><td>{this.state.dailysan}</td>
                 </tr>
                 <tr>
            <td className='text-left'>Force Lifts</td><td>{this.state.phaseflWkReports}</td><td>{this.state.phaseflReports}</td><td>{this.state.dailyfl}</td>
                 </tr>
                 <tr>
                     <td className='text-left'>Community Handpump Borehole</td><td>{this.state.phasecbhWkReports}</td><td>{this.state.phasecbhReports}</td><td>{this.state.dailycbh}</td>
                 </tr>
                 <tr>
                     <td className='text-left'>Motorized Solar Borehole</td><td>{this.state.phaseSolarWkReports}</td><td>{this.state.phaseSolarReports}</td><td>{this.state.dailySol}</td>
                 </tr>
                 <tr>
                     <td>Total</td><td>{this.state.phaseSolarWkReports+this.state.phasecbhWkReports+ this.state.phaseflWkReports+this.state.phaseSanWkReports}</td>
                     <td>{this.state.phaseSolarReports+this.state.phasecbhReports+ this.state.phaseflReports+this.state.phaseSanReports}</td>
                     <td>{this.state.dailysan+this.state.dailyfl+this.state.dailycbh+this.state.dailySol}</td>
                 </tr>
             </tbody>
         </table>
         

        </div>

        )
    }
}

export default withRouter(Analytics);