import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movi from './movi';
 import Screen1 from './screen1.js';
import Screen2 from './screen2.js';
import Sign from './signin.js';
import Signup from './signup.js';
import HomePage from './HomePage.js';
import Search from './Search.js';
import Profile from './Profile.js';
 import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from "react-native-vector-icons/Feather";
const Stack = createNativeStackNavigator();

 export default function Navigation() {
 return (
  










        <NavigationContainer>
         <Stack.Navigator initialRouteName='Profile'>
        <Stack.Screen
          name="movi"
          component={Movi}
          options={{headerShown:false}}
        />
        <Stack.Screen name="screen" component={Screen1} options={{headerShown:false}} />
      
      <Stack.Screen name="screen2" component={Screen2} options={{headerShown:false}} />
      <Stack.Screen name="signin" component={Sign} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />
      <Stack.Screen name="signup" component={Signup} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />
      <Stack.Screen name="HomePage" component={HomePage} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />
      <Stack.Screen name="Search" component={Search} options={{headerShown:false}} /> 
         <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />  
      </Stack.Navigator>
      </NavigationContainer>

      
 
  );
 }


 export const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
  
            if (route.name === 'Home1') {
              iconName = 'home';
            } else if (route.name === 'Search1') {
              iconName = 'search';
            } else if (route.name === 'List1') {
              iconName = 'folder';
            }else if (route.name === 'Profile1') {
              iconName = 'grid';
            }
  
            return <Feather name={iconName} style={{ fontSize: 26, color: focused ? '#D9BE52' : '#CACCCE' }} />;
          },
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
             <Tab.Screen name="Home1" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Search1" component={Search} options={{ headerShown: false }} />
      <Tab.Screen name="List1" component={List} options={{ headerShown: false }} />
      <Tab.Screen name="Profile1" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};