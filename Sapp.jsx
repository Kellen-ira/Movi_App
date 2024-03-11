
import React from 'react';
import { TextInput, Checkbox, MD3Colors,Icon } from "react-native-paper";

const Sapp= ({label, mode, placeholder,size,color, secureTextEntry, onChangeText, IconName,background}) => {
    let input = true
  return (
    <>
        <TextInput  
            label={label}
            mode= {mode}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={{backgroundColor:{background}, width:450 ,marginBottom:20,height:30,padding:5}}
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

export   {Sapp}