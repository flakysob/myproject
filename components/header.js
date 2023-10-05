import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

// https://www.youtube.com/watch?v=uLHFPt9B2Os&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=10


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});