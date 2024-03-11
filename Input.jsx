
import React from 'react'
import { TextInput, Checkbox, MD3Colors,Icon } from "react-native-paper";

const Input= ({label, mode, placeholder,size,color, secureTextEntry, onChangeText, IconName2,IconName,background,hidden}) => {
    let input = true
  return (
    <>
        <TextInput 
          textColor='white' 
            label={label}
            mode= {mode}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            
            placeholder={placeholder}
            style={{backgroundColor:{background}, width:350 ,marginBottom:20,height:30,padding:2}}
            left={<TextInput.Icon 
                    icon={IconName}
                    size={size}
                    color={color}
            />}
            right={<TextInput.Icon 
                icon={IconName2}
                size={size}
                color={color}
                onPress={hidden}
        />}
        />
    </>
  )
}

export  {Input}