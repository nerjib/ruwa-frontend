import React from 'react';
import axios from 'axios';
import PstatusRow from './PstatusRow'
import ThirdParty from './thirdparty'


export default class ProjectsStatus extends React.Component {
        constructor(props){
        super(props)
        this.state={
                sta: '',
                vall:'',
                jd:'',
                color:'',
                acttype:'   '
        }

    }
componentDidMount=()=>{
    let hh =[]
    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/reportstages/532')
    .then(res=>{
        this.setState({
            jd:res.data
        })
    })
    
    const acttype= localStorage.getItem('acttype')
    this.setState({
        acttype
    })


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
        }else {
            return '0'
        }    
    }

checkSup= (id)=>{

    let gg=''
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/'+id)
    .then(res=>{
        gg =res.data[0].local_id
    })
    return gg
}    
checkSupervisor=async(id)=>{
    let kk;
 await   axios.get('https://ruwassa.herokuapp.com/api/v1/users/'+id)
    .then(req=>{
        kk= req.data[0].first_name +" "+ req.data[0].last_name
        if(req.data[0])(
        this.setState({
            supervisorName: req.data[0].first_name +" "+ req.data[0].last_name
        })
        )
    
    })
    return kk
}
 checkSS=  (id)=>{
    let hh =[]

    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/reportstages/'+id)
    .then(res=>{
        this.setState({
            sta:res.data[0]        })
         Object.keys(this.state.sta).map(e=>
            {hh.push(this.checkStatus(this.state.sta[e].pstatus))}
        )
    })
    this.setState({
        vall: hh
    })
    
return hh[0]

}

check3=  (id)=>{
    let hh

   axios.get('https://ruwassa.herokuapp.com/api/v1/projects/thirdparty/'+id)
    .then(res=>{
      
            hh=res.data[0]      
      
    })
    
return hh

}

checkColor=(e)=>{
    //return 'green'
    if(e=='done'){
      
        return '#00f9dd'
    }
  //  return 'yellow'
}


checkSolar=  (id)=>{
        let hh
   axios.get('https://ruwassa.herokuapp.com/api/v1/update/allsolar/'+id)
    .then(res=>{      
            hh=res.data[0].total2
      
    })
    
return hh

}

checkVip=  (id)=>{
        let hh
    axios.get('https://ruwassa.herokuapp.com/api/v1/update/allvip/'+id)
    .then(res=>{      
          return (res.data[0].total2)
      
    })
    
//return hh

}

componentDidUpdate=()=>{

}


checkWardNullity=(e)=>{
    this.componentDidUpdate()
    if(e){
        return(e)
    }
    return ''
}

    render(){

         
    let day1 = 1000 * 3600 * 24;
    let today = new Date();

        let rrr=[]
Object.keys(this.state.jd).map(e=>{rrr.push(this.state.jd[e].pstatus)})
        let row = []
        let row6=[]
        let kkk = 0
        let kk=0;
        let kk2=0;

        Object.keys(this.props.reports).map((e,i)=>{
            if(this.props.pstatus=='all'){

                if(this.props.reports[e].phase == this.props.phase & this.props.reports[e].title==this.props.focus){
                   kk ++
                   row.push(  <tr style={{fontWeight:"bold", backgroundColor: this.checkColor(this.props.reports[e].valuation)}}><td> <a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>{kk}</a></td>
                        <td>{this.props.reports[e].lot}</td>
                                                
                {//}    <td><ThirdParty id={this.props.reports[e].id}/></td>
                    }
               {//}        <td>{this.props.reports[e].ward}</td>
                       }       <td>{this.props.reports[e].community}</td>
                       <td>{this.props.reports[e].ward}</td>
                       <td>{this.props.reports[e].lga}</td>
          {this.props.phase !=='Covid-19 Response' &&               <td>{this.checkWardNullity(this.props.reports[e].first_name)+' '+this.checkWardNullity(this.props.reports[e].last_name)+' '+this.checkWardNullity(this.props.reports[e].other_name) }</td>
               } {//}          <td>{this.props.reports[e].actno}</td>
                //        <td>{this.props.reports[e].bank}</td>
                    }
              {this.props.phase !=='Covid-19 Response' &&           <td>{this.checkWardNullity(this.props.reports[e].fn)+' '+this.checkWardNullity(this.props.reports[e].ln)+' '+this.checkWardNullity(this.props.reports[e].on)}</td>
                }    {//}    <td>{this.props.reports[e].bnk}</td>
                }
                    
            {//}            <td>{this.props.reports[e].gps}</td>
                       //           <td>{this.props.reports[e].facility}</td>
                              }          <td>{this.props.reports[e].company}</td>
                                  <td>{this.props.reports[e].functionality}</td>
                     {(this.props.reports[e].lastdate && (this.state.acttype === 'superadmin' || this.state.acttype==='director')) &&
                      <td>{  Math.round((today.getTime() - (new Date(this.props.reports[e].lastdate)).getTime())/day1).toFixed(0)
                        }</td>}

{ (!this.props.reports[e].lastdate && (this.state.acttype === 'superadmin' || this.state.acttype==='director')) &&
                      <td>-</td>}

                     
                  {this.state.acttype == 'superadmin' &&     <td>{this.props.reports[e].started}</td>}
               {//}          <td>{this.checkSup(this.props.reports[e].id)}</td>
               //         <td>{this.checkSup(this.props.reports[e].id)}</td>
                                  }    
                {this.props.reports[e].phase=='6' &&                    <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>
                     {this.checkStatus(this.props.reports[e].pstatus)}</a></td>}
                {this.props.reports[e].phase!='6' &&   <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>{this.props.reports[e].totalcov}</a></td>}
                     
                {this.state.acttype == 'superadmin' && <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>
                     { this.checkStatus(this.props.reports[e].pstatus)}</a></td> }
                 
                     </tr>)
             {/**/       row6.push(<PstatusRow lot={this.props.reports[e].lot}   id={this.props.reports[e].id} lga={this.props.reports[e].lga}
                    community={this.props.reports[e].community} lid={this.props.reports[e].local_id}
                    sidname={this.props.reports[e].first_name+' '+this.props.reports[e].last_name+' '+this.props.reports[e].other_name}
                        company={this.props.reports[e].company}
                        
                        pstatus={this.props.reports[e].pstatus}
                    />)  
                /**/  }
                } 
            }else{

                if(this.props.reports[e].phase == this.props.phase & this.props.reports[e].status==this.props.pstatus & this.props.reports[e].title==this.props.focus){
                   kk2 ++;
                   row.push(  <tr style={{fontWeight:"bold",  backgroundColor: this.checkColor(this.props.reports[e].valuation)}}><td> <a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>{kk2}</a></td>
                        <td>{this.props.reports[e].lot}</td>
                        <td>{this.props.reports[e].lga}</td>
                {//}    <td><ThirdParty id={this.props.reports[e].id}/></td>
                    }
               {//}        <td>{this.props.reports[e].ward}</td>
                       }       <td>{this.props.reports[e].community}</td>
        {this.props.phase !=='Covid-19 Response' &&             <td>{this.props.reports[e].first_name+' '+this.props.reports[e].last_name+' '+this.props.reports[e].other_name }</td>
             } {//}                  <td>{this.props.reports[e].actno}</td>
             //                   <td>{this.props.reports[e].bank}</td>
                    }
                        {this.props.phase !=='Covid-19 Response' &&          <td>{this.props.reports[e].fn+' '+this.props.reports[e].ln+' '+this.props.reports[e].on }</td>
       } {//}                        <td>{this.props.reports[e].ac}</td>
        //                        <td>{this.props.reports[e].bnk}</td>
                }
            {//}            <td>{this.props.reports[e].gps}</td>
                       //           <td>{this.props.reports[e].facility}</td>
                              }          <td>{this.props.reports[e].company}</td>
                                 <td>{this.props.reports[e].functionality}</td>
                     { (this.props.reports[e].lastdate && (this.state.acttype === 'superadmin' || this.state.acttype==='director')) &&
                      <td>{  Math.round((today.getTime() - (new Date(this.props.reports[e].lastdate)).getTime())/day1).toFixed(0)
                      }</td>}
            { (!this.props.reports[e].lastdate && (this.state.acttype === 'superadmin' || this.state.acttype==='director')) &&
                      <td>-</td>}


                     
                      {this.state.acttype == 'superadmin' &&   <td>{this.props.reports[e].started}</td>}

               {//}          <td>{this.checkSup(this.props.reports[e].id)}</td>
               //         <td>{this.checkSup(this.props.reports[e].id)}</td>
                                  }    
          {this.props.reports[e].phase=='6' &&                        <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>
                     { this.checkStatus(this.props.reports[e].pstatus)}</a></td>}
            {this.props.reports[e].phase!='6' && <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>{this.props.reports[e].totalcov}</a></td> }
  
            {this.state.acttype == 'superadmin' && <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>
                     { this.checkStatus(this.props.reports[e].pstatus)}</a></td> }
  {/*}         <td>###</td>
                     <td><a target='_blank' href={`/#/projectdetails/${this.props.reports[e].id}`}>
                     { this.checkStatus(this.props.reports[e].pstatus)}</a></td>
                     <td>{this.props.reports[e].totalcov}</td>
*/}
                     </tr>)
             {/*      row6.push(<PstatusRow lot={this.props.reports[e].lot}   id={this.props.reports[e].id} lga={this.props.reports[e].lga}
                    community={this.props.reports[e].community} lid={this.props.reports[e].local_id}
                    sidname={this.props.reports[e].first_name+' '+this.props.reports[e].last_name+' '+this.props.reports[e].other_name}
                        company={this.props.reports[e].company}
                        pstatus={this.props.reports[e].pstatus}
                    />)  
                 */  }
                } 
            }
          
           
  
            })
         /*   Object.keys(this.props.reports).map((e,i)=>{
                row6.push(<PstatusRow  id={this.props.reports[e].id} lga={this.props.reports[e].lga}/>)
            })*/
            let row5=[]
           
                {Object.keys(this.state.sta).map(e=>
                    {row5.push(this.checkStatus(this.state.sta[e].pstatus))}
                )}
                let k= Math.max(...[row5])
       return (
           
            <div> 
          {//rrr
          }      
                {//Math.max(...[...row5])
                }
                <table class='table'>
                {this.props.phase=='Covid-19 Response'?
        <thead className="text-left">
                        <tr><th colSpan='8'>{this.props.projecttype}</th></tr>
                        { this.state.acttype===('superadmin' || 'director')?
                        
                        <tr>
                             <th>S/N</th><th>LOTS</th><th>LGA</th><th>Community Name</th><th>Name of Contractor</th><th>Functional</th><th>Report last seen (days)</th><th>Started on</th><th>%</th>
                       
              
                            </tr>:
                        
                        <tr>
                             <th>S/N</th><th>LOTS</th><th>LGA</th><th>Community Name</th><th>Name of Contractor</th><th>Functional</th><th>%</th>
                       
              
                            </tr>}
                    </thead>:
                      <thead className="text-left">
                      <tr><th colSpan='8'>{this.props.projecttype}</th></tr>
                      { this.state.acttype===('superadmin' || 'director')?
                      <tr>
                          <th>S/N</th><th>LOTS</th><th>Community</th><th>Ward</th><th>LGA</th><th>State Supervisor</th><th>Local Supervisor</th><th>Name of Contractor</th><th>Functional</th><th>ReportLast seen (days)</th><th>started on</th><th>%</th>
                     
                                          </tr>:
                       <tr>
                          <th>S/N</th><th>LOTS</th><th>Community</th><th>Ward</th><th>LGA</th><th>State Supervisor</th><th>Local Supervisor</th><th>Name of Contractor</th><th>Functional</th><th>%</th>
                                 
                                           </tr>}
                  </thead>

            }
                    <tbody className="text-left">
                {row}
                {//row6
                }
                </tbody>
                </table>
<div className='col-md-6'>

</div>
            </div>
        )
    }
}
/*
const Total=(props)=>{
    let hh1 =[]

    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/reportstages/532')
    .then(res=>{
        let hh =[]

         Object.keys(res.data).map(e=>
         //  {alert(res.data[e].pstatus)}
           {hh1.push(res.data[e].pstatus)}
        )
        
    })
    return(
        
        hh1
    
    )
}

*/
/*
class Total extends React.Component{
constructor(props){
super(props)
 this.state={
     hhh:''
 }
}

componentDidMount=()=>{
    let hh =[]

    axios.get('https://ruwassa.herokuapp.com/api/v1/reports/reportstages/'+this.props.n)
    .then(res=>{

         Object.keys(res.data).map(e=>
         //  {alert(res.data[e].pstatus)}
           {hh.push(res.data[e].pstatus)}
        )
        
    })
    this.setState({
        hhh:hh
    })

}

render(){
    return(
        <div>
            {this.state.hhh}
        </div>
    )
}
}
*/
