import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet,Text, View,TouchableOpacity,Dimensions,Image,Pressable, ScrollView,FlatList} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';

import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";
import { Input } from './Input';
import { color } from '@rneui/base';
import List from './components/List';

import React, { useEffect, useState } from 'react'

const fullHeight=Dimensions.get('screen').height


    export default function PostSFetch()

    {
    
      const [post3, setPost3] = useState([])
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
        }
      };

    
  
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => setPost3(response.results))
  .catch(err => console.error(err));
  useEffect(()=>{
  })  
return(

    <View>

    <View style={{backgroundColor:"#1f2123",paddingLeft:15,paddingTop:30,paddingBottom:20,display:'flex',flexDirection:'row',gap:25}}>
    

    <Image source={require('./assets/logo.jpg')}/>
    </View>
 <View style={{backgroundColor:"#1f2123",paddingLeft:25,paddingTop:3,paddingBottom:20,display:'flex',flexDirection:'row',gap:25}}>
    <TouchableOpacity>
      <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>My List</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={{color:'yellow',fontWeight:'bold',fontSize:20}}>DownLoaded</Text>
    </TouchableOpacity>
    </View>
    <View style={{backgroundColor:'#26282c',display:'flex',height:700,paddingLeft:10}}>
    <FlatList
        
          
          data={post3}
          keyExtractor={item => {
            return item.id
          }}
          ItemSeparatorComponent={() => {
            return <View style={{width: 20}}/>
          }}
          renderItem={post => {
            const item = post.item 

            // console.log(item.poster_path);
             return (
              <List image={item.poster_path}  
                   Title={item.name}
                   votecount={item.vote_count}
              />
            )
          }}
        />
        </View>
        
    </View>
);
}