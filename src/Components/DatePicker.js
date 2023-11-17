import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MyStyle from '../style/MyStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../style/Colors';
import moment from 'moment'

export default function DatePicker(props) {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [focusBorder, setFocusBorder] = useState(false)
  const shadow = {
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    shadowOpacity: 1,
    elevation: 4,
    }
  return (
    <View>
      <Text style={{ fontSize: 14 }}>{props.datepickerlabel}</Text>
      <View style={[MyStyle.input,props.styles, focusBorder && shadow,{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <TextInput
          value={props.values}
          placeholder={props.placeholder}
          onFocus={ ()=>{setFocusBorder(true)} }
          onBlur={()=>{setFocusBorder(false)}}
         
        />
        <TouchableOpacity onPress={() =>{setDatePickerVisibility(true), console.log(isDatePickerVisible)}}>
          <Entypo name="calendar" size={18} />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={props.onconfirm}
        
        onCancel={() => setDatePickerVisibility(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    padding: 10,
  },
});