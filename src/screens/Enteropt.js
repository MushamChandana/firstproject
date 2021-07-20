import * as React from 'react'
import {View,Text,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';

function Enterotp(){
    return(
        <View style={{flex:1,marginLeft:38,marginTop:10}}>
             <Image source={require('../assets/lovebirds.jpg')}
            style={{width:50,height:50,marginTop:30}} />
            <Text style={{fontSize:30,marginTop:5, fontWeight: 'bold'}}>Kirill</Text>
            <Text style={{fontSize:18,color:`#696969`,marginTop:10}}>Enter OTP</Text>
            <View 
            style={{flexDirection:"row", marginTop:80}}>

            
              <Button
          title="1"
          buttonStyle={{backgroundColor:`#ffe4c4`}}
          containerStyle={{width:50,height:50,marginLeft:20}}
          titleStyle={{color:"blue"}}
           />
               <Button
          title="2"
          buttonStyle={{backgroundColor:`#ffe4c4`}}
          containerStyle={{width:50,height:50,marginLeft:20}}
          titleStyle={{color:"blue"}}
          
           />
               <Button
          title="7"
          buttonStyle={{backgroundColor:`#ffe4c4`}}
          containerStyle={{width:50,height:50,marginLeft:20}}
          titleStyle={{color:"blue"}}
           />
               <Button
          title="8"
          buttonStyle={{backgroundColor:`#ffe4c4`}}
          containerStyle={{width:50,height:50,marginLeft:20}}
          titleStyle={{color:"blue"}}
           />
           </View>
           <View style={{marginTop:90,marginRight:30}}>
           <Text style={{fontSize:12,color:`#6495ed`,alignSelf:"center"}}>
               Code sent to your moblie number
           </Text>
           <Text style={{fontSize:12,color:`#6495ed`,alignSelf:"center"}}>
               ends with *****4142</Text>
           <Text style={{fontSize:12,color:`#6495ed`,alignSelf:"center",marginTop:25}}>
               This code will expire in 10 minutes
           </Text>
           <Text style={{fontSize:12,color:`#dc143c`,alignSelf:"center",marginTop:25}}>
               Resend Code
           </Text>
      
           
           </View>
        
 <Text style={{color:'#a9a9a9',marginTop:280,fontSize:12,marginLeft:13}}> By continuing you confirm that you agree with our</Text>
            <Text style={{fontSize:14,color:`#696969`,marginLeft:100, marginTop:5}}> Terms & conditions</Text>
       <Text  style={{
    borderBottomColor  : '#a9a9a9',
    borderBottomWidth: 3,marginLeft:120,marginRight:150
  }}>
 </Text>
       
       
        </View>
    )
};
export default Enterotp;