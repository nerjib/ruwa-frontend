import React from 'react';
import axios from 'axios';
import  SupervisorsTableRow from './supervisorsTableRow'
import { Link, Route, Redirect } from 'react-router-dom';


export default class PhaseSupervisors7 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:'',
            currentPage: 1,
            supervisorsPerPage: 100,
            phase:7,
            title: 'Phase 7'
        }
    }
    load=()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/users/usersbyphase/'+this.state.phase)
        .then((res) =>{

            this.setState({supervisors: res.data})
        })
        .catch(function(error){
             console.log(error)
        })
    }
    componentDidMount(){
     this.load()
    }

    componentWillMount(){
        this.setState({
            supervisors:''
        })
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
          });
    }
    reload=()=>{this.props.reload()}
    
gettask=(e)=>{
//return 'k'
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/localsupervisors/'+e)
    .then(res=>{
    //    alert(this._isMounted)
   //     if(this._isMounted){
       return e+'done'
        this.setState({
            tasks: res.data                
        })
    //}
    }).catch(error=>{console.log(error)})
  
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/statesupervisors/'+e)
    .then(res=>{
    //    alert(this._isMounted)
   //     if(this._isMounted){
       
        this.setState({
            tasks2: res.data                
        })
    //}
    }).catch(error=>{console.log(error)})
   
}
goToPhase6=()=>{
    this.load()

    this.setState({
    //    title: 'Phase 6C',
    })
    
}

goToPhase7=()=>{
    this.setState({
      //  title: 'Phase 7'
    })
 //   this.load()
}

    render(){

        let row=[]
   Object.keys(this.state.supervisors).map((e,i)=>{
   //    if(this.state.supervisors[e].title=='Sanitation'){
       row.push(<tr>
        <td>{i+1}</td>{//<td>{this.state.supervisors[e].id}</td>
   }
        <td className='text-left'><a target='_blank' href={`/#/supervisor/${this.state.supervisors[e].id}`}>{this.state.supervisors[e].last_name+' ' +this.state.supervisors[e].first_name+' '+this.state.supervisors[e].other_name}</a></td>
        <td className='text-left'>{this.state.supervisors[e].title}</td>
        <td>{this.state.supervisors[e].actno}</td><td>{this.state.supervisors[e].bank}</td>
     {//   <td><FFF phase={this.state.phase} id={this.state.supervisors[e].id}/></td>
     }
       
    </tr>)
 //     }
        })
    
            return(
                <div>
                    <div className='row'>
                <Link to='/home'>    <button>Home</button></Link>
                <div className='col-xs-2'  ><a target='_blank' href='/#/supervisors7'><button onClick={this.goToPhase6} className='btn btn-default btn-info'>Phase 6c</button></a></div>
            <div className='col-xs-2'  ><button onClick={this.goToPhase7} className='btn btn-default btn-info'>Phase 7</button></div>
            <div>{this.state.title}</div>
                </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SN</th>
                               {//} <th>Supervisor Id</th>
    }
                                <th>Name</th>
                                <th>Facility</th>
                                <th>Account No.</th>
                                <th>Bank</th>

                            </tr>
                        </thead>
                    {row}

                    </table>
                </div>
            )
        }
    }

/*
    class FFF extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                roww:[],
                wklyre:'',
                dailyre:'',
                dailyr:'',
                weeklyr:'',
                reportscount:0,
                weeklyreportcount:0
            }
        }
        componentDidMount=()=>{
            let ro=[]


 axios.get('https://ruwassa.herokuapp.com/api/v1/users/reportssend/'+this.props.id)
        .then((res) =>{
         let dailyr=[]
            Object.keys(res.data).map(e=>{
                dailyr.push(res.data[e].pid)
            })
            this.setState({
              //  dailyre: res.data.length,
                dailyr: dailyr.length
            })
        })
        .catch(function(error){
             console.log(error)
        })
        axios.get('https://ruwassa.herokuapp.com/api/v1/users/weeklyreportssend/'+this.props.id)
        .then((res) =>{
            let weeklyr=[]
            Object.keys(res.data).map(e=>{
                weeklyr.push(
                    res.data[e].pid)
            })
            this.setState({//wklyre: res.data.length,
                weeklyr: weeklyr.length
            })
        })
        .catch(function(error){
             console.log(error)
        })



            axios.get('https://ruwassa.herokuapp.com/api/v1/projects/localsupervisors/'+this.props.id)
            .then(res=> {
           //    alert(res.data[0].pstatus)
           //     if(this._isMounted){
           
        //   ro.push(this.props.id)
        
               Object.keys(res.data).map((e,i)=>{
                   if(this.props.phase==res.data[e].phase){
                    ro.push(this.checkStatus(res.data[e].pstatus))
                   }
                })
            //}
            }).catch(error=>{console.log(error)})

            axios.get('https://ruwassa.herokuapp.com/api/v1/projects/statesupervisors/'+this.props.id)
            .then(res=> {
           //    alert(res.data[0].pstatus)
           //     if(this._isMounted){
           
         //  ro.push(this.props.id)
               Object.keys(res.data).map((e,i)=>{
                if(this.props.phase==res.data[e].phase){
                    ro.push(this.checkStatus(res.data[e].pstatus))
                    }
                })
            //}
            }).catch(error=>{console.log(error)})

          this.setState({
              roww:ro
          })
/*
          axios.get('https://ruwassa.herokuapp.com/api/v1/reports/project/'+this.props.id)
        .then(res=>{
            this.setState({
                reportscount: res.data
            })
        }).catch(error=>{console.log(error.message)})

        axios.get('https://ruwassa.herokuapp.com/api/v1/reports/activity/projectweekly/'+this.props.id)
        .then(res=>{
            this.setState({
                weeklyreportcount: res.data
            })
        }).catch(error=>{console.log(error.message)})
*/
 /*/       }

        checkStatus=(e)=>{
            if (e=='TOS'){
                return(10)
            }
            else if(e=='GS'){
                return(25)
            }
            else if(e=='Drilling'){
                return(45)
            }
            else if(e=='PT'){
                return(55)
            }
            else if(e=='PI'){
                return(60)
            }
            else if(e=='FS'){
                return(65)
            }
            else if(e == 'ES'){
                return(80)
            }
            else if(e=='ISP'){
                return(85)
            }
            else if(e=='Reticulation'){
                return(90)
            }
            else if(e=='CR'){
                return(95)
            }
            else if(e=='FR'){
                return(100)
            }
            else if(e=='Excavation'){
                return(20)
            }
         
            else if(e=='SubS'){
                return(40)
            }
            else if(e=='Finishing'){
                return(80)
            }
            else if(e=='Platforming'){
                return(80)
            }
            else if (e=='SuperS'){
                return(60)
            }
            return 0
        }
        render(){
            let len=this.state.roww.length
            let row=[]
            let suma = this.state.roww.reduce((a,b)=>a+b,0)
            let  per=0
            per=suma/len
 /*          axios.get('https://ruwassa.herokuapp.com/api/v1/projects/localsupervisors/'+this.props.id)
            .then(res=>{
            //   alert(this.props.id)
           //     if(this._isMounted){
        //       row.push(this.props.id)
//               Object.keys(res.data).map((e,i)=>row.push(res.data[0].pstatus))
            //}
            }).catch(error=>{console.log(error)})
          
         */
//        let dailyr=[]
 /*/           axios.get('https://ruwassa.herokuapp.com/api/v1/projects/statesupervisors/donephases/'+this.props.id)
            .then(res=>{
            //    alert(this._isMounted)
           //     if(this._isMounted){

               
                this.setState({
                    tasks2: res.data                
                })
            //}
            }).catch(error=>{console.log(error)})
   
          
            
        return(
            <div>
                {per+'  W '+this.state.weeklyr+'|D'+this.state.dailyr}{//+' C W'+this.state.weeklyreportcount.length+' |D '+this.state.reportscount.length
                }
            </div>
        )
        }
    }
*/