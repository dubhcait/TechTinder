import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native';
const homeIcon = require('../assets/images/Asset1.png')
const LinksIcon = require('../assets/images/Asset2.png')


export default function TabBarIcon(props) {
  return (
    <Image
    style={[{width: 40, height: 40, resizeMode: 'contain'}, props.focused ? {opacity: 1} : {opacity : 0.6}]}
    source={props.name == 'home'? homeIcon: LinksIcon } 
  />
    
  );
}
