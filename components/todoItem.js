import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

// https://www.youtube.com/watch?v=SGEitne8N-Q&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=10&pp=iAQB


export default function TodoItem({item, pressHandler}){

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})