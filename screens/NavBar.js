import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import AddItem from './AddItem';
import History from './History';
import Settings from './Settings';

const Tab = createMaterialBottomTabNavigator();

const Navbar = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#ffffdd"
            inactiveColor="gray"
            barStyle={styles.navbar}
        >
            <Tab.Screen
                name="Add"
                component={AddItem}
                options={{
                    tabBarLabel: <Text style={{ fontSize: 15 }}>ADD</Text>,
                    tabBarIcon: ({ color }) => (
                        <EntypoIcons name="add-to-list" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarLabel: <Text style={{ fontSize: 15 }}>History</Text>,
                    tabBarIcon: ({ color }) => (
                        <FontAwesomeIcons name="history" color={color} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Settings}
                options={{
                    tabBarLabel: <Text style={{ fontSize: 15 }}>Setting</Text>,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="settings" color={color} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#00334e',
    }
});

export default Navbar;