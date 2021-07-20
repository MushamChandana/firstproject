import * as React from 'react'
import {View,Text,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';

function Dateofbirth(){
    return(
        <View style={{flex:1,marginLeft:38,marginTop:10}}>
            

            <Image source={require('../assets/lovebirds.jpg')}
            style={{width:50,height:50,marginTop:30}} />
            <Text style={{fontSize:30,marginTop:5, fontWeight: 'bold'}}>Kirill</Text>
            <Text style={{fontSize:18,color:`#696969`,marginTop:10}}>Date of birth</Text>
           
            <View 
            style={{flexDirection:"row", marginTop:80}}>

           
              <Button
          title="19"
          buttonStyle={{backgroundColor:`#ffe4c4`,borderRadius:8}}
          containerStyle={{width:80,height:50,marginLeft:10}}
          titleStyle={{color:"blue"}}
           />
         
            
               <Button
          title="January"
          buttonStyle={{backgroundColor:`#ffe4c4`,borderRadius:8}}
          containerStyle={{width:120,height:50,marginLeft:10}}
          titleStyle={{color:"blue"}}
          
           />
               <Button
          title="1989"
          buttonStyle={{backgroundColor:`#ffe4c4`,borderRadius:8}}
          containerStyle={{width:90,height:50,marginLeft:10}}
          titleStyle={{color:"blue"}}
           />
           
          
           </View>
         
           <Button
          title="Continue"
          buttonStyle={{backgroundColor:`#ff7f50`,marginTop:70,borderRadius:8}}
          containerStyle={{width:300,height:50}}
          titleStyle={{color:"blue"}}
          />
          
        
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
export default Dateofbirth;