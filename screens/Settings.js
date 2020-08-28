import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Button style={styles.btnDelete}><Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>Delete All Histories</Text></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#145374"
    },
    btnDelete: {
        padding: 5,
        backgroundColor: '#ec0101'
    }
})

export default Settings;