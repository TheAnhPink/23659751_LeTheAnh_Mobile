
import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import UserCard from '../components/Tuan1/UserCard'
import Counter from '../components/Tuan1/Counter'

  

function index() {
  return (
    <View style={styles.container}>
      <Text>Bài 1: </Text> 
      <UserCard name="TheAnh" age={21} isAdmin={true}></UserCard>
      <br />
      <Text>Bài 2: </Text>
      <Counter></Counter>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
      height: 678,
      width:400,
      borderWidth: 2,
      borderColor: "black",
      padding: 20,
      margin: 20,
      borderRadius: 15
    }
})

export default index
