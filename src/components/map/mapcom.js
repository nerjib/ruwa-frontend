import React, { Component } from 'react';
import { render } from 'react-dom';
import GoogleMapReact from 'google-map-react';
//import './style.css';
import ruwasa from '../map/ruwasa.jpg';
import axios from 'axios';


export default class MapComp extends Component {

  

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
loading:'',
      //This is the list of markers.
      myMarkers : [],

    };

  }

    
  loader=()=>{
this.setState({
    myMarkers: [],
})
        Object.keys(this.props.locations).map(e=>{

            if(this.props.phase=='all'){
                this.setState({loading:'...'})
                // this.state.pidd.push(res.data[e].pid)
             
             //alert(res.data[e].pid)
               // alert((res3.data[0].gps.split(','))[0])
               let lat=0;
               let long=0;
               if (this.props.locations[e].gps){
                 lat=(this.props.locations[e].gps.split(','))[0];
                 long=(this.props.locations[e].gps.split(','))[1]
               }
                 let data={
                    name : this.props.locations[e].title,
                    lat: lat, 
                    lng: long,
                    id:  Number(this.props.locations[e].id)
                 }
                
             //    alert(res.data[e].id)
             //    alert(res3.data[0].title)
            // markerlist={...markerlist,...data}
           this.state.myMarkers.push(data);
                }else{
                  if(this.props.locations[e].phase==this.props.phase){
                    // this.state.pidd.push(res.data[e].pid)
                     this.setState({loading:'...'})
                     //alert(res.data[e].pid)
                       // alert((res3.data[0].gps.split(','))[0])
                       let lat=0;
                       let long=0;
                       if (this.props.locations[e].gps){
                         lat=(this.props.locations[e].gps.split(','))[0];
                         long=(this.props.locations[e].gps.split(','))[1]
                       }
                         let data={
                            name : this.props.locations[e].title,
                            lat: lat, 
                            lng: long,
                            id:  Number(this.props.locations[e].id)
                         }
                        
                     //    alert(res.data[e].id)
                     //    alert(res3.data[0].title)
                    // markerlist={...markerlist,...data}
                   this.state.myMarkers.push(data);
                        }
                }
            
        })

    



    this.setState( {myMarkers : this.state.myMarkers, loading:''} );
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
            <div>Sites Location {this.props.phase} {this.state.loading}</div>
        <div style={{ height: '100vh', width: '90%' }}>

          <GoogleMapReact
            bootstrapURLKeys={{ 
              key: 'AI zaSyAVT4-Uzdp9LaBGtIFlw7iGEKbPQ8fZxHI',
              key1:'AI zaSyC8wjDwqKGAhfCUmMRJGPYutiKE7aI5Crw',
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