import React,{useEffect} from 'react';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Navigation from './src/Navigation/Navigation';
import { Appearance } from 'react-native';
function App() {
  useEffect(()=>{
    Appearance.setColorScheme('light')
  })
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
      
  );
}
export default App;
