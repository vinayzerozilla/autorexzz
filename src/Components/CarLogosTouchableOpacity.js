// import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CarLogosTouchableOpacity = (props) => {
  const navigation = useNavigation();

  const goToCarCondition = async() => {
    const carBrand = props.title;
    await AsyncStorage.setItem('carBrand', carBrand);
    navigation.navigate('CarCondition');
  };

  return (
    <View style={{margin:'1.7%'}}>
      <TouchableOpacity onPress={goToCarCondition}>
        <Image source={props.path}/>
      </TouchableOpacity>
    </View>
  );
};

export default CarLogosTouchableOpacity;
