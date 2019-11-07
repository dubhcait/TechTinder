import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

import NopeComponent from '../components/NopeStamp';
import LikeComponent from '../components/LikeStamp';
import EndComponent from '../components/EndMessage';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Tech = [
  { id: "1", uri: require('../assets/cards/React.png') },
  { id: "2", uri: require('../assets/cards/css.png') },
  { id: "3", uri: require('../assets/cards/elixir.jpeg') },
  { id: "4", uri: require('../assets/cards/js.png') },
  { id: "5", uri: require('../assets/cards/go.png') },
  { id: "6", uri: require('../assets/cards/html.png') },
  { id: "7", uri: require('../assets/cards/firebase.png') },
  { id: "8", uri: require('../assets/cards/svg.png') },
  { id: "9", uri: require('../assets/cards/python.jpeg') },

]

export default class HomeScreen extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.7, 1],
      extrapolate: 'clamp'
    })

  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderTech = () => {

    return Tech.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 20, position: 'absolute', ...styles.imageContainer }]}>
           
            <LikeComponent style={{ likeAnimation: { ...styles.likeAnimation, opacity: this.likeOpacity }, Like: styles.Like }} />
            <NopeComponent style={{ nopeAnimation: { ...styles.nopeAnimation, opacity: this.dislikeOpacity}, Nope: styles.Nope }} />


            <Image
              style={styles.image}
              source={item.uri} />

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
           
            <LikeComponent style={{ likeAnimation: styles.likeAnimation, Like: styles.Like }} />
            <NopeComponent style={{ nopeAnimation: styles.nopeAnimation, Nope: styles.Nope }} />


            <Image
              style={styles.image}
              source={item.uri} />

          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1, }}>
  
        <View style={{ flex: 1 }}>
          {this.renderTech()}
          {this.state.currentIndex === Tech.length ? <EndComponent style={{ height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 20, justifyContent: 'center', alignItems: 'center' }}/>: null}
        </View>
        <View style={{ height: 60 }}>

        </View>


      </View>

    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Hot or Not',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {

  },
  image: {
    flex: 1, height: null,
    width: null,
    resizeMode: 'contain',
    borderRadius: 20,
    backgroundColor: 'white'
  },
  Nope: { borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 },
  nopeAnimation: { opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 },
  Like: { borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 },
  likeAnimation: { opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 },
});