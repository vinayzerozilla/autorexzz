import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView , ScrollView} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import MyStyle from '../style/MyStyle';
import Button from '../Components/Button'
import treatmentdata from '../assets/Staticdata/Treatmentdata.json';
import { Colors } from '../style/Colors';

const CheckBoxComponent = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setData(treatmentdata);
  }, []);

  const handleCheckboxChange = (id) => {
    setChecked(id);
    setSelected([...new Set([...selected, id])]);
   
  };
  const navigation = useNavigation();
  const ConfirmDetails = () => {
    navigation.navigate('ConfirmDetails')
    console.log(selected)
  } 
  return (
    <SafeAreaView style = {[MyStyle.container,{position:'relative', height:'100%', paddingBottom:'20%'}]}>
        <ScrollView>
      {data && data.map((values) => {
        const isSelected = selected.includes(values.id);

        return (
            
          <View key={values.id}>
            <View style={[MyStyle.input, { flexDirection: 'row', marginVertical: 6, justifyContent: 'space-between', alignItems: 'center' }]}>
              <Text style={{ fontSize: 16, color:Colors.gray_800 }}>{values.name}</Text>
              <Checkbox
                color={Colors.primary}
                status={isSelected ? 'checked' : 'unchecked'}
                onPress={() => handleCheckboxChange(values.id)}
              />
            </View>

            {isSelected && (
              <View style={{ paddingVertical: 2, marginHorizontal: 5 }}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color:Colors.gray_700, fontSize: 12 }}>Code :</Text>
                  <Text style={{ fontSize: 12, color:Colors.gray_700}}>{values.code}</Text>
                </View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{  color:Colors.gray_700, fontSize: 12 }}>Basic_Cost :</Text>
                  <Text style={{ fontSize: 12,  color:Colors.gray_700}}>{values.Basic_Cost}</Text>
                </View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color:Colors.gray_700, fontSize: 12 }}>Total Cost:</Text>
                  <Text style={{ fontSize: 12,  color:Colors.gray_700 }}>{values.Total_Cost}</Text>
                </View>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color:Colors.gray_700, fontSize: 12 }}>GST :</Text>
                  <Text style={{ fontSize: 12, color:Colors.gray_700 }}>{values.GST}</Text>
                </View>
              </View>
            )}
          </View>
         
        );
      })}
       </ScrollView>
       <Button buttonname="Next" function = {ConfirmDetails} custombuttonstyle={{position:'absolute',bottom:30, width:'100%'}} />
    </SafeAreaView>
  );
};

export default CheckBoxComponent;