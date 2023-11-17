import React,{useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import GetLocation from 'react-native-get-location';


const Maps = () => {
    const [liveLocation, setLiveLocation] = useState()
    useEffect(() => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
        .then(location => {
            console.log(location);
            setLiveLocation(location)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    },[])
  return (
    <View style={styles.container}>
        {liveLocation && 
        <MapView
        provider={PROVIDER_GOOGLE}
         style={styles.map}
         
         region={{
           latitude: liveLocation.latitude,
           longitude:  liveLocation.longitude,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView> }
    
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
     flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
export default Maps
