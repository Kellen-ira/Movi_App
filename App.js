import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Movi from './movi.js';
 import Screen1 from './screen1.js';
import Screen2 from './screen2.js';
import Sign from './signin.js';
import Signup from './signup.js';
import HomePage from './HomePage.js';
import Search from './Search.js';
import Profile from './Profile.js';
import List from './MyList.js';
import Action from './Action.js';
import EditProfile from './EditProfile.js';
 import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MyDrawer } from './Drawer.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from "react-native-vector-icons/Feather";
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Series from './Series.js';
import Films from './Films.js';

const Stack = createNativeStackNavigator();
const Tab= createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

const StackNavigation = ()=>{   
  return(

<Stack.Navigator initialRouteName='signin'>


<Stack.Screen name="movi" component={Movi} options={{headerShown:false}}/>
<Stack.Screen name="screen" component={Screen1} options={{headerShown:false}} />

<Stack.Screen name="screen2" component={Screen2} options={{headerShown:false}} />
<Stack.Screen name="signin" component={Sign} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />
<Stack.Screen name="signup" component={Signup} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />
<Stack.Screen name="HomePage" component={TabNavigator} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />
<Stack.Screen name="Search" component={Search} options={{headerShown:false}} /> 
 <Stack.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}} />  
 <Stack.Screen name="List" component={List} options={{headerShown:false}} />
 <Stack.Screen name="Action" component={Action} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}}/>
 <Stack.Screen name="EditProfile" component={EditProfile} options={{headerStyle:{backgroundColor:'#1f2123'},headerTintColor:'white',headerBackTitleVisible:null}}/>
</Stack.Navigator>
  )

}

const TabNavigator = () => {
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
           <Tab.Screen name="Home1" component={TopNavigation} options={{}}/>
    <Tab.Screen name="Search1" component={Search} options={{ headerShown: false }} />
    <Tab.Screen name="List1" component={List} options={{ headerShown: false }} />
    <Tab.Screen name="Profile1" component={MyDrawer} options={{ headerShown: false }} />
    
  </Tab.Navigator>
  );
};
const TopNavigation = ()=>{
  return(
    <Top.Navigator>
      <Top.Screen name='Featured' component={HomePage}/>
      <Top.Screen name='Series' component={Series}/>
      <Top.Screen name='Films' component={Films}/>
    </Top.Navigator>
    
  ); 
}

export default function App() {
  return (
   
         <NavigationContainer>
   <StackNavigation/>
       </NavigationContainer>
 
       
  
   );
  }