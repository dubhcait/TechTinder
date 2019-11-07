import React from 'react';
import { ScrollView, StyleSheet, View, Text, Linking, Image } from 'react-native';


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={{  alignItems: 'center', padding: 20}}>
        <View style={{ height:140}}> 
         <Image  source={require('../assets/images/linkPgImg.png')} style={{resizeMode: 'contain'}}/>
         </View>
      
      <Text style={styles.text}>This is a personal project and just a bit of fun.</Text>
      <Text style={styles.text} >However, if you would like create an issue on my repo to leave feedback, It would make my day.</Text>
     
    <Text style={styles.text}>
      The code for this app is avalible 
    </Text>
    <Text style={{...styles.text, ...styles.link }} onPress={()=>{Linking.openURL('https://github.com/dubhcait/TechTinder')}}> here.</Text>
    </View>

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',

  },
  link: {
    fontWeight: '800'
  },
  text: {
    marginVertical: 20,
    fontSize: 18,
    textAlign:'center',
  }
});
