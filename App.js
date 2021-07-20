import * as React from 'react';
import {View,Image,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Drawerstack from './src/screens/Drawerstack';
import Scroll from './src/screens/Scroll';
import Valida from './src/screens/Valida';
import Lineargra from './src/screens/Lineargra';
import Drawernav from './src/screens/Drawernav';
import Playvideo from './src/screens/playVideo/Playvideo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerView(){
  return(
    <Drawer.Navigator
    drawerContent={props=><Scroll{...props}/>}>
    <Drawer.Screen name="Drawerstack" component={Drawerstack} 
     options={{ headerShown: false }}  />
  </Drawer.Navigator>
  );
}
function App(){
  return(
    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen name="Playvideo" component={Playvideo} 
    options={{ headerShown: false }}  />
    <Stack.Screen name="Drawernav" component={Drawernav} 
    options={{ headerShown: false }}  />
    <Stack.Screen name=" Valida" component={ Valida} 
    options={{ headerShown: false }}  />
    
   
    <Stack.Screen name="Drawerstack" component={DrawerView} 
    options={{ headerShown: false }}  />
    

    
  </Stack.Navigator>
  </NavigationContainer>
);
}
 export default App;



  
















                                                                                                                                                      