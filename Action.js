import { View, Text ,Image, TouchableOpacity,FlatList, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import ActionImage from './components/ActionImage';
import YoutubeIframe from 'react-native-youtube-iframe';

export default function PostSFetch({route})



{

const movie = route.params
console.log(route.params)
const [VideoPlay,setVideoPlay] = useState('')

  const [post, setPost] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32-d9hDkp91rDw98i-VzmDQIOVZA-0DHeIOn9Af2JTI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setPost(response.results))
    .catch(err => console.error(err));
  useEffect(()=>{

  })

  const [post2, setPost2] = useState([])
  
  
  fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options)

  .then(response => response.json())
  .then(response => {setVideoPlay(response.results[0].key)})
  .catch(err => console.error(err));
  useEffect(()=>{
  })  

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
    <View style={{backgroundColor:'#26282c',paddingLeft:20}}>
      
      {/* <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={{width:370,height:180}}/> */}
      <YoutubeIframe
      height={300}
      //play={playing}
      videoId={VideoPlay}
      
      />
    </View>
    <View style={{backgroundColor:'#26282c',paddingLeft:20}}>
        <Text style={{color:"#fff",fontSize:20}}>{movie.title}</Text>
        <Text style={{color:"#fff",fontSize:16}}>{movie.overview}</Text>
    </View>
    <View style={{backgroundColor:'#26282c',paddingLeft:18,paddingTop:20,display:'flex',flexDirection:'row',gap:20}}>
      
        <TouchableOpacity style={{borderWidth:1,width:180,backgroundColor:'yellow',padding:10,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Icon name="play" type="material-community" />
            <Text>Play</Text>
            
        </TouchableOpacity>
        
        
        <TouchableOpacity style={{borderWidth:1,width:180,padding:10,borderColor:'gray',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.navigate('List')}>
          <Icon name='plus' type="material-community" color="yellow"/>
            <Text style={{textAlign:'center',color:'#fff'}}>My List</Text>
        </TouchableOpacity>
        
    </View>
    <View style={{backgroundColor:'#26282c',paddingLeft:20,paddingTop:20}}>
        <Text style={{color:"#fff",fontSize:20}}>U.S Action Movies</Text>
    </View>
    <View style={{backgroundColor:'#26282c',paddingLeft:20}}> 
    <FlatList
        horizontal={true}
          
          data={post}
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
              <ActionImage image={item.poster_path}  />
            )
          }}
        />
        </View>
        <View  style={{backgroundColor:'#26282c',paddingLeft:20}}>
        <Text style={{color:"#fff",fontSize:20}}>Movi Originals Action</Text>
        </View>
        <View style={{backgroundColor:'#26282c',paddingLeft:20,height:500,paddingTop:-50}}>
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
              <ActionImage image={item.poster_path}  />
            )
          }}
        />
        </View>
        </ScrollView>
            </View>
  ) 
}