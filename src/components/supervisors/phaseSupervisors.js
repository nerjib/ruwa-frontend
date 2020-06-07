import React from 'react';
import axios from 'axios';
import  SupervisorsTableRow from './supervisorsTableRow'
import { Link, Route, Redirect } from 'react-router-dom';


export default class PhaseSupervisors extends React.Component{
    constructor(props){
        super(props);

        this.state={
            supervisors:'',
            currentPage: 1,
            supervisorsPerPage: 100,
            phase:6
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

    render(){

        let row=[]
   Object.keys(this.state.supervisors).map((e,i)=>{row.push(<tr>
        <td>{i+1}</td><td>{this.state.supervisors[e].id}</td><td><a href={`/#/supervisor/${this.state.supervisors[e].id}`}>{this.state.supervisors[e].last_name+' ' +this.state.supervisors[e].first_name+' '+this.state.supervisors[e].other_name}</a></td>
        <td>{this.state.supervisors[e].title}</td><td>{this.gettask(this.state.supervisors[e].id)}</td>
    </tr>)
        })
    

            return(
                <div><div>
                <Link to='/home'>    <button>Home</button></Link>
                </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Supervisor Id</th>
                                <th>Name</th>
                                <th>Facility</th>
                            </tr>
                        </thead>
                    {row}

                    </table>
                </div>
            )
        }
    }
