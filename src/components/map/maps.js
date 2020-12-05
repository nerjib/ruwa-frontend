import React, { Component,useState, useEffect } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
//import './style.css';
import ruwasa from '../map/ruwasa.jpg';

import axios from 'axios';



const Maps=()=>{
    let [phase, setPhase] =useState('7')
    let [myMarkers, setMyMarkers] = useState([]);
    let [center, setCenter]=useState({
        lat: 10.5368909, 
        lng: 7.4786129
      })
      let  [zoom, setZoom] = useState(10)

      //This is how much you want to zoom in


    useEffect(async()=>{
        axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
        .then( res =>{
           let kk=[]
           Object.keys(res.data).map(e=>{
                if(res.data[e].phase==phase){
                // this.state.pidd.push(res.data[e].pid)
                 
                 //alert(res.data[e].pid)
                   // alert((res3.data[0].gps.split(','))[0])
                   let lat=0;
                   let long=0;
                   if (res.data[e].gps){
                     lat=(res.data[e].gps.split(','))[0];
                     long=(res.data[e].gps.split(','))[1]
                   }
                     let data={
                        name : res.data[e].title,
                        lat: lat, 
                        lng: long,
                        id:  Number(res.data[e].id)
                     }
                    
                 //    alert(res.data[e].id)
                 //    alert(res3.data[0].title)
                // markerlist={...markerlist,...data}
                myMarkers.push(data)
                    }
                 //  alert(kk.length)
                   //setMyMarkers=kk;

                
            })

        })
    
    
     //   alert(myMarkers.length)

        //this.setState( {myMarkers : this.state.myMarkers} );
                setMyMarkers(myMarkers)

    },[])

    const Marker = ({text, id}) => {
        let colorr='green'
        let name='';
        if(text=='Community Borehole'){
            colorr='blue'
            name='CHPBH'
        }else  if(text=='Motorized Solar Borehole'){
            colorr='green'
            name='SMBH'
        } else  if(text=='Sanitation'){
            colorr='red'
            name='VIP'
        }else if(text=='Force Lift'){
          name='FLBH'
        }
        return (
              <div>         
              <a target='_blank' href={`/#/projectdetails/${id}`}> <b style={{color:colorr}}>{name}</b><img style={{width:20}} className='responsive-image' id='img'  src={ruwasa}
              alt='Logo'  /></a></div>
        );
    }


    return(
        <div>
        <center>
            <div>Sites Location {myMarkers.length} </div>
        <div style={{ height: '100vh', width: '90%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ 
              key1: 'AI zaSyAVT4-Uzdp9LaBGtIFlw7iGEKbPQ8fZxHI',
              key:'AI zaSyC8wjDwqKGAhfCUmMRJGPYutiKE7aI5Crw',
              region: 'NG'
             }}
          
            defaultCenter={center}
            defaultZoom={zoom} 
          >

          
          {
            //Add a list of Markers to Your Map
            myMarkers.map( (each) =>
                          <Marker
                lat = {each.lat}
                lng = {each.lng}
              text = {each.name}
              id= {each.id}
              />
            )
          }
          </GoogleMapReact>
        </div>

        </center>
     
      </div>

    )


}

export default Maps
/*export default class ProjectsMap extends Component {

  

  constructor(props) {
    super(props);

    this.state = {
        phase:'7',
        //This is where the center of map is going to be10.5368909,7.4786129
      center : {
        lat: 10.5368909, 
        lng: 7.4786129
      },

      //This is how much you want to zoom in
      zoom : 10,

      //This is the list of markers.
      myMarkers : [],
      title:[]

    };
    

    //Adding to the list of markers
   /* let aMarker = {
      name : 'Mountain View High School',
      lat: 10.5368909, 
        lng: 7.4786129
    }
    this.state.myMarkers.push(aMarker);

    aMarker = {
      name : 'FreeStyle',
      lat: 10.5368509, 
      lng: 7.47864129
    }
    this.state.myMarkers.push(aMarker);

    aMarker = {
      name : 'Alta Vista',
      lat : 37.360188,
      lng : -122.064,
          }
    this.state.myMarkers.push(aMarker);

*/


/*


    axios.get('https://ruwassa.herokuapp.com/api/v1/analytics/reports/date/all')
    .then(res =>{
        let mon=0; 
        let tod=0;
        let wk= 0;
        
        let pidd=[1,2,3]
       
        Object.keys(res.data).map(e=>{
            if (new Date(res.data[e].date).getDate()== new Date().getDate() && new Date(res.data[e].date).getMonth()== new Date().getMonth()){
            
            // this.state.pidd.push(res.data[e].pid)
             
             //alert(res.data[e].pid)
             axios.get('https://ruwassa.herokuapp.com/api/v1/projects/details/'+res.data[e].pid)
             .then(res3=>{
               // alert((res3.data[0].gps.split(','))[0])
                 let data={
                    name : res3.data[0].title,
                    lat: (res3.data[0].gps.split(','))[0], 
                    lng: (res3.data[0].gps.split(','))[1]
                 }
             //    alert(res3.data[0].title)
            // markerlist={...markerlist,...data}
            this.state.myMarkers.push(data);

                })
            }
        })

    })

  









    this.setState( {myMarkers : this.state.myMarkers} );*/
   // this.setState({myMarkers: this.props.markerid})

/*
  }

  loader=()=>{
    axios.get('https://ruwassa.herokuapp.com/api/v1/projects/completeprojects/all')
    .then(res =>{
        let mon=0; 
        let tod=0;
        let wk= 0;
        
        let pidd=[1,2,3]
       
        Object.keys(res.data).map(e=>{
            if(res.data[e].phase==this.state.phase){
            // this.state.pidd.push(res.data[e].pid)
             
             //alert(res.data[e].pid)
               // alert((res3.data[0].gps.split(','))[0])
               let lat=0;
               let long=0;
               if (res.data[e].gps){
                 lat=(res.data[e].gps.split(','))[0];
                 long=(res.data[e].gps.split(','))[1]
               }
                 let data={
                    name : res.data[e].title,
                    lat: lat, 
                    lng: long,
                    id:  Number(res.data[e].id)
                 }
                
             //    alert(res.data[e].id)
             //    alert(res3.data[0].title)
            // markerlist={...markerlist,...data}
           this.state.myMarkers.push(data);
                }
            
        })

    })



    this.setState( {myMarkers : this.state.myMarkers} );
  }
  componentDidMount=()=>{
      this.loader()
this.interval=setInterval(()=>this.loader(),60000)
}
 
componentWillUnmount=()=>{
    clearInterval(this.interval)
}
 

  render() {

    //Marker Component
    const Marker = ({text, id}) => {
        let colorr='green'
        let name='';
        if(text=='Community Borehole'){
            colorr='blue'
            name='CHPBH'
        }else  if(text=='Motorized Solar Borehole'){
            colorr='green'
            name='SMBH'
        } else  if(text=='Sanitation'){
            colorr='red'
            name='VIP'
        }else if(text=='Force Lift'){
          name='FLBH'
        }
        return (
              <div>         
              <a target='_blank' href={`/#/projectdetails/${id}`}> <b style={{color:colorr}}>{name}</b><img style={{width:20}} className='responsive-image' id='img'  src={ruwasa}
              alt='Logo'  /></a></div>
        );
    }

   // key1: 'AI zaSyAVT4-Uzdp9LaBGtIFlw7iGEKbPQ8fZxHI',

//apikey AIzaSyAVT4-Uzdp9LaBGtIFlw7iGEKbPQ8fZxHI
    return (
      <div>
        <center>
            <div>Sites Location </div>
        <div style={{ height: '100vh', width: '90%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ 
              key1: 'AI zaSyAVT4-Uzdp9LaBGtIFlw7iGEKbPQ8fZxHI',
              key:'AI zaSyC8wjDwqKGAhfCUmMRJGPYutiKE7aI5Crw',
              region: 'NG'
             }}
          
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
          >

          
          {
            //Add a list of Markers to Your Map
            this.state.myMarkers.map( (each) =>
                          <Marker
                lat = {each.lat}
                lng = {each.lng}
              text = {each.name}
              id= {each.id}
              />
            )
          }
          </GoogleMapReact>
        </div>

        </center>
     
      </div>
      
    );
  }
}
*/