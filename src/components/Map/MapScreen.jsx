import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  useMap,
  Pin,
  Marker
} from '@vis.gl/react-google-maps';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import { getDatabase, ref, get, child} from "firebase/database";
import { Link } from "react-router-dom";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAiVBsRDhp88SCB14EQ35uQZUR07eHgSfc",

  authDomain: "mobilefysbackend.firebaseapp.com",

  databaseURL: "https://mobilefysbackend-default-rtdb.firebaseio.com",

  projectId: "mobilefysbackend",

  storageBucket: "mobilefysbackend.firebasestorage.app",

  messagingSenderId: "737844269607",

  appId: "1:737844269607:web:c39f9bfb5c7163cb86b402"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

function MapScreen() {

let api_loaded = false;
const MapComponent = () => {

  const [api, setApi] = useState(<></>);
  const dbRef = ref(getDatabase());

  const LocationMarker = () => {
    const map = useMap();
    const [marker, setMarker] = useState(<></>);

    useEffect(() => {
      if (!map) return;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            console.log(pos);
            map.setCenter(pos);
            setMarker(<AdvancedMarker position={pos}>
              <img src={require("./images/tracker.png")} width={60} height={60} />
            </AdvancedMarker>);
            
          },
          () => {
            console.log("Location error");
          },
        );
      }
    
    }, [map]);
    return marker;
  }

  useEffect(() => {

    if (!api_loaded)
    {
    get(child(dbRef, `map`)).then((snapshot) => {
      if (snapshot.exists()) {
        setApi(<APIProvider apiKey={snapshot.val()} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
            defaultZoom={19}
            defaultCenter={{lat:0, lng:0}}
            onCameraChanged={ (ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }
        
            mapId ={"886377d5e9f0519b"}></Map>
          <LocationMarker/>
       </APIProvider>
  );
       api_loaded = true;
       console.log("Key successful")

      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  } 

     }, [dbRef]);

     return api;
  }


  
  
  


  return (
<div style={{width: 393, height: 852, position: 'relative', overflow: 'hidden'}}>
  

<MapComponent/>


    {/* Scotty Dog */}
    <img style={{width: 231, height: 153, left: 175, top: 850, position: 'absolute', transform: 'rotate(180deg)',  transformOrigin: 'top left'}} src={require("./images/scottyDogLeft.png")}/>
    <img style={{width: 323, height: 119, left: 35, top: 60, position: 'absolute', overflow: 'hidden', borderRadius: 10}} src={require("./images/timeline.png")}/>
 


  {/* Thistle Button */}
  <Link to="/"><img style={{width: 60, height: 60, left: 173, top: 778, position: 'absolute'}} src={require("./images/Xbttn-1.png")} /></Link>
  


</div>
  );
}

export default MapScreen;