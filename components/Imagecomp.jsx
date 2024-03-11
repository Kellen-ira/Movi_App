import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'


const Imagecomp = ({image,label,mode,onChangeText,IconName,IconName2,size,color,placeholder,background}) => {
  return (
    <View style={{width:390,height:100,paddingTop:40,paddingLeft:30}}>
      {/* <Image source={image} style={{width:150,height:148}}/> */}
      <TextInput
      
      textColor="white"
      label={label}
      mode= {mode}
      placeholder={placeholder}
      style={{backgroundColor:{background}}}
      onChangeText={onChangeText}
      left={<TextInput.Icon 
        // icon={IconName}
        // size={size}
        // color={color}
       />}

        right={<TextInput.Icon 
        icon={IconName2}
        // size={size}
        color={color}
        
        />}
      
      
      />
    </View>
  )
}

export default Imagecomp

const styles = StyleSheet.create({})