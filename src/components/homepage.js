import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Supervisors from './supervisors/phaseSupervisors'
import Projects from './Projects/projects'
import Contractors from './contractors/contractors'
import { Link, Route, Redirect } from 'react-router-dom';
import wassh from '../img/wassh1.jpg'
import ruwasa from '../img/ruwasa.jpg'
import DailyMap from './map/dailymap'
import Reports from './reports/reports'
import Analytics from './analytics'
import Sema from '../img/ruwasa.jpg'
import AllPie from './analytics/allPies'
import './homee.css'




const HomePage = ({params}) => {
    const [timer, setTimer] = useState(0)

const [time, setTime]=useState('');
const [time2, setTime2]=useState('');
const [totalProjects, setTotalProjects]=useState('');
const [ongoingProjects, setOngoingProjects]=useState('');
const [allhpbh, setAllhpbh  ] = useState(0)
const [allsmbh, setAllsmbh  ] = useState(0)
const [allflbh, setAllflbh  ] = useState(0)
const [allvip, setAllvip   ] = useState(0)
const [phase, setPhase   ] = useState('6d')
const [phasedata, setPhaseData   ] = useState(0)
const [data, setData  ] = useState(0)



let day1 = 1000 * 3600 * 24;
let today = new Date();

let date1= new Date("10/30/2020, 9:59:12")
let date2= new Date().toLocaleString()
let difftime= date2- date1
let diffdate = Math.round((today.getTime() - date1.getTime())/day1).toFixed(0)
let diffdate1 =(today.getTime() - date1.getTime())/day1

const handleTimer = () =>{
//this.inInterval2= setInterval( ()=>this.tick2(), 1000);
    setInterval(
      () => setTimer(new Date().toLocaleString()),
      1000
    )};
    useEffect(()=>handleTimer(),[])


    const Loader=()=>{
      //  alert(phase)
        axios.get('https://ruwassa.herokuapp.com/api/v2/analytics')
        .then(res=>{
          //  alert(res.data)
            setData(res.data)
        }).catch(e=>{alert(e)})
       
        axios.get(' https://ruwassa.herokuapp.com/api/v2/analytics/byphase/'+phase)
        .then(res=>{
          //  alert(res.data)
            setPhaseData(res.data)
        }).catch(e=>{alert(e)})
     //   alert('a')
    }
    const Loader2=(e)=>{
        alert(e)
      
       
        axios.get(' https://ruwassa.herokuapp.com/api/v2/analytics/byphase/'+e)
        .then(async res=>{
          //  alert(res.data)
            await setPhaseData(res.data)
        }).catch(e=>{alert(e)})
     //   alert('a')
    }

    useEffect(()=>{
       Loader()
    
    },[3])
useEffect(()=>{
},
    [])

const handlel=()=> <Link to='/homp'/>

const handlechangephase =async(e)=>{
  //  alert(e)
await    setPhase(e) 
//useEffect
await Loader2(e)

await Loader()
   await hh()
}

const  hh= async ()=>{
   await  Loader()
}
    return(
        <div className='mainContainer' >
            <Header time={timer}/> 
       
           <Menu  diffdate= {diffdate}/>
           <button onClick={handlel}>jjj</button>
          <Body data={data}/>
          <PhaseOption  phaseSelect={handlechangephase} onLoader={Loader}/>
<Phaseanalytic phasedata={phasedata} phase={phase}/>
            
        </div>

    )
}
const Text =()=> <div><h3>SEMA</h3></div>
const Body = ({data}) => {
    const  facilitylabel = ['Community Borehole','Solar Motorized Borehole','Force Lift Borehole', 'VIP']
    const  statuslabel = ['Ongoing','Completed','Abandoned']
    const facilitycolor = ['red','blue','green','orange']
    const statusColor = ['red','blue','green']
  
    const allprojectsdata= [data.allhpbh,data.allsmbh,data.allflbh,data.allvip]
    const statusData = [data.ongoing, data.completed, data.abandoned]
    const hpbhData = [data.ongoinghpbh, data.completedhpbh, data.abandonedhpbh]
    const smbhData = [data.ongoingsmbh, data.completedsmbh, data.abandonedsmbh]
    const flbhData = [data.ongoingflbh, data.completedflbh, data.abandonedflbh]
    const vipData = [data.ongoingvip, data.completedvip, data.abandonedvip]


    const Flooddata= [4,6,1]
    const AccidentData= [3,8,9]

    const eventData = [3,9,20]

    
    return(
        <div className='container'>

       <div  className='box2'>
                      <h3>  All Projects from Phase 6C</h3><br/>
                      <hr/>
    <AllPie  labels={facilitylabel} backgroundColor={facilitycolor} data={allprojectsdata} />
    <hr/>
    <h2>  {Number(data.allhpbh) + Number(data.allsmbh) + Number(data.allflbh) + Number(data.allvip)}</h2>


                    
                    {
                    //<img style={{zIndex:3, height:'30vh'}} className='responsive-image1' id='img' 
   // alt='Logo' src={Fire} /> 
    }
                    </div>

                  <div  className='box2'>
                      <h3>  Status</h3><br/>
                      <hr/>
    <AllPie  labels={statuslabel} backgroundColor={statusColor} data={statusData} />
    <hr/>
    <h2>  {   Number(data.ongoing)+ Number(data.completed)+ Number(data.abandoned)-1}</h2>



                    
                    {//<img style={{zIndex:3, height:'30vh'}} className='responsive-image1' id='img' 
   // alt='Logo' src={Fire} /> 
    }
                    </div>
          
             
                  <div className='box2'>
             <h3>  Community Hand Pump Boreholes</h3>
             <hr/>
          {//}          <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
   // alt='Logo' src={Flood} /> 
    }
    <AllPie  labels={statuslabel} backgroundColor={statusColor} data={hpbhData} />
<hr/>
<h2>    {Number(data.ongoinghpbh) + Number(data.completedhpbh) + Number(data.abandonedhpbh)}
</h2>


                    </div>
     <div className='box2'>
             <h3>  Solar Motorized Boreholes</h3>
             <hr/>

          {//}          <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
   // alt='Logo' src={Flood} /> 
    }
    <AllPie  labels={statuslabel} backgroundColor={statusColor} data={smbhData} />
<hr/>
<h2>{Number(data.ongoingsmbh) + Number(data.completedsmbh) + Number(data.abandonedsmbh) }</h2>


                    </div>
                    <div className='box2'>
                       <h3> Forcelift Boreholes</h3>   
                                          <hr/>

                        <AllPie  labels={statuslabel} backgroundColor={statusColor} data={flbhData} />

     {//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
    //alt='Logo' src={BFire} /> 
}
<hr/>
<h2>{Number(data.ongoingflbh) + Number(data.completedflbh) + Number(data.abandonedflbh)} </h2>

                    </div>
                    <div className='box2'>
                        <h3>VIP Latrines</h3>
                        <hr/>
                            <AllPie  labels={statuslabel} backgroundColor={statusColor} data={vipData} />

 {//}                   <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
    //alt='Logo' src={IDP} /> 
}
<hr/>
<h2>{Number(data.ongoingvip) + Number(data.completedvip) + Number(data.abandonedvip)}</h2>

                    </div> 
                    <div className='box2'>
                       <h3> ss</h3><br/>                      <hr/>

                        <h2>0 </h2>

     {//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
    //alt='Logo' src={BFire} /> 
}
                    </div>
                    <div className='box2'>
                       <h3> AD</h3><br/>
                       <hr/>

                        <h2>0 </h2>

     {//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
    //alt='Logo' src={BFire} /> 
}
                    </div>             
           
                    
            </div>
                 
    )
}

const Header=({time})=>(
 <div className='header'>
     <div className='row'>
    <div className='col-md-1'style={{zIndex:4}}  ><img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
    alt='Logo' src={Sema} /> 
    </div>
    <div style={{ backgroundColor:'#00a9f9',height:'15vh'}} className='col-md-11'  >        
               <div><h2 style={{color:'#ffffff', alignSelf:'center'}} className=' text-center'>{time}</h2></div> 
    </div> 
    </div>
    <td>
                   
                     </td>
 </div>
)


const Phaseanalytic = ({phasedata,phase}) => {

    const  facilitylabel = ['Community Borehole','Solar Motorized Borehole','Force Lift Borehole', 'VIP']
    const  statuslabel = ['Ongoing','Completed','Abandoned']
    const facilitycolor = ['red','blue','green','orange']
    const statusColor = ['blue','green','red']
    
    let [kk, setKK] = useState('')
 //   let [phase, setPhase] = useState(7)

    const handleChangePhase=(e)=>{
        const { value } = e.target;
    //    phaseSelect(value)
      //  setPhase(value)
      //  ddd()
    //    alert(value)
      //      setPhase(value)
    }

    const ddd=(e)=>{
      //  alert(e)
        axios.get('https://ruwassa.herokuapp.com/api/v2/analytics/byphase/'+e)
        .then(res=>{
          //  alert(res.data)
            setKK(res.data)
        }).catch(e=>{alert(e)})
    }
/*useEffect(axios.get('https://ruwassa.herokuapp.com/api/v2/analytics/byphase/7')
.then(res=>{
  //  alert(res.data)
    setKK(res.data)
}).catch(e=>{alert(e)}),[]

)*/
  
    const hpbhdata= [phasedata.comhpbhphase,phasedata.ongoinghpbhphase,phasedata.abandonedhpbhphase]
    const smbhdata= [phasedata.comsmbhphase,phasedata.ongoingsmbhphase,phasedata.abandonedsmbhphase]
    const flbhdata= [phasedata.comflbhphase,phasedata.ongoingflbhphase,phasedata.abandonedflbhphase]
    const vipdata= [phasedata.comvipphase,phasedata.ongoingvipphase,phasedata.abandonedvipphase]


    return(
        <div className='phasediv'>
            <div>
                <button onClick={()=>ddd('6c')}>6</button>
                <button onClick={()=>ddd('7')}>7</button>

            </div>
        <div className='box2'>
           <h3> Community Borehole {phase}</h3>
           hhfhhf {kk.length}
           <hr/>
           <AllPie  labels={statuslabel} backgroundColor={statusColor} data={hpbhdata} />

           <hr/>
            <h2>{Number(phasedata.comhpbhphase) + Number(phasedata.ongoinghpbhphase) + Number(phasedata.abandonedhpbhphase)} </h2>

{//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
//alt='Logo' src={BFire} /> 
}
        </div>
        <div className='box2'>
           <h3> Solar Motorized Borehole</h3>
           <hr/>
           <AllPie  labels={statuslabel} backgroundColor={statusColor} data={smbhdata} />

           <hr/>
            <h2>{Number(phasedata.comsmbhphase) + Number(phasedata.ongoingsmbhphase) + Number(phasedata.abandonedsmbhphase)} </h2>

{//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
//alt='Logo' src={BFire} /> 
}
        </div>    

        <div className='box2'>
           <h3> Force Lift Borehole</h3>
           <hr/>
           <AllPie  labels={statuslabel} backgroundColor={statusColor} data={flbhdata} />

           <hr/>
            <h2>{Number(phasedata.comflbhphase) + Number(phasedata.ongoingflbhphase) + Number(phasedata.abandonedflbhphase)} </h2>

{//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
//alt='Logo' src={BFire} /> 
}
        </div> 

        <div className='box2'>
           <h3> VIP Latrines</h3>
           <hr/>
           <AllPie  labels={statuslabel} backgroundColor={statusColor} data={vipdata} />

           <hr/>
            <h2>{Number(phasedata.comvipphase) + Number(phasedata.ongoingvipphase) + Number(phasedata.abandonedvipphase)} </h2>

{//}               <img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
//alt='Logo' src={BFire} /> 
}
        </div> 
        </div>
    )
}



const PhaseOption =({phaseSelect, onLoader}) => {
let [kk, setKK] = useState('')
let [phase, setPhase] = useState('6d')

    const handleChangePhase=(e)=>{
        const { value } = e.target;
        phaseSelect(value)
        setPhase(value)
        onLoader()
      //  ddd()
    //    alert(value)
      //      setPhase(value)
    }

    const ddd=()=>{

        axios.get(' https://ruwassa.herokuapp.com/api/v2/analytics/byphase/'+phase)
        .then(res=>{
          //  alert(res.data)
            setKK(res.data)
        }).catch(e=>{alert(e)})
    }

    return(
<div className='phaseOption' >
    
        <select className='phaseOption' id='pstatus'  onChange={handleChangePhase}>
                <option >Select Phase</option>
                <option value='6'>Phase 6C projects</option>
                <option value='6d'> Phase 6D projects</option>
                <option value='7'> Phase 7 projects</option>
                <option value='Covid-19 Response'> Covid-19 Response</option>

                </select>
                </div>
    )
}
const Menu = (         {diffdate}
    ) => {
    return (
<div className='Menu'>
                <button className='button'>
                Home    
            </button>
            <a href={`#/projects`}>
 <button className='button'>
               Projects 
            </button></a>
           
    {/*}        <Link to="/reports">
            <button className='button'>
                Report
            </button>
            </Link>
    */}
            <Link to="/reports">
            <button className='button'>
                Reports
            </button>
            </Link>
            <Link to="/functionality">
            <button className='button'>
                Functionality
            </button>
            </Link>
            <Link to="/pmap">
            <button className='button'>
                Map
            </button>
            </Link>
            <Link to="/settings">
            <button className='button'>
                Settings
            </button>
            </Link>
            <Link to="/signout">
            <button className='button'>
                Sign Out
            </button>
            </Link>
        </div>
    )
}

export default HomePage

