import * as React from 'react';
import { Image, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';

const device_height = Dimensions.get(`window`).height - 24

function Lineargra() {
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={{ height: device_height }}>
          <LinearGradient colors={['#051937', '#002961', '#00388e', '#0047bc', '#1254eb']} 
          style={styles.linearGradient}>
          
            <Text style={styles.buttonText}>
              SIGN UP
        </Text>
            <View
              style={{
                flex: 0.7,
                backgroundColor: "white",
                marginLeft: 20,marginRight:20,marginTop:10,
                borderBottomEndRadius: 40,
                borderBottomStartRadius: 180,
                borderTopEndRadius: 40,
                borderTopStartRadius: 40
              }}>
              <View>
                <Text style={{ marginTop: 20, marginLeft: 30, fontSize: 15 }}>NAME</Text>
              </View>

              <View style={{ marginLeft: 30, flexDirection: 'row' }}>

                <MaterialCommunityIcons
                  name="account-outline" color={'#696969'} size={26} style={{ marginTop: 10 }} />
                <TextInput
                  style={{
                    borderBottomColor: '#a9a9a9',
                    marginRight: 50
                  }}>
                </TextInput>
              </View>

              <View style={{ height: 2, width: 280, backgroundColor: "grey", marginLeft: 30 }}></View>

              <View>
                <Text style={{ marginTop: 20, marginLeft: 30, fontSize: 15 }}>EMAIL</Text>
              </View>

              <View style={{ marginLeft: 30, flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="email-outline" color={'#696969'} size={26} style={{ marginTop: 10 }} />
                <TextInput
                  style={{
                    borderBottomColor: '#a9a9a9',

                  }}>

                </TextInput>
              </View>
              <View style={{ height: 2, width: 280, backgroundColor: "grey", marginLeft: 30 }}></View>
              <View>
                <Text style={{ marginTop: 20, marginLeft: 30, fontSize: 15 }}>PASSWORD</Text>
              </View>

              <View style={{ marginLeft: 30, flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="lock-outline" color={'#696969'} size={26} style={{ marginTop: 10 }} />
                <TextInput
                  style={{
                    borderBottomColor: '#a9a9a9',

                  }}>

                </TextInput>

              </View>

              <View style={{ height: 2, width: 280, backgroundColor: "grey", marginLeft: 30 }}></View>

              <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons
                  name="check-box-outline" color={'#780664'} size={26} style={{ marginTop: 10 ,marginLeft:30}} />
                 
                 <Text style={{fontSize:15,marginTop:13}}>Agree to our</Text>
                 <Text style={{fontSize:15,marginTop:13,color:'#780664'}}>Terms & Conditions</Text>
              </View>
              
            </View>
            <View
              style={{
                flex: 0.22,
                backgroundColor: "white",
                marginLeft: 30,marginTop:10,marginRight:15,
                borderBottomEndRadius: 40,
                borderBottomStartRadius: 40,
                borderTopEndRadius: 180,
                borderTopStartRadius: 40
              }}>
                <Text style={{fontSize:20,alignSelf:"center",marginTop:20}}>OR </Text>
                <Text style={{fontSize:20,alignSelf:"center"}}>Sign Up With Social Media </Text>
                <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-evenly",width:150,  alignSelf:"center"}}>
                <MaterialCommunityIcons
                  name="facebook" color={'#051871'} size={35} />
                   
                   <FontAwesome
                  name="google-plus-official" color={'#A6080F'} size={35}  />
                    
                    
                   <Entypo
                  name="twitter-with-circle" color={'#4C7FF2'} size={35} />
                </View>
              </View>


          </LinearGradient>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  buttonText: {
    fontSize: 15, alignSelf: "center", color: "white", marginTop: 20
  }
});

export default Lineargra;








