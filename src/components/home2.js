import React from 'react';
import axios from 'axios';
import Supervisors from './supervisors/phaseSupervisors'
import Projects from './Projects/projects'
import Contractors from './contractors/contractors'
import { Link, Route, Redirect } from 'react-router-dom';
import wassh from '../img/wassh1.jpg'
import ruwasa from '../img/ruwasa.jpg'
import DailyMap from './map/dailymap'
import Menu from './menu'
import Reports from './reports/reports'
import Analytics from './analytics'
import './home2.css'

const HomePage = () => {
    return(
        <div className='mainContainer'>
{/*}
            <div className='item'>Header</div>
            <div className='item1'>Content</div>
            <div className='item2'>Footer</div>
            <div className='menu'>Menu</div>

         */}   <Header/>
                    <Text/>
                    <Menu1/>
                    <Body/>
        </div>

    )
}
const Body = () =>{
    return(
             <div className='container'>
                    <div className='box'>Fire</div>
                    <div className='box2'>Flood</div>
                    <div className='box'>IDP Camps</div>
                    <div className='box2'></div>
                    <div className='box'></div>
                    <div className='box2'></div>
            </div>
 
    )
}

const Menu1 = () => {
    return(        
    <div className='menu'>
        <div className='button1'>Home</div>
        <div className='button2'>Projects</div>
    </div>
    )
}
const Text =()=> <div><h3>SEMA</h3></div>
export default HomePage
const Header=()=>(
    <div id='header1' className='header'>
    <div className='col-md-1'style={{zIndex:4}}  ><img style={{zIndex:3, height:'15vh'}} className='responsive-image' id='img' 
    alt='Logo' src={ruwasa} /> </div>
               <div style={{ backgroundColor:'#00a9f9',height:'15vh'}}   className='col-md-11'>        
               <div><h2 style={{color:'#ffffff', alignSelf:'center'}} className=' text-center'>{'this.state.title'}</h2></div> 
                <div><h2 style={{color:'white'}}>{('this.state.time')}</h2></div>
               </div> 
               </div>
)

