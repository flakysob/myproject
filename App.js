import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// https://www.youtube.com/watch?v=W-pg1r6-T0g&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=6
export default function App() {

  const [people, setPeople] = useState([
    {name:'aaa', key:'1'},
    {name:'bbb', key:'2'},
    {name:'ccc', key:'3'},
    {name:'ddd', key:'4'},
    {name:'eee', key:'5'},
    {name:'fff', key:'6'},
    {name:'ggg', key:'7'},
    {name:'hhh', key:'8'},
    {name:'iii', key:'9'},
    {name:'jjj', key:'10'},
    {name:'aaa', key:'11'},
    {name:'bbb', key:'12'},
    {name:'ccc', key:'13'},
    {name:'ddd', key:'14'},
    {name:'eee', key:'15'},
    {name:'fff', key:'16'},
    {name:'ggg', key:'17'},
    {name:'hhh', key:'18'},
    {name:'iii', key:'19'},
    {name:'jjj', key:'20'},

  ]);

  return (
    <View style={styles.container}>
      

      {/* <ScrollView>
      {people.map((item)=>{
        return(
          <View key={item.key}>
            <Text style={styles.item}>{item.key} - {item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
      {/* These are doing exactly same thing!!!! */}
      <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.key} - {item.name}</Text>
          </View>
      ))}
      </ScrollView>
      

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
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
