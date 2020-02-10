import React from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'


class LocalSup extends React.Component{
constructor(props){
    super(props)

    this.state={
        data:''
    }
}
componentDidMount(){
axios.get('http://192.168.43.252:5000/api/v1/projects/localsupervisors/1')
.then((res)=>{
    this.setState({
        data: res.data
    })
    alert(res)
}).catch(error=>{alert(error)})

}
render(){
    return(
        <div>
            <div>{Object.keys(this.state.data).map(e=><div>{e}</div>)}</div>
        </div>
    )
}

}
export default LocalSup;