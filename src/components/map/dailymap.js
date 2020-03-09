import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
//import './style.css';
import ruwasa from '../map/ruwasa.jpg'
import axios from 'axios';





export default class DailyMap extends Component {

  

  constructor(props) {
    super(props);

    this.state = {

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


  }

  loader=()=>{
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
                    lng: (res3.data[0].gps.split(','))[1],
                    id:  Number(res.data[e].id)
                 }
             //    alert(res.data[e].id)
             //    alert(res3.data[0].title)
            // markerlist={...markerlist,...data}
           this.state.myMarkers.push(data);

                })
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
        return (
              <div>         
               <b style={{color:'green'}}>{text}</b><a href={`/#/reports/${id}`}><img style={{width:20}} className='responsive-image' id='img'  src={ruwasa}
              alt='Logo'  /></a></div>
        );
    }



    return (
      <div>
        <center>
            <div>Daily Reports </div>
        <div style={{ height: '100vh', width: '90%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AI zaSyAVT4-Uzdp9LaBGtIFlw7iGEKbPQ8fZxHI' }}
  
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