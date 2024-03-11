import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Dimensions,Image,Pressable, ScrollView,FlatList, TouchableHighlight} from 'react-native';
const height=Dimensions.get('screen').height;
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import PostSFetch1 from './Action';
                    
import { Icon } from "react-native-elements";
import { TextInput,Checkbox} from "react-native-paper";
import { Input } from './Input';
import { color } from '@rneui/base';
import Inputcomp from './components/Inputcomp';
import Popular from './Popular';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'


const fullHeight=Dimensions.get('screen').height
export default function PostSFetch({navigation})

{

  const [posts, setPosts] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setPosts(response.results))
    .catch(err => console.error(err));
  useEffect(()=>{

  })

  const [post2, setPost2] = useState([])
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => setPost2(response.results))
  .catch(err => console.error(err));
  useEffect(()=>{
  })  
  
  
  const [post3, setPost3] = useState([])
  
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => setPost3(response.results))
  .catch(err => console.error(err));
  useEffect(()=>{
  })  
  

   const getData = async () => {
    let data = await AsyncStorage.getItem('user_data')
    console.log(data);
   }
    
    useEffect(()=>{
      getData()
    },[])


  return(
    <View>
      <ScrollView  showsHorizontalScrollIndicator={false}>
<View style={{backgroundColor:"#1f2123",paddingTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<Image source={require('../Movi-master/assets/logo.jpg')} style={{width:117,paddingLeft:50}}/>
<View style={{display:'flex',flexDirection:'row'}}>
<Icon name='bookmark-outline' iconStyle={{color:'white'}}/>
<Icon name='bell-outline' type='material-community' iconStyle={{color:'white'}}/>
</View>
</View>
<View style={{backgroundColor:"#1f2123"}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <Text style={{color:'yellow',fontWeight:'bold',fontSize:17,paddingHorizontal:15}}>Featured</Text>
    <Text style={{color:'white',fontWeight:'bold',fontSize:17,paddingHorizontal:15}}>series</Text>
    <Text style={{color:'white',fontWeight:'bold',fontSize:17,paddingHorizontal:15}}>Films</Text>
    <Text style={{color:'white',fontWeight:'bold',fontSize:17,paddingHorizontal:15}}>Original</Text>
    <Text style={{color:'white',fontWeight:'bold',fontSize:17,paddingHorizontal:15}}>pages</Text>
    <Text style={{color:'white',fontWeight:'bold',fontSize:17,paddingHorizontal:15}}>Foundation</Text>
    </ScrollView>
    
</View>
<View style={{backgroundColor:'#26282c',display:'flex',paddingTop:30,height:1200,paddingLeft:10}}>
<View>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>Popular Today</Text>
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>Marvel</Text>
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>Fans choice</Text>
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>Star watch</Text>
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>Marvel</Text>
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>Movi</Text>
    <Text style={{color:'white',borderWidth:1,borderRadius:4,height:30,padding:10,paddingTop:2,borderColor:'gray',marginRight:20}}>material</Text>


</ScrollView>
</View>
<View style={{paddingTop:2}}>
  <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>New Release</Text>
</View>


  
        <FlatList
        horizontal={true}
          
          data={posts}
          keyExtractor={item =>{
            return item.id
          }}
          ItemSeparatorComponent={() => {
            return <View style={{width: 20}}/>
          }}
          renderItem={post =>
            
             {
            const item = post.item 

            // console.log(item.poster_path);
             return (
              <>
            
            <Inputcomp image={item.poster_path} 
                         Title={item.vote_average}
                         handlPress={()=>navigation.navigate('Action',item)}
                        
              />
            
            
            </>
            
              
            )
          }}
        />



<ScrollView horizontal>
  
</ScrollView>
<View style={{}}>
  <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:10}}>Made For You</Text>
</View>

<FlatList
        horizontal={true}
          
          data={post2}
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
              <>
              <TouchableHighlight onPress={()=>navigation.navigate('Action',item)}>

            

              <Inputcomp image={item.poster_path} 
                         Title={item.id}
              />
              </TouchableHighlight>
              </>
            )

          }}
        />
        <ScrollView horizontal style={{}}>
  
  </ScrollView>
<ScrollView  style={{marginTop:0}}>
  



<View style={{}}>
  <Text style={{color:'white',fontWeight:'bold',fontSize:20,marginTop:10}}>Popular On <Text style={{color:'yellow'}}>Movi</Text></Text>
</View>
<FlatList
        horizontal={false}
          
          data={post3}
          keyExtractor={item => {
            return item.id
          }}
          ItemSeparatorComponent={() => {
            return <View style={{width: 60}}/>
          }}
          renderItem={post => {
            const item = post.item 

            // console.log(item.poster_path);
             return (
              
              <Popular image={item.poster_path}  />
            )
          }}
        />
        </ScrollView>

</View>

</ScrollView>
</View>



);
}

