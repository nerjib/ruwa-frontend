import React from 'react';


export default class StatusReports extends React.Component {
        constructor(props){
        super(props)
        this.state={

        }

    }

    
    checkStatus=(e)=>{

        if (e=='TOS') {

            return('10%')
            
        }
        else if(e=='GS') {
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
                        <tr>
                            <th>S/N</th><th>LOTS</th><th>LGEA</th><th>Council Ward</th><th>Community Name</th><th>Name of Contractor</th><th>% Coverage</th>
                        </tr>
                    </thead>
                    <tbody>
                {Object.keys(this.props.reports).map(e=><tr><td>{this.props.reports[e].id}</td><td>{this.checkStatus(this.props.reports[e].pstatus)}</td></tr>)}
                </tbody>
                </table>
            </div>
        )
    }
}