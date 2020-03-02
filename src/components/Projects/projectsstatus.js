import React from 'react';


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
        else if(e=='FS'){
            return('65%')
        }
        else if(e=='ES'){
            return('80%')
        }
        else if(e=='ISP'){
            return('85%')
        }
        else if(e=='Reticulation'){
            return('90%')
        }
        else if(e=='FR'){
            return('100%')
        }
    }
    render(){
        return (

            <div>
                <table class='table'>
                    <thead>
                        <tr><th colSpan='8'>{this.props.projecttype}</th></tr>
                        <tr>
                            <th>S/N</th><th>LOTS</th><th>LGA</th><th>Council Ward</th><th>Community Name</th><th>Facility</th><th>Name of Contractor</th><th>% Coverage</th>
                        </tr>
                    </thead>
                    <tbody>
                {Object.keys(this.props.reports).map((e,i)=><tr><td>{i+1}</td>
                <td>{this.props.reports[e].lot}</td>
                <td>{this.props.reports[e].lga}</td>
                <td>{this.props.reports[e].ward}</td>
                <td>{this.props.reports[e].community}</td>
                <td>{this.props.reports[e].facility}</td>
                <td>{this.props.reports[e].company}</td>
               <td>{this.checkStatus(this.props.reports[e].pstatus)}</td></tr>)}
                </tbody>
                </table>
            </div>
        )
    }
}