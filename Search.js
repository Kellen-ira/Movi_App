import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image,FlatList, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import React, { useState } from 'react';

import { TextInput,Checkbox} from "react-native-paper";

import { Icon } from 'react-native-elements';

import Imgcomp from './components/Imgcomp'



 
const Search = ({navigation}) => {

  const [search,setSearch] = useState([])
  const [searchdata,setSearchdata] = useState('')
 
  React.useEffect(() => {
   if (searchdata.length > 0){
     Searchapi()
   }else{
     setSearch([])
   }
    
  }, [searchdata])
 
  const Searchapi = async () => {
   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${searchdata}&page=1&include_adult=false`)
    .then((data1)=>{
      console.log(data1.data.results);
     setSearch(data1.data.results)
    }).catch((err)=>{
     console.log(err)
    })
  }

  
 return (
  
   <View>

    <View style={{backgroundColor:"#26282c",paddingLeft:50,paddingTop:30}}>

<Text style={{color:'white',fontWeight:'bold',fontSize:20,paddingBottom:20}}>Search</Text>
</View>
<View style={{backgroundColor:'#26282c',display:'flex',height:700}}>
  <View style={{display:'flex',flexDirection:'row',alignItems:'flex-end',width:720}}>
<TextInput
textColor='white'
  placeholder={'Type Title,Categories,Years,etc'}
  value={searchdata}
  onChangeText={setSearchdata}
  mode={'outlined'}
  style={{backgroundColor:'#26282c'}}
  background={'#26282c'}
  name={'search'}

  right={<TextInput.Icon 
    icon={'magnify'}
    size={30}
    color={'yellow'}
/>} 

  />

  </View>
     <View>
                <FlatList
                    data={search}
                    renderItem={({item }) =>
                    
                    <>
                    <TouchableHighlight onPress={()=>navigation.navigate('Action',item)}>

                        <Imgcomp img={item.poster_path}
                                 title_movie={item.original_title}
                                 votecount={item.vote_count}
                                  />
                        </TouchableHighlight>
                        </>
                        }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

           

  

</View>
</View>

);
};




export default Search;