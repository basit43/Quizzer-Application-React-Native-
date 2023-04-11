import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const resultPicture = score > 40 ? "https://img.freepik.com/free-vector/vintage-sport-prize-template_1284-40599.jpg?w=2000" : "https://media.istockphoto.com/id/951985126/vector/fail-ink-stamp.jpg?s=612x612&w=0&k=20&c=YIHZIUaRLJqNArnsvWWIswGIn3Q5y7FWxUsNQs-rzrQ="
  return (
    <View>
      <View style = {styles.resultContainer}>
        <Text style = {styles.resultText} >Result = {score}</Text>
      </View>
      <View>
      <Image 
        source={{uri: resultPicture}}
        style = {styles.imageResult}></Image>
      </View>
      <TouchableOpacity style = {styles.goHome} onPress={()=>navigation.navigate('Home')} >
        <Text style = {styles.goHometext} >Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#152238',
    padding: 50,
    borderRadius: 10,
    margin: 20
  },
  resultText: {
    fontSize: 40,
    fontWeight: '700'
  },
  imageResult: {
    width: 360,
    height: 300
  },
  goHome: {
    alignItems: 'center',
    backgroundColor: '#152238',
    padding: 50,
    borderRadius: 10,
    margin: 20
  },
  goHometext: {
    fontSize: 30,
    fontWeight: '700'
  }
})