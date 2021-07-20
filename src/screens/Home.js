import * as React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';





function Home({navigation}){
  return(
    // <Icon style={ name="heartbeat"color="#00aced"} />

    <View style={{flex:1,backgroundColor:"#ff7f50"}}>
      <Text style={styles.text}> heartlink</Text>
      <Button
        title="SIGN UP"
        buttonStyle={{backgroundColor:"#ff7f50",borderRadius:20,borderColor:"white"}}
        containerStyle={{width:250,height:40,marginTop:40,alignSelf:"center",color:"white"}}
        onPress={()=>navigation.navigate('Profile')}
        
      >

      </Button>

      <Button
        title="LOGIN"
        buttonStyle={{backgroundColor:"white"}}
        containerStyle={{width:280,height:40,marginTop:20,alignSelf:"center",borderRadius:20}}
        onPress={()=>navigation.navigate('Albam')}
        titleStyle={{color:"#ff7f50"}}
        
      >

      </Button>


    </View>
  );
}
const styles=StyleSheet.create({
  text:{color:"white",alignSelf:"center",marginTop:150,fontSize:40,marginBottom:100}
  
});
export default Home
