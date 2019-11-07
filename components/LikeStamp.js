import React from 'react';
import {Animated, Text} from 'react-native';
  
  
export default LikeComponent = ({style}) => {
    return (
        <Animated.View style={style.likeAnimation}>
        <Text style={style.Like}>LIKE</Text>

      </Animated.View> )}