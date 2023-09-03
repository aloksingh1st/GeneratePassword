import { StyleSheet, Text, View,TouchableOpacity, Clipboard, ToastAndroid } from 'react-native'
import React from 'react'

const AlertBox = ({password}) => {

    const handleCopyText = () => {
        const textToCopy = password; // Replace with the text you want to copy
        Clipboard.setString(textToCopy);
    
        // Provide feedback to the user (optional)
        ToastAndroid.show('Text copied to clipboard', ToastAndroid.SHORT);
      };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{password}</Text>
      <TouchableOpacity onPress={handleCopyText}>
        <Text>Click to Copy Text</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AlertBox

const styles = StyleSheet.create({
    container :{
        marginTop :40,
        padding:50,
        marginHorizontal:10,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"black",
        borderWidth : 2
    }
})