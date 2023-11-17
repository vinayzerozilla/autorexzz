import React,{useState} from 'react'
import { View,Text, TextInput,Alert } from 'react-native'
import TextInputComponent from '../TextInputComponent'
import DropDownPicker from 'react-native-dropdown-picker';
import MyStyle from '../../style/MyStyle'
const rstateslist = [
    {
        label : 'KA',
        value : 'KA'
    },
    {
        label : 'AP',
        value : 'AP'
    },
    {
        label : 'TN',
        value : 'TN'
    },
    {
        label : 'KL',
        value : 'KL'
    },
    {
        label : 'TL',
        value : 'TL'
    },
    {
        label : 'GA',
        value : 'GA'
    },
]
const Registered = (props) => {
    const [open, setOpen] = useState(false);
    // const [rstate, setRstate] = useState(null)

  return (
    <View>
     <Text style={{fontSize:14, paddingVertical:5}}>Enter Car’s Registration no.</Text>
     <View style={{flexDirection:'row'}}>
     <DropDownPicker
        open={open}
        value={props.value}
        items={rstateslist}
        setOpen={setOpen}
        setValue={props.setvalue}
        listMode='MODAL'
        searchable = {true}
        placeholder="KA"
        placeholderStyle = {MyStyle.placeholderstyle}
        style={[{width:'90%'},MyStyle.input,props.touchedrstate && props.errorrstate && MyStyle.textinputerror]}
        containerStyle = {{width:'25%'}}
        onChangeValue={props.onchange}
      />
       <TextInput 
            style={[MyStyle.input,props.touchedrnumber && props.errorrnumber && MyStyle.textinputerror,{fontSize:14,width:'20%',marginHorizontal:3}]}
            value ={props.rsnumber}
            onChangeText={props.setrsnumber}
            placeholder= "XX"
            maxLength={2}
            minLength={2}
            keyboardType="numeric"
        ></TextInput>
       <TextInput 
            style={[MyStyle.input,props.touchedscode && props.errorscode && MyStyle.textinputerror,{fontSize:14,width:'20%', marginHorizontal:3}]}
            value ={props.scode}
            onChangeText={props.setscode}
            placeholder= "XX"
            maxLength={2}
            minLength={2}
            keyboardType="default"
        ></TextInput>
      <TextInput 
            style={[MyStyle.input,props.touchedregnumber && props.errorregnumber && MyStyle.textinputerror,{fontSize:14,width:'30%', marginHorizontal:3}]}
            value ={props.regnumber}
            onChangeText={props.setregnumber}
            placeholder= "XXXX"
            maxLength={4}
            minLength={4}
            keyboardType="numeric"
        ></TextInput>
       
       </View>
       {props.touchedrstate && props.errorrstate && (
        <Text style={MyStyle.errorcolor}>{props.errorrstate}</Text>
      )}
       {props.touchedrnumber && props.errorrnumber && (
        <Text style={MyStyle.errorcolor}>{props.errorrnumber}</Text>
      )}
       {props.touchedscode && props.errorscode && (
        <Text style={MyStyle.errorcolor}>{props.errorscode}</Text>
      )}
       {props.touchedregnumber && props.errorregnumber && (
        <Text style={MyStyle.errorcolor}>{props.errorregnumber}</Text>
      )}
    
    </View>
  )
}

export default Registered
