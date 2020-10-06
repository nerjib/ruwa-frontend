import React from 'react';
import axios from 'axios'




export default class PstatusRow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            jd:'',
            stage:[0],
            kk:0,
            lidName:''
        }
    }

    componentDidMount=()=>{
        this.checkSupervisor(this.props.lid)
        let hh =[]
        axios.get(`https://ruwassa.herokuapp.com/api/v1/reports/reportstages/${this.props.id}`)
        .then(res=>{
            this.setState({
                jd:res.data
            })
        })
        
    

    }

    
    check=(e)=>{
        let kh=[]
        for(let i=0; i<e.length; i++){
        if(e[i]=='TOS'){
         kh.push(10)
        }
        else if (e[i]=='GS'){
            kh.push(45)
        }
        else if (e[i]=='Drilling'){
            kh.push(45)
        }
        else if(e[i]=='PT'){
            kh.push(55)
        }
        else if(e[i]=='PI'){
            kh.push(60)
        }
        else if(e[i]=='FS'){
            kh.push(65)
        }
        else if(e[i] == 'ES'){
            kh.push(80)
        }
        else if(e[i]=='ISP'){
            kh.push(85)
        }
        else if(e[i]=='Reticulation'){
            kh.push(90)
        }
        else if(e[i]=='CR'){
            kh.push(95)
        }
        else if(e[i]=='FR'){
            kh.push(100)
        }
        else if(e[i]=='Excavation'){
            kh.push(25)
        }
     
        else if(e[i]=='SubS'){
            kh.push(40)
        }
        else if(e[i]=='Finishing'){
            kh.push(80)
        }
        else if(e[i]=='Platforming'){
            kh.push(80)
        }
        else if(e[i]=='Platforming2'){
            kh.push(90)
        }
        else if (e[i]=='SuperS'){
            kh.push(60)
        }
        
    }
    return kh
    this.setState({
        stage: kh
    })
    }
compute=(e)=>{
    return Math.max(...this.check(e))
}


checkStatus=(e)=>{
    if (e=='TOS'){
        return 10
    }
    else if(e=='GS'){
        return('25')
    }
    else if(e=='Drilling'){
        return 45
    }
    else if(e=='PT'){
        return('55')
    }
    else if(e=='PI'){
        return('60')
    }
    else if(e=='FS'){
        return('65')
    }
    else if(e == 'ES'){
        return('80')
    }
    else if(e=='ISP'){
        return('85')
    }
    else if(e=='Reticulation'){
        return('90')
    }
    else if(e=='CR'){
        return('95')
    }
    else if(e=='FR'){
        return('100')
    }
    else if(e=='Excavation'){
        return('50')
    }
 
    else if(e=='SubS'){
        return('40')
    }
    else if(e=='Finishing'){
        return('80')
    }
    else if(e=='Platforming'){
        return('80')
    }
    else if(e=='Platforming2'){
        return('90')
    }
    else if (e=='SuperS'){
        return('60')
    }

}

checkSupervisor(id){
    axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+id)
    .then(req=>{
        if(req.data[0])(
        this.setState({
            lidName: req.data[0].first_name +" "+ req.data[0].last_name
        })
        )
      
    })
}
    render(){
      //  this.componentDidMount()
        let kk=[]
        Object.keys(this.state.jd).map(e=>{
                kk.push(this.state.jd[e].pstatus)
             
        })
        
        return(
            <tr>
                <td> {this.props.lot}</td><td><a target='_blank' href={`/#/projectdetails/${this.props.id}`}> {this.props.community+', '+this.props.lga}</a></td>
                <td>{this.props.sidname}</td>
        <td>{this.props.lid+' '+this.state.lidName}</td><td>{this.props.company}</td>
        <td><a target='_blank' href={`/#/projectdetails/${this.props.id}`}>{this.compute(kk)}</a></td>
          <td>{kk}</td>
          <td>{this.props.started}</td>
          <td><a target='_blank' href={`/#/projectdetails/${this.props.id}`}>
               {this.checkStatus(this.props.pstatus)}</a></td>
            </tr>

        )
    }
}