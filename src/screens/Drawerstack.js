import * as React from 'react';
import {View,Text,Button} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function Drawerstack(){
  return(
 <View style={{flex:1}}>
   <View style={{ flexDirection:"row", backgroundColor:"blue",height:60 }}> 
   <Entypo
   name="menu"
   size={30}

   style={{color:"white",marginTop:15}}
   />
   <Text style={{color:"white",marginTop:15,fontSize:20,marginLeft:10 }}> Home</Text>
   <Entypo
   name="dots-three-vertical"
   size={20}

   style={{color:"white",marginLeft:260,marginTop:20}}
   />
   </View>
 </View>
  );
}
export default Drawerstack;