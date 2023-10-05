import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

// https://www.youtube.com/watch?v=SGEitne8N-Q&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=10&pp=iAQB

export default function App() {

  const [todos, setTodos] = useState([
    {text:'aaa', key:'1'},
    {text:'bbb', key:'2'},
    {text:'ccc', key:'3'},
    {text:'ddd', key:'4'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>

        <AddTodo submitHandler={submitHandler}/>
        
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
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
  }
});
