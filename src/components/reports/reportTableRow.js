import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Object } from 'core-js'

class ReportTableRow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ptitle:''
        }
    }

    goToUpdate = () =>{
    //    this.props.history.push('/updateproject/'+this.props.id)
    }


    onLoad(){
   
        axios.get('/api/v1/projects/'+this.props.pid)
                .then(res => {
                    this.setState({
                            ptitle:res.data[0]
                    })
                }).catch( errors=>{console.log(errors.message)})
 
}

componentDidMount(){
 //this.inTerval=this.onLoad()
 axios.get('/api/v1/projects/'+this.props.pid)
 .then(res => {
     this.setState({
             ptitle: res.data[0].title
     })
 }).catch( errors=>{console.log(errors.message)})

}
componentWillMount(){
    clearInterval(this.inTerval)
}
    render(){

//        const currentProjects = Object.keys(this.state.ptitle).slice(1,3);

        return(
                    <tr>       
                        <td>{this.props.id}</td>
                        <td>{this.props.pid}</td>
                        <td>{this.props.uid}</td>
                        <td>{this.state.ptitle}</td>
                        <td>{this.props.title +' ff'+this.props.currentprojects}</td>


                        <td>{this.props.reportdate}</td>

                        <td>
                            <button className='btn btn-default btn-info'  style={{width:'200px'}}
                             onClick={this.goToUpdate}>Edit </button>                            
                    </td>

                    </tr>
        )
    }
}

export default withRouter(ReportTableRow);