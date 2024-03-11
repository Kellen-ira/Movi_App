import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bottoms from './components/Bottoms.jsx';

import { TextInput, Checkbox } from "react-native-paper";
import Imagecomp from './components/Imagecomp.jsx';
import { Icon } from 'react-native-elements';
import { MyDrawer } from './Drawer.js';

const image = require('../Movi-master/assets/k.jpg')
export default function Profile({ navigation }) {


    return (

        <View style={{ backgroundColor: "#1f2123", height: 800 }}>

            <View style={{ backgroundColor: "#1f2123", paddingLeft: 50, paddingTop: 30, paddingBottom: 20, display: 'flex', flexDirection: 'row', gap: 25 }}>

                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>More</Text>
            </View>
            <View style={{ paddingLeft: 140, backgroundColor: "#1f2123", paddingTop: 10 }}>
                <Image source={require('./assets/k.jpg')} style={{ width: 150, height: 150 }} />
            </View>

            <View style={{ backgroundColor: '#1f2123', display: 'flex', paddingTop: 5, paddingLeft: 10 }}>

                <View>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, paddingTop: -10 }}>Kellen IRAKOZE</Text>
                    <Text style={{ color: 'white', textAlign: 'center', color: 'gray' }}>ikellen2016@gmail.com</Text>
                </View>
                <View>
                    <Pressable onPress={() => navigation.navigate("EditProfile")}>
                        <Text style={{ color: 'yellow', textAlign: 'center', paddingTop: 10 }}>Edit Profile</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ backgroundColor: '#1f2123', display: 'flex', paddingTop: 25, height: 100, paddingLeft: 5 }}>
                <View style={{ display: 'flex', flexDirection: 'row', color: 'white', marginBottom: 15, paddingLeft: 20, gap: 25 }}>
                    <Icon
                        name='inbox'
                        color='white'
                    />
                    <Text style={{ color: 'white', fontSize: 15 }}>Inbox</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', color: 'white', marginBottom: 15, paddingLeft: 20, gap: 25 }}>
                    <Icon
                        name='account-outline' type="material-community"
                        color='white'
                    />
                    <Text style={{ color: 'white', fontSize: 15 }}>Account Setting</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', color: 'white', marginBottom: 15, paddingLeft: 20, gap: 25 }}>
                    <Icon
                        name='language'
                        color='white'
                    />
                    <Text style={{ color: 'white', fontSize: 15 }}>Language</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', color: 'white', paddingLeft: 20, gap: 25 }}>
                    <Icon
                        name='information-outline' type="material-community"
                        color='white'
                    />
                    <Text style={{ color: 'white', fontSize: 15, marginBottom: 30 }}>Help, FAQ</Text>
                </View>
                <View style={{ paddingLeft: 20 }}>
                    <Text style={{ color: 'gray', fontSize: 16, marginBottom: 15 }}>Term & Condition</Text>
                    <Text style={{ color: 'gray', fontSize: 16, marginBottom: 60 }}>Privacy & Policy</Text>
                </View>
                <View style={{ paddingLeft: 15, marginBottom: 10 }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 5, padding: 10, borderColor: 'gray', width: 360 }}>
                        <Text style={{ color: 'red', textAlign: 'center' }}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>





    )
}


