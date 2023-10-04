import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name,setName] = useState('John Doe');
  const [age,setAge] = useState('30');

  return (
    <View style={styles.container}>
      
      <Text style={styles.explainText}>Enter your name</Text>
      <TextInput
        style={styles.input}
        multiline
        keyboardType='default'
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}
      />
      <Text style={styles.explainText}>Enter your age</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='e.g. 30'
        onChangeText={(val) => setAge(val)}
      />

      <Text>Your name is {name}, age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
    fontSize: 17,
    fontWeight: 'bold',
  },
  explainText:{
    fontWeight: 'bold',
    fontSize: 20,
    
  },
});
