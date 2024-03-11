import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

export const MyDrawer= ()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="profile1" component={Profile} />
      
    </Drawer.Navigator>
  );
}
