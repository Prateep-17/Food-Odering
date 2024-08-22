import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonProps = {
    name :String,
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

const Button = ({name, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius:20
    },
    text:{
        fontSize:20,
        fontWeight:'500',
        color:"#fff"
    }
})