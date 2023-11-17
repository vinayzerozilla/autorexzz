import React, { useState } from 'react'
import MyStyle from '../style/MyStyle'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../style/Colors'


const TextInputComponent = (props) => {
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
      <Text style={{ fontSize: 14, paddingVertical: 5 }}>{props.textinputlabel}</Text>
      <TextInput
        style={[MyStyle.input, props.customstyles, { fontSize: 14 },focusBorder && shadow]}
        value={props.textvalue}
        onChangeText={props.textsetvalue}
        placeholder={props.placeholder}
        maxLength={props.max}
        minLength={props.min}
        onFocus={ ()=>{setFocusBorder(true)} }
        onBlur={()=>{setFocusBorder(false)}}
        keyboardType={props.keyboardtype}
      >
      </TextInput>
    </View>
  )
}

export default TextInputComponent
