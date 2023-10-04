import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//https://www.youtube.com/watch?v=iMCM1NceGJY&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=7
export default function App() {

  const [people, setPeople] = useState([
    {name:'aaa',id:'1'},
    {name:'bbb',id:'2'},
    {name:'ccc',id:'3'},
    {name:'ddd',id:'4'},
    {name:'eee',id:'5'},
    {name:'fff',id:'6'},
    {name:'ggg',id:'7'},
    {name:'hhh',id:'8'},
    {name:'iii',id:'9'},
    {name:'jjj',id:'10'},
    {name:'aaa',id:'11'},
    {name:'bbb',id:'12'},
    {name:'ccc',id:'13'},
    {name:'ddd',id:'14'},
    {name:'eee',id:'15'},
    {name:'fff',id:'16'},
    {name:'ggg',id:'17'},
    {name:'hhh',id:'18'},
    {name:'iii',id:'19'},
    {name:'jjj',id:'20'},

  ]);

  return (
    <View style={styles.container}>
      
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}> {item.name} </Text>
        )}
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
