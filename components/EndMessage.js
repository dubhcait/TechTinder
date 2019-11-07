import React from 'react';
import {View, Image, Text} from 'react-native';
  
  
export default EndComponent = (props) => {
    return (
        <View style={props.style}>
            <Image  source={require('../assets/images/Asset9.png')} style={{height: "40%", width: '80%', resizeMode: 'contain' }}/>
        <Text>There’s no new tech around you</Text>
      </View>
 )}

   