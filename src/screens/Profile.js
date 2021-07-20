import * as React from 'react';
import{View,Text,image} from 'react-native';
import {Button} from 'react-native-elements';

function Profile({navigation}){
    return(
      <View style={{flex:1}}>
          <Text style={{alignSelf:"center",marginTop:150,fontSize:20}}> WELCOME</Text>
          <Button
            title="tq for sign in"

          buttonStyle={{backgroundColor:"red",marginTop:50}}
          containerStyle={{width:150,alignSelf:"center"}}
          // onPress={()=>navigation.navigate('Albam')}
          />
      </View>  
    )
}
export default Profile;