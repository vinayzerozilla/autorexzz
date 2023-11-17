import { StyleSheet } from 'react-native';
import { Dimensions} from 'react-native'
import { Colors } from './Colors';

const MyStyle = StyleSheet.create({
deviceheight : Dimensions.get('window').height,
devicewidth : Dimensions.get('window').width,
  container: {
    margin : 15,
  },
  input : {
    borderWidth: 1,
    borderColor: Colors.gray_300, 
    paddingHorizontal: 10,
    backgroundColor:'white',
    borderRadius:8,
  },
  placeholderstyle  : {
    fontSize:14,
    paddingVertical:5
  },
  activityindicator : {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    bottom: 0, 
    left: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    // ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    zIndex: 999,
  },
  errorcolor : {
    color:Colors.primary
  },
  textinputerror : {
    borderColor:Colors.primary,
    borderWidth:1,
  },
  textfontsize:{
    fontSize:16
  },
  radiobuttonborder : {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    borderWidth: 1,
     borderColor: Colors.gray_300, 
     borderRadius: 8, 
     paddingVertical: 10, 
     paddingHorizontal: 16,
    color:Colors.gray_300
  },
  textcolor: {
    fontSize:16,
    color:'#1D2939'
  },
  textinputstyle: {
    borderWidth: 1,
    borderColor: Colors.gray_300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  margintop:{
    marginTop:'40%',
  },
  servicereport:{
    justifyContent:'space-between', 
    alignItems:'center', 
    color:Colors.gray_400, 
    flexDirection:'row',
    backgroundColor:'white', 
    padding:10,
    borderBottomColor:Colors.gray_400, 
    borderBottomWidth:1
  },
  servicereporttext1:{
    color:Colors.gray_600,
    fontWeight:'400',
    fontSize:16
  },
  servicereporttext2:{
    color:Colors.gray_800,
    fontWeight:'bold', 
    fontSize:16
  },
  toptabs:{
    flexDirection: 'row',
    height: 55,
    backgroundColor:'transparent',
    marginHorizontal:15,
    marginVertical:8
  },
 tab:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 23.5,
 
  margin: 4,
 }
});

export default MyStyle;


