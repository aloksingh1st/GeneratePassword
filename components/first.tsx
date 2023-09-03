import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import React, { Component, useState } from "react";
import { CheckBox } from "react-native-elements";
import AlertBox from "./AlertBox";

export default function first() {
  const [text, setText] = useState(0);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isLowecase, setIsLowecase] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [password, setPassword] = useState(null);

  const handleInputChange = (newText) => {
    setText(newText);
  };

  const handleButtonPress = () => {
    console.log("Input Text:", text);
    const ps = generateRandomString(isSymbols, isUppercase, isLowecase, isNumbers, text);
    setPassword(ps);
  };

  const toggleCheckBox = (val) => {
    if(val == "isLowecase"){
        setIsLowecase(!isLowecase);
    }
    else if(val == "isUppercase"){
        setIsUppercase(!isUppercase);
    }
    else if(val == "isSymbols"){
        setIsSymbols(!isSymbols);
    }
    else{
        setIsNumbers(!isNumbers);
    }
  };



  function generateRandomString(includeSymbols, includeUppercase, includeLowercase, includeNumbers, length = 10) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let characters = '';
  
    if (includeUppercase) {
      characters += uppercaseChars;
    }
    if (includeLowercase) {
      characters += lowercaseChars;
    }
    if (includeNumbers) {
      characters += numericChars;
    }
    if (includeSymbols) {
      characters += symbolChars;
    }
  
    if (characters === '') {
      throw new Error('At least one character type must be included.');
    }
  
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
  }
  
  

  {
    return (
      <>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Password Generator</Text>
        </View>
        <View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={{ padding: 30 }}>Enter Password Length</Text>

            <TextInput
              placeholder="Type something..."
              onChangeText={handleInputChange}
              keyboardAppearance="dark"
              keyboardType="numeric"
              value={text}
            />
          </View>

          <View>
            <CheckBox
              title="Includes Lowecase"
              checked={isLowecase}
              onPress={() => toggleCheckBox("isLowecase")}
            />
          </View>

          <View>
            <CheckBox
              title="Includes Uppercase"
              checked={isUppercase}
              onPress={(e) => toggleCheckBox("isUppercase")} //
            />
          </View>

          <View>
            <CheckBox
              title="Include Numbers"
              checked={isNumbers}
              onPress={(e) => toggleCheckBox("isNumbers")}
            />
          </View>

          <View>
            <CheckBox
              title="Include Symbols"
              checked={isSymbols}
              onPress={(e) => toggleCheckBox("isSymbols")}
            />
          </View>

          <View style={{flex:1, flexDirection:"row", width:"100%", alignItems:"center"}}>

          <Button title="Generate" onPress={handleButtonPress} />
          <Button title="Reset" onPress={()=>{
            setPassword(null);
            setIsLowecase(false);
            setIsNumbers(false);
            setIsUppercase(false);
            setIsSymbols(false);
            setText(1)
          }} />

          </View>
        </View>


        <View>
          {
            password ? 
            <AlertBox password={password}/> : null
          }
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headingContainer: {
    paddingTop: 40,
  },
  heading: {
    fontSize: 35,
  },
});
