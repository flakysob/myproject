import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';


// https://www.youtube.com/watch?v=uLHFPt9B2Os&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=10

export default function App() {

  const [todos, setTodos] = useState([
    {text:'aaa', key:'1'},
    {text:'bbb', key:'2'},
    {text:'ccc', key:'3'},
    {text:'ddd', key:'4'},
  ]);

// () => () means return jsx


  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={( { item } ) => (
              <Text> {item.text}</Text>
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
  },
  list: {
    marginTop: 20,
    backgroundColor: '#777',
  },

});
