
import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import UserCard from '../components/Tuan1/UserCard'
import Counter from '../components/Tuan1/Counter'
import TodoList from '@/components/Tuan1/TodoList'

  const todos=[
    { id: "1", title: "Học React Native" },
  { id: "2", title: "Học TypeScript" },
  { id: "3", title: "Làm bài tập" }
  ]

function index() {
  return (
    <View style={styles.container}>
      <h3>Bài 1: </h3> 
      <UserCard name="TheAnh" age={21} isAdmin={true}></UserCard>
      <br />

      <h3>Bài 2: </h3>
      <Counter></Counter>
      <br />

      <h3>Bài 3: </h3>
      <TodoList props={todos} ></TodoList>

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
