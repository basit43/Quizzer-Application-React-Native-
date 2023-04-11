import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quiz = ({ navigation }) => {

  const [questions, setQuestion] = useState();
  const [ques, setques] = useState(0);
  const [option, setOption] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setloading] = useState(false);
  const getQuiz = async () => {
      setloading(true);
      const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986'
      const res = await fetch(url);
      const data = await res.json();
      setQuestion(data.results);
      setOption(generateOptionsAndShuffle(data.results[0]))
      setloading(false);
  }
  useEffect(() => {
      getQuiz()
  }, [])
  const handleNext = () => {
      setques(ques + 1);
      setOption(generateOptionsAndShuffle(questions[ques + 1]))
  }
  const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]
      }
  }
  const generateOptionsAndShuffle = (_question) => {
      const options = [..._question.incorrect_answers]
      options.push(_question.correct_answer)
      shuffleArray(options)
      return (options)
  }
  const handleSelectedOption = (_option) => {
      if(_option === (questions[ques].correct_answer))
      {
          setScore(score+10);
      }
      if(ques!==9)
      {
          setques(ques + 1)
          setOption(generateOptionsAndShuffle(questions[ques + 1]));
      }
  }
  const handleShowResult = ()=>{
      navigation.navigate('Result', {
          score: score
      }
      )
  }
  return (
    <View style = {styles.parentContainer}  >
        { loading ?<View style = {styles.loading}><Text style = {styles.loadingText} >Loading...</Text></View> : questions && 
        <View>
            <View >
                <Text style = {styles.questions}>Q. {decodeURIComponent(questions[ques].question)}</Text>
            </View>
            <View style={styles.optionContainer} >
                <TouchableOpacity style={styles.option} onPress={() => handleSelectedOption(option[0])} ><Text>
                    1: {decodeURIComponent(option[0])} </Text></TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => handleSelectedOption(option[1])} ><Text>
                    2: {decodeURIComponent(option[1])} </Text></TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => handleSelectedOption(option[2])} ><Text>
                    3: {decodeURIComponent(option[2])} </Text></TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => handleSelectedOption(option[3])}  ><Text>
                    4: {decodeURIComponent(option[3])} </Text></TouchableOpacity>
            </View>
            <View style={styles.nextContainer}>
                {/* <TouchableOpacity onPress={handleBack} style={styles.button1} ><Text>Back</Text></TouchableOpacity>*/}
                
                {ques !== 9 && <TouchableOpacity onPress={handleNext} style={styles.buttonend} ><Text>Next</Text></TouchableOpacity>}

                {ques === 9 && <TouchableOpacity onPress={handleShowResult} style={styles.results} ><Text>Show Result</Text></TouchableOpacity>}
            </View>
        </View>}
    </View>
)
}

export default Quiz

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#152238',
    height: '100%'
  },
  questions: {
    fontSize: 20
  },
  questionContainer: {
    backgroundColor: '#152238',
    height: 100,
    margin: 10,
    borderRadius: 5,
    position: 'static'
  },
  option: {
    backgroundColor: 'grey',
    height: 90,
    padding: 10,
    paddingTop: 35,
    borderRadius: 20,
    margin: 5
},
optionContainer: {
  height: 400,
  backgroundColor: '#152238',
  margin: 10,
  marginTop: 80,
  borderRadius: 10
},
optionText: {
  color: 'black'
},
nextContainer: {
      width: 200,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: 'grey',
      marginLeft: 80,
      marginTop: 50
},
loadingText: {
  color: 'black',
  backgroundColor: '#152238',
  alignItems: 'center',
  fontWeight: '400',
  fontSize: 60,
},
loading: {
  alignItems: 'center',
}
})