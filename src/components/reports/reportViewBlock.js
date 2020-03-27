import React from 'react';
import axios from 'axios'

export default class ReportViewBlock extends React.Component{
constructor(props){
    super(props)
    this.state={

    }
}

    componentDidMount=()=>{
      //  alert(rid)
     //   let url=id
        axios.get('https://ruwassa.herokuapp.com/api/v1/reports/'+this.props.rid)
        .then(res=>{
    //        alert(id)
    
         // return url
            this.setState({
        url: res.data[0].imgurl
            })
        }).catch(error=>{console.log(error)})
     
    }
    render(){
        return (
            <div>
                <div className='row'>
                    <div style={{ marginLeft:'100px'}}>
                       {this.props.title }
                    </div>
                    <div style={{ marginLeft:'100px'}}>
                        { this.props.community}
                    </div>
                    <div style={{ marginLeft:'100px'}}>
                       gps: { this.props.gps}
                    </div>
                </div>
            <div>
            <img className='responsive-image' style={{width:'30%', height:'50%'}}
                                    src={this.state.url}
                                    alt={this.props.title}
                                    />

            </div>
             <div style={{ marginLeft:'100px'}} className='row'>
                 <div>
            {this.props.name}
             </div>
             <div style={{ marginLeft:'100px'}}>
             {this.props.date}
             </div>
         </div>
         <hr/>
         </div>
        )
    }
}