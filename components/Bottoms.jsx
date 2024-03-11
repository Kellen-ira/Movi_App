import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Search from '../Search';

const Bottoms = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="home-outline"
        type="material-community"
        size={30}
        color="yellow"
        // onPress={() => navigation.navigate('HomePage')}
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
      <Icon
        name="search"
        type="material"
        size={30}
        color="white"
        // onPress={() => navigation.navigate('Search')}
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
      <Icon
        name="folder-outline"
        type="material-community"
        size={30}
        color="white"
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
      <Icon
        name="apps"
        type="material"
        size={30}
        color="white"
        // onPress={()=>navigation.navigate('Profile')}
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#202123',
      padding:10
    },
});   
export default Bottoms;