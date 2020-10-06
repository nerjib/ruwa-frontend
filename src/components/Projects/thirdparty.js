import React from 'react';
import axios from 'axios'

export default class ThirdParty extends React.Component{
    constructor(props){
    super(props)
        this.state={
                third:''
        }
    }

    componentDidMount=async()=>{
        let hh

     await   axios.get('https://ruwassa.herokuapp.com/api/v1/projects/thirdparty/'+this.props.id)
           .then(res=>{
             
                   hh=res.data[0]      
                   this.setState({
                       third: res.data[0].count +' '+this.props.id
                   })
             
           })
           
      
       
    }

    render(){
        return(
            <div>
                {this.state.third+' '+this.props.id}
            </div>
        )
    }
}