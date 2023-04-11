import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Quiz from './Quiz'
const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.title}>
        <Text style = {styles.titletext} resizeMode = 'contain'>Quizzer</Text>
      </View>
      <View style = {styles.imageContainer} >
        <Image style = {styles.Image} source={require('../assets/blue.jpg')} resizeMode='contain' ></Image>
      </View>
      <View startbtnContainer>
        <TouchableOpacity onPress={()=>navigation.navigate('Quiz')} style = {styles.startbtn}>
          <Text style = {styles.starttext} >Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#152238'
  },
  title: {
    alignItems: 'center',
    backgroundColor: '#152238',
    padding: 50,
  },
  titletext : {
    fontSize: 40,
    fontWeight: '700'
  },
  Image : {
    width: 360,
  },
  imageContainer: {
  },
  startbtn: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: 'grey',
      marginLeft: 130,
      marginTop: 108
  },
  startbtnContainer: {
  },
  starttext: {
    color: 'black',
    fontSize: 20
  }
})