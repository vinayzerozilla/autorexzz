import React from 'react'
import TextInputComponent from '../TextInputComponent'
import {Text} from 'react-native'
import MyStyle from '../../style/MyStyle'

const UnRegistered = (props) => {
  return (
    <>
    <TextInputComponent textinputlabel = "Enter Car’s VIN no." value={props.vin} textsetvalue = {props.setvin} keyboardtype = "numeric" placeholder="Enter Car’s VIN no." customstyles ={props.touchedvin && props.errorvin && MyStyle.textinputerror}/>
    {props.touchedvin && props.errorvin && (
      <Text style={MyStyle.errorcolor} >{props.errorvin}</Text>
    )}
    </>
  )
}

export default UnRegistered
