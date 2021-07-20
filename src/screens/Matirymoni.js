import * as React from 'react'
import {View,Text,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';

function Matirymoni(){
    return(
        <View style={{flex:1,marginLeft:38,marginTop:10}}>
            

            <Image source={require('../assets/lovebirds.jpg')}
            style={{width:50,height:50,marginTop:30}} />
            <Text style={{fontSize:25,marginTop:5, fontWeight: 'bold'}}>Kirill</Text>
            <Text style={{fontSize:18,color:`#696969`}}> Sign in to continue</Text>
            <View 
                        style={{flexDirection:"row",height:40,width:300, backgroundColor:`#ffe4c4`,marginTop:70,borderRadius:8}}>

            <TextInput
            placeholder="Mobile Number"
            style={{paddingLeft:15}}
            />
            <AntDesign
            name="check"
            size={13}
            style={{color:"green",marginTop:13,marginLeft:160}}
            />
            </View>

            <Button
          title="Continue"
          buttonStyle={{backgroundColor:`#ff7f50`,marginTop:20,borderRadius:8}}
          containerStyle={{width:300,height:50}}
          
          />
          
            <Button
          title="LOGIN WITH INSTAGRAM"
          buttonStyle={{backgroundColor:`#dc143c`,borderRadius:8}}
      containerStyle={{width:300,height:50,marginTop:190}}
          
          
          />
          
     

<Button
          title="LOGIN WITH FEACBOOK"
          buttonStyle={{backgroundColor:"blue",borderRadius:8}}
          containerStyle={{width:300,height:50,marginTop:10}}
          
          />

           
            <Text style={{color:'#a9a9a9',marginTop:10,fontSize:12,marginLeft:13}}> By continuing you confirm that you agree with our</Text>
            <Text style={{fontSize:14,color:`#696969`,marginLeft:100, marginTop:5}}> Terms & conditions</Text>
       <Text  style={{
    borderBottomColor  : '#a9a9a9',
    borderBottomWidth: 2,marginLeft:120,marginRight:150
  }}>

       </Text>
       
        </View>
    )
};
export default Matirymoni;