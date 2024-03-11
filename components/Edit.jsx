import { View, Text,Image } from 'react-native'
import React from 'react'
const Edit=({image,Icon,label, mode, placeholder,size,color, secureTextEntry, onChangeText, IconName,background})=>{
let Edit = true
 return (
      <>
      
      <Image source={image} style={{width:150,height:148}}/>
    
      <TextInput  
            label={label}
            mode= {mode}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={{backgroundColor:{background}, width:350 ,marginBottom:20,height:30,padding:2,color:'white'}}
            left={<TextInput.Icon 
                    icon={IconName}
                    size={size}
                    color={color}
            />}
            right={<TextInput.Icon 
                name={IconName}
                size={size}
                color={color}
        />}
        />
      
      
      </>
    
  )
}
export {Edit}