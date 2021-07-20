import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native'
import { Formik } from "formik";
import * as Yup from 'yup';
import { Button, Input } from 'react-native-elements';

const device_height = Dimensions.get(`window`).height - 24

const loginSchema = Yup.object().shape({
    firstname: Yup
        .string()
        .label("firstname")
        .required('Enter your firstname')
        .min(4, "Minimum 4 characters"),
    lastname: Yup
        .string()
        .label("lastname")
        .required('Enter your  lastname')
        .min(4, "Minimum 4 characters"),
    email: Yup
        .string()
        .trim()
        .label("Email")
        .email("Invalid email")
        .required('Email is required'),
    mobile: Yup
        .string()
        .required('Mobile number is required')
        .label('Mobile')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(10, 'Mobile number is not valid'),
    password: Yup
        .string()
        .label("Password")
        .min(6, "Minimum 6 characters")
        .max(12, "Maximum 12 characters only")
        .required('Password is required'),
    confirmPassword: Yup
        .string()
        .label("Confirm Password") 
        .test("passwords-match", "Password did not match", function (value) {
            return this.parent.password === value})
        .required('Confirm password is required'),
    address: Yup
        .string()
        .trim()
        .label("address")
        //.email("Invalid email")
        .required('Enter your address details')
        .min(20, "Minimum 20 characters"),
});

// handleLogin=(values) =>{

// }
function Valida() {
    return (
        <KeyboardAvoidingView
            behavior="height"
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View style={{ height: device_height }} >
                    <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold',marginTop:10 }}>ff</Text>
                    <View style={{ flex: 1, width: 300, alignSelf: 'center' }}>

                        <Formik
                            initialValues={{ firstname: "", lastname: "", email: "", mobile: "", 
                            password: "", confirmPassword: "", address: "" }}
                            onSubmit={(values, actions) => { }}
                              validationSchema={loginSchema}


                        >
                            {formikProps => (
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 0.4, marginTop: 10 }}>

                                        <Input
                                            placeholder='Firstname'
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, marginTop: 10 }}
                                            onChangeText={formikProps.handleChange("firstname")}
                                            onBlur={formikProps.handleBlur("firstname")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>{formikProps.touched.firstname && formikProps.errors.firstname}</Text>
                                    </View>
                                    <View style={{ flex: 0.4, marginTop: 30 }}>

                                        <Input
                                            placeholder='LastName'
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, marginTop: 10 }}
                                            onChangeText={formikProps.handleChange("lastname")}
                                            onBlur={formikProps.handleBlur("lastname")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>{formikProps.touched.lastname && formikProps.errors.lastname}</Text>

                                    </View>
                                    <View style={{ flex: 0.4, marginTop: 30 }}>
                                        <Input
                                            placeholder='email'
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, marginTop: 10 }}
                                            onChangeText={formikProps.handleChange("email")}
                                            onBlur={formikProps.handleBlur("email")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>{formikProps.touched.email && formikProps.errors.email}</Text>
                                    </View>

                                    <View style={{ flex: 0.4, marginTop: 30 }}>

                                        <Input
                                            placeholder='Mobile '
                                            keyboardType='number-pad'
                                            // maxLength={11}
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, marginTop: 10 }}
                                            onChangeText={formikProps.handleChange("mobile")}
                                            onBlur={formikProps.handleBlur("mobile")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>{formikProps.touched.mobile && formikProps.errors.mobile}</Text>

                                    </View>
                                    <View style={{ flex: 0.4, marginTop: 40 }}>
                                        <Input
                                            placeholder='Password'
                                            //secureTextEntry={true}
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1 }}
                                            onChangeText={formikProps.handleChange("password")}
                                            onBlur={formikProps.handleBlur("password")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>{formikProps.touched.password && formikProps.errors.password}</Text>

                                    </View>
                                    <View style={{ flex: 0.4, marginTop: 30 }}>

                                        <Input
                                            placeholder='Confirm password'
                                            //secureTextEntry={true}
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, marginTop: 10 }}
                                            onChangeText={formikProps.handleChange(" confirmPassword")}
                                            onBlur={formikProps.handleBlur(" confirmPassword")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>
                                            {formikProps.touched.confirmPassword && formikProps.errors.confirmPassword}</Text>

                                    </View>

                                    <View style={{ flex: 0.4, marginTop: 30 }}>

                                        <Input
                                            placeholder='address'
                                            inputContainerStyle={{ width: 300, alignSelf: 'center', borderColor: '#ccc', borderWidth: 1, marginTop: 10 }}
                                            onChangeText={formikProps.handleChange("address")}
                                            onBlur={formikProps.handleBlur("address")}
                                        />
                                        <Text style={{ color: 'red', marginTop: -15 }}>{formikProps.touched.address && formikProps.errors.address}</Text>
                                    </View>

                                    <View style={{ flex: 1 }}>
                                        {formikProps.isSubmitting ? (
                                            <ActivityIndicator size="large"
                                                style={{ alignSelf: 'center' }} />
                                        ) : (
                                            <Button
                                                title='Login'
                                                buttonStyle={{ width: 300, alignSelf: 'center', marginTop: 50 }}
                                                onPress={formikProps.handleSubmit}
                                            />
                                        )}
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Valida;