import * as React from 'react';
import{View,Text,image} from 'react-native';
import {Button} from 'react-native-elements';

function Albam({navigation}){
    return(
      <View style={{flex:1}}>
          <Text style={{alignSelf:"center"}}> HOME PAGE</Text>
          <Button
          title="chandana"
          buttonStyle={{backgroundColor:"red",marginTop:10}}
          containerStyle={{width:150,alignSelf:"center"}}  
          onPress={()=>navigation.navigate('Profile')}
          />
      </View>  
    )
}
export default Albam;