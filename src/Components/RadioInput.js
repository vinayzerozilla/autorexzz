import React,{useState} from 'react'
import { View , Text, StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Colors } from '../style/Colors';

const RadioInput = (props) => {
    const [checked, setChecked] = useState('');
    const handleRadioPress = () => {
      setChecked(props.name); 
      props.onSelect(props.name); 
    };
  return (
    <View style={[radioinputstyles.radioinput, props.radioinputstyle]}>
        <Text style={[{fontSize:16, color:Colors.gray_800},props.radioinputtextstyle]}>{props.name}</Text>
       <RadioButton 
       style={[props.style]}
        value={props.name}
        status={ checked === props.name ? 'checked' : 'unchecked' }
        onPress={handleRadioPress}
      />
      
    </View>
  )
}

const radioinputstyles = StyleSheet.create({
  radioinput : {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,  
    borderColor: Colors.gray_300, 
    marginVertical:10, 
    borderRadius: 8,
    justifyContent:'space-between'
  }
})
export default RadioInput
