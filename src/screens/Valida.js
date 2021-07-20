import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { Formik } from "formik";
import * as Yup from 'yup';
import { Button } from 'react-native-elements';

const loginSchema = Yup.object().shape({
  email: Yup
    .string()
    .trim()
    .label("Email")
    .email("Invalid email")
    .required('Email is required'),
  password: Yup
    .string()
    .label("Password")
    .required('Password is requied')
    .min(6, "Minimum 6 characters")
    .max(12, "Maximum 12 characters only")
});


function Valida() {

  return (


    <View
      style={{
        flex: 1, backgroundColor: '#BCBEC2',
        marginLeft: 10, marginRight: 10, marginTop: 10 }}>
      <View>
        <Text style={{ marginTop: 20, fontSize: 30, alignSelf: "center" }}>Registion Form</Text>

        <Text style={{
          borderBottomColor: '#64686F',
          borderBottomWidth: 2
        }}>
           <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => {
           }}

          validationSchema={loginSchema}
          v
          
        ></Formik>

        </Text>
        <View
          style={{ flexDirection: "row", marginTop:30 }}>
             <Text style={{marginLeft:10,marginTop:10}}> FIRST NAME </Text>

          <TextInput
            placeholder="first name"
            style={{  marginLeft: 10,paddingLeft: 15,height: 40, width: 230, backgroundColor: `#ffe4c4` }}
          />  

        </View>

        <View
          style={{ flexDirection: "row", marginTop:10 }}>
             <Text style={{marginLeft:10,marginTop:10}}> LAST NAME </Text>

          <TextInput
            placeholder="last name"
            style={{  marginLeft: 15,paddingLeft: 15,height: 40, width: 230, backgroundColor: `#ffe4c4` }}
          />  

        </View>



        <View
          style={{ flexDirection: "row", marginTop:10 }}>
             <Text style={{marginLeft:10,marginTop:10}}> EMAIL </Text>

          <TextInput
            placeholder="email"
            style={{  marginLeft: 50,paddingLeft: 15,height: 40, width: 230, backgroundColor: `#ffe4c4` }}
          />  

        </View>


        <View
          style={{ flexDirection: "row", marginTop:10 }}>
             <Text style={{marginLeft:10,marginTop:10}}> MOBILE </Text>

          <TextInput
            placeholder="Mobile"
            style={{  marginLeft: 40,paddingLeft: 15,height: 40, width: 230, backgroundColor: `#ffe4c4` }}
          />  

        </View>
        <View
          style={{ flexDirection: "row", marginTop:10 }}>
             <Text style={{marginLeft:10,marginTop:10}}> PASSWORD</Text>

          <TextInput
            placeholder="password"
            style={{  marginLeft: 20,paddingLeft: 15,height: 40, width: 230, backgroundColor: `#ffe4c4` }}
          />  

        </View>
        <Text style={{marginLeft:10,marginTop:20}}> CONFIRM</Text>

        <View
          style={{ flexDirection: "row"}}>

             <Text style={{marginLeft:10}}>  PASSWORD </Text>

          <TextInput
            placeholder="confirm password"
            style={{  marginLeft: 10,paddingLeft: 15,height: 40, width: 230, backgroundColor: `#ffe4c4` }}
          />  

        </View>

        <View
          style={{ flexDirection: "row", marginTop:10 }}>
             <Text style={{marginLeft:10,marginTop:10}}> ADDRESS </Text>

          <TextInput
            placeholder="address"
            style={{  marginLeft: 25,paddingLeft: 5,height: 90, width: 235, backgroundColor: `#ffe4c4` }}
          />  

        </View>
        <View style={{marginTop:40,width:150,alignSelf:"center",borderRadius:8}}>
        <Button
          title="SUBMIT"
          buttonStyle={{backgroundColor:`#ff7f50`,marginTop:30,borderRadius:8}}
         containerStyle={{width:30,height:50}}

          />
          </View>
      </View>
      </View>


     )
 };


 export default Valida;





// import React from 'react';
// import { Button, TextInput, View } from 'react-native';
// import { Formik } from 'formik';
//  const

// function Valida({props}){
//   return(
//     <View style={{flex:1}}>
//   <Formik
//     initialValues={{ email: '' }}
//     onSubmit={values => console.log(values)}
//     validationSchema={}
//   >
//     {({ handleChange, handleBlur, handleSubmit, values }) => (
//       <View>
//         <TextInput
//           onChangeText={handleChange('email')}
//           onBlur={handleBlur('email')}
//           value={values.email}
//         />
//         <Button onPress={handleSubmit} title="Submit" />
//       </View>
//     )}
//   </Formik>
//   </View>
//   )
// }

// export default Valida;




