import React from 'react';
import axios from 'axios';


export default class ProjectsStatus extends React.Component {
        constructor(props){
        super(props)
        this.state={

        }

    }

    
    checkStatus=(e)=>{
        if (e=='TOS'){
            return('10%')
        }
        else if(e=='GS'){
            return('25%')
        }
        else if(e=='Drilling'){
            return('45%')
        }
        else if(e=='PT'){
            return('55%')
        }
        else if(e=='PI'){
            return('60%')
        }
        else if(e=='FS'){
            return('65%')
        }
        else if(e == 'ES'){
            return('80%')
        }
        else if(e=='ISP'){
            return('85%')
        }
        else if(e=='Reticulation'){
            return('90%')
        }
        else if(e=='CR'){
            return('95%')
        }
        else if(e=='FR'){
            return('100%')
        }
        else if(e=='Excavation'){
            return('20%')
        }
     
        else if(e=='SubS'){
            return('40%')
        }
        else if(e=='Finishing'){
            return('80%')
        }
        else if(e=='Platforming'){
            return('80%')
        }
        else if (e=='SuperS'){
            return('60%')
        }
    
    }
checkSup=(id)=>{
    let gg=''
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/'+id)
    .then(res=>{
        gg =res.data[0].local_id
    })
    return gg
}    
    render(){

        let row = []
        Object.keys(this.props.reports).map((e,i)=>{
            if(this.props.reports[e].phase == this.props.phase & this.props.reports[e].title==this.props.focus){
            row.push(  <tr><td> <a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>{i+1}</a></td>
                <td>{this.props.reports[e].lot}</td>
                <td>{this.props.reports[e].lga}</td>
                <td>{this.props.reports[e].ward}</td>
                <td>{this.props.reports[e].community}</td>
                <td>{this.props.reports[e].gps}</td>
                <td>{this.props.reports[e].facility}</td>
                <td>{this.props.reports[e].company}</td>
                <td>{this.checkSup(this.props.reports[e].id)}</td>
               <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>
               {this.checkStatus(this.props.reports[e].pstatus)}</a></td></tr>)
            }   
            })
        return (

            <div>
                <table class='table'>
                    <thead>
                        <tr><th colSpan='8'>{this.props.projecttype}</th></tr>
                        <tr>
                            <th>S/N</th><th>LOTS</th><th>LGA</th><th>Council Ward</th><th>Community Name</th><th>gps</th><th>Facility</th><th>Name of Contractor</th><th>% Coverage</th>
                        </tr>
                    </thead>
                    <tbody>
                {row}
                </tbody>
                </table>
            </div>
        )
    }
}