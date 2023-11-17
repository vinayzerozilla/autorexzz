import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text} from 'react-native';
import MyStyle from '../style/MyStyle';

const DropDownComponent = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Text style={[{fontSize:14, paddingVertical:5}]}>{props.label}</Text>
      <DropDownPicker
        open={open}
        value={props.value}
        items={props.dropdownitems}
        setOpen={setOpen}
        setValue={props.setValue}
        placeholder={props.placeholder}
        placeholderStyle = {MyStyle.placeholderstyle}
        style={[MyStyle.input,props.dropdownstyle]}
        zIndex={1000}
        searchable={true}
        listMode='MODAL'
        onChangeValue={props.onchange}
      />
    </View>
  );
}

export default DropDownComponent;
