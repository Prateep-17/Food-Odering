import { PermissionsAndroid, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'

export default function Login({navigation} :any) {
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Cool Photo App Camera Permission',
              message:
                'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the location');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      };
      requestCameraPermission()
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Username</Text>
        <TextInput
        style={styles.input}
        onChangeText={setuserName}
        value={userName}/>
        <Text style={styles.label}>Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={setpassword}
        value={password}/>
        <Button name="LOGIN" onPress={()=>navigation.navigate("Home")}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"blue",
        justifyContent:'center',
        marginHorizontal:10
    },
    label:{
        fontSize:16,
        textAlign:'center',
        marginBottom:15
    },
    input:{
        borderWidth:1,
        borderColor:"#000",
        padding:10,
        marginBottom:30,
        borderRadius:50
    }
})