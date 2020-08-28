import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList,
} from 'react-native';

const History = () => {
    const [items, setItem] = useState([
        { id: '1', name: 'Apple', price: 10 },
        { id: '2', name: 'Orange', price: 22 },
        { id: '3', name: 'Banana', price: 22 },
        { id: '4', name: 'Coconut', price: 22 },
        { id: '5', name: 'Coconut', price: 22 },
        { id: '6', name: 'Coconut', price: 22 },
        { id: '7', name: 'Coconut', price: 22 },
        { id: '8', name: 'Coconut', price: 22 },
        { id: '9', name: 'Coconut', price: 22 },
        { id: '10', name: 'Coconut', price: 22 },
        { id: '11', name: 'Coconut', price: 22 }
    ]);

    const tempItems = [
        { id: '1', name: 'Apple', price: 10 },
        { id: '2', name: 'Orange', price: 22 },
        { id: '3', name: 'Banana', price: 22 },
        { id: '4', name: 'Coconut', price: 22 },
        { id: '5', name: 'Coconut', price: 22 },
        { id: '6', name: 'Coconut', price: 22 },
        { id: '7', name: 'Coconut', price: 22 },
        { id: '8', name: 'Coconut', price: 22 },
        { id: '9', name: 'Coconut', price: 22 },
        { id: '10', name: 'Coconut', price: 22 },
        { id: '11', name: 'Coconut', price: 22 }
    ];

    const searchItem = (text) => {
        if (text != "") {
            setItem(tempItems.filter(item => item.name.toLowerCase().includes(text.toLowerCase())));
        }
        else {
            setItem(tempItems);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={{ width: '50%', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ width: '50%', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{item.price}$</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '95%', marginTop: 3 }}>
                <TextInput style={styles.searchInput} onChangeText={searchItem} maxLength={30} placeholder="Search here ..." placeholderTextColor="#E5E7E9" />
            </View>
            <View style={{ width: '95%', padding: 10, marginTop: 10, borderRadius: 2, flexDirection: 'row', backgroundColor: '#5eaaa8' }}>
                <Text style={{ width: '50%', fontSize: 20, fontWeight: 'bold' }}>Item Name</Text>
                <Text style={{ width: '50%', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Price</Text>
            </View>
            <FlatList
                style={{ width: '95%', marginBottom: 10, marginTop: 5 }}
                data={items}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#145374"
    },
    searchInput: {
        width: '100%',
        padding: 10,
        borderWidth: 3,
        borderColor: '#ee6f57',
        borderRadius: 5,
        fontSize: 20,
        color: '#FFF',
    },
    item: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        borderRadius: 2,
        backgroundColor: '#a3d2ca'
    }
});

export default History;