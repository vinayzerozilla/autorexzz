import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MyStyle from './../../style/MyStyle';
import Button from './../../Components/Button';
import treatmentdata from './../../assets/Staticdata/Treatmentdata.json';
import { StyleSheet } from 'react-native';
import { Colors } from '../../style/Colors';

const Treatment = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState();
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setData(treatmentdata);
  }, []);

  const handleCheckboxChange = (id) => {
    setChecked(!checked);
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const navigation = useNavigation();

  const ConfirmDetails = () => {
    if (selected.length >= 1) {
      navigation.navigate('ConfirmDetails');
      console.log(selected);
    } else {
      setError('Values are required');
    }
  };
  return (
    <SafeAreaView style = {[MyStyle.container,{position:'relative', height:'100%', paddingBottom:'20%'}]}>
      <Text>Select The Treatment</Text>
        <ScrollView>
      {data && data.map((values) => {
        const isSelected = selected.includes(values.id);
        
        return (
            
          <View key={values.id}>
            <View style={[MyStyle.input, { flexDirection: 'row', marginVertical: 6, justifyContent: 'space-between', alignItems: 'center',borderColor:Colors.gray_300, paddingVertical:5 }]}>
              <Text style={{ fontSize: 16, color: Colors.gray_800}}>{values.name}</Text>
              <Checkbox
                color= {Colors.foundation_primary}
                status={isSelected ? 'checked' : 'unchecked'}
                onPress={() => handleCheckboxChange(values.id)}
              />
            </View>

            {isSelected  && (
              <View style={{ paddingVertical: 2, marginHorizontal: 5 }}>
                <View style={treatmentstyle.treatment}>
                  <Text style={treatmentstyle.treatment_firsttext}>Code :</Text>
                  <Text style={treatmentstyle.treatment_secondtext}>{values.code}</Text>
                </View>
                <View style={treatmentstyle.treatment}>
                  <Text style={treatmentstyle.treatment_firsttext}>Basic_Cost :</Text>
                  <Text style={treatmentstyle.treatment_secondtext}>{values.Basic_Cost}</Text>
                </View>
                <View style={treatmentstyle.treatment}>
                  <Text style={treatmentstyle.treatment_firsttext}>Total Cost:</Text>
                  <Text style={treatmentstyle.treatment_secondtext}>{values.Total_Cost}</Text>
                </View>
                <View style={treatmentstyle.treatment}>
                  <Text style={treatmentstyle.treatment_firsttext}>GST :</Text>
                  <Text style={treatmentstyle.treatment_secondtext}>{values.GST}</Text>
                </View>
              </View>
            )}
            
          </View>
         
        );
        
      })}
       </ScrollView>
       {error && <Text>Select Atleast one Treatment</Text>}
       <Button buttonname="Next" function = {ConfirmDetails} custombuttonstyle={{position:'absolute',bottom:30, width:'100%'}} />
    </SafeAreaView>
  );
};
const treatmentstyle = StyleSheet.create({
  treatment : {
    justifyContent: 'flex-start', 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  treatment_firsttext:{
    color: Colors.gray_500, 
    fontSize: 12 
  },
  treatment_firsttext:{
    color:Colors.gray_700,
    fontSize:12
  }
  
})
export default Treatment;