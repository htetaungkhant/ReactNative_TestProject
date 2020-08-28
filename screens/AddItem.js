import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddItem = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.itemInput} placeholder="Enter Item Name ..." placeholderTextColor="#E5E7E9" />
            <TextInput style={styles.itemInput} keyboardType='numeric' placeholder="Enter Item Price ..." placeholderTextColor="#E5E7E9" />
            <Button style={styles.btnAdd}><Text style={{ color: '#FFF', fontSize: 20 }}><Ionicons name="add-circle-outline" size={25} />ADD</Text></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#145374',
        alignItems: 'center'
    },
    itemInput: {
        width: '95%',
        padding: 10,
        marginTop: 3,
        borderWidth: 3,
        borderColor: '#ee6f57',
        borderRadius: 5,
        fontSize: 20,
        color: '#FFF',
    },
    btnAdd: {
        width: '50%',
        marginTop: 5,
        backgroundColor: '#81b214'
    }
})

export default AddItem;