import React from 'react';
import axios from 'axios';
import { Link, Route, Redirect } from 'react-router-dom';


export default class Monitors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            monitors:'',
            currentPage: 1,
            supervisorsPerPage: 100,
            phase:7,
            title: 'Phase 7'
        }
    }
    load=()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/monitorsreports')
        .then((res) =>{

            this.setState({monitors: res.data})
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
   Object.keys(this.state.monitors).map((e,i)=>{
   //    if(this.state.supervisors[e].title=='Sanitation'){
       row.push(<tr>
        <td>{i+1}</td>{//<td>{this.state.supervisors[e].id}</td>
   }
        <td className='text-left'>{this.state.monitors[e].id}</td>
        <td className='text-left'><img  style={{zIndex:3, width:'20%', marginLeft:40}} className='responsive-image'  src='{}' alt='ff'/> {this.state.monitors[e].id}</td>

        <td>{this.state.monitors[e].actno}</td><td>{this.state.monitors[e].remark}</td>
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
                               {//} <th>Supervisor Id</th>
    }
                                <th>Id</th>
                                <th>Remark</th>
                            
                            </tr>
                        </thead>
                    {row}

                    </table>
                </div>
            )
        }
    }
