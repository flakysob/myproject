import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
//https://www.youtube.com/watch?v=QhX25YGf8qg&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=8

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
    {name:'kkk',id:'11'},
    {name:'lll',id:'12'},
    {name:'mmm',id:'13'},
    {name:'nnn',id:'14'},
    {name:'ooo',id:'15'},
    {name:'ppp',id:'16'},
    {name:'rrr',id:'17'},
    {name:'sss',id:'18'},
    {name:'ttt',id:'19'},
    {name:'uuu',id:'20'},

  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
       return prevPeople.filter(person => person.id != id);
      })
  }

  return (
    <View style={styles.container}>
      <FlatList
        // numColumns={1}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {pressHandler(item.id)}}>
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
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
